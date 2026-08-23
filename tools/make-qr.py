#!/usr/bin/env python3
"""스토어 링크 QR 코드(SVG) 생성기.

사용법:
    python3 tools/make-qr.py android "https://play.google.com/store/apps/details?id=com.tennismap.app"
    python3 tools/make-qr.py ios "https://apps.apple.com/kr/app/id0000000000"

결과물은 assets/qr/<name>.svg 로 저장되고, index.html 이 그대로 참조한다.
segno 가 필요하다:  pip install segno
"""
import sys
import pathlib

import segno

NAVY = "#0e2a47"


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 1

    name, url = sys.argv[1], sys.argv[2]
    out = pathlib.Path(__file__).resolve().parent.parent / "assets" / "qr" / f"{name}.svg"
    out.parent.mkdir(parents=True, exist_ok=True)

    qr = segno.make(url, error="m")
    qr.save(
        str(out),
        kind="svg",
        scale=10,
        border=2,
        dark=NAVY,
        light=None,      # 배경 투명 — 카드 색 위에 그대로 얹힌다
        omitsize=True,   # width/height 없이 viewBox 만 남겨 CSS 로 크기 조절
        xmldecl=False,
    )
    print(f"{out.relative_to(pathlib.Path.cwd())}  <-  {url}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
