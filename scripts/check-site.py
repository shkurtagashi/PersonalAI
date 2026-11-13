#!/usr/bin/env python3
"""Check that the static app's local HTML assets exist and IDs are unique."""

from html.parser import HTMLParser
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parent.parent


class SiteChecker(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.errors: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        element_id = attributes.get("id")
        if element_id:
            if element_id in self.ids:
                self.errors.append(f"Duplicate HTML id: {element_id}")
            self.ids.add(element_id)

        asset = None
        if tag == "script":
            asset = attributes.get("src")
        elif tag == "link" and attributes.get("rel") == "stylesheet":
            asset = attributes.get("href")
        if asset and not asset.startswith(("https://", "http://", "//", "data:")):
            if not (ROOT / asset).is_file():
                self.errors.append(f"Missing local asset: {asset}")


html = (ROOT / "index.html").read_text(encoding="utf-8")
checker = SiteChecker()
checker.feed(html)

if checker.errors:
    raise SystemExit("\n".join(checker.errors))

app = (ROOT / "app.js").read_text(encoding="utf-8")
referenced_ids = set(re.findall(r'\$\("#([A-Za-z0-9_-]+)"', app))
missing_ids = referenced_ids - checker.ids
if missing_ids:
    raise SystemExit(f"JavaScript refers to missing HTML IDs: {', '.join(sorted(missing_ids))}")

print(f"Static site check passed ({len(checker.ids)} unique IDs, all JavaScript ID selectors found).")
