#!/usr/bin/env bash
# Create a new per-club Switchboard demo from the template.
#   ./demo/new-club.sh "South Shore Athletic Club"
# Makes demo/<slug>/ with index.html, club.js and img/. Then fill in club.js,
# add photos to img/ (img/hero.jpg is the link-preview image), and commit.
set -euo pipefail

name="${1:-}"
if [ -z "$name" ]; then
  echo "usage: $0 \"Club Name\"" >&2
  exit 1
fi

here="$(cd "$(dirname "$0")" && pwd)"
slug="$(printf '%s' "$name" | tr '[:upper:]' '[:lower:]' | sed -e 's/&/and/g' -e 's/[^a-z0-9]\{1,\}/-/g' -e 's/^-//' -e 's/-$//')"
dest="$here/$slug"

if [ -e "$dest" ]; then
  echo "demo/$slug already exists" >&2
  exit 1
fi

mkdir -p "$dest/img"
# Escape characters that are special in a sed replacement.
safe_name="$(printf '%s' "$name" | sed -e 's/[\/&|]/\\&/g')"
for f in index.html club.js; do
  sed -e "s|__NAME__|$safe_name|g" -e "s|__SLUG__|$slug|g" "$here/_template/$f" > "$dest/$f"
done

echo "Created demo/$slug"
echo "Live link once pushed: https://switchboardcompany.com/demo/$slug/"
