# 테니스맵 홈페이지

[bigbigpark.github.io](https://bigbigpark.github.io/) 에서 서비스되는 **테니스맵** 앱 소개 페이지.
빌드 도구 없는 정적 HTML 이라, 파일을 고치고 `master` 에 push 하면 그대로 반영된다.

```
index.html              페이지 전체 (한국어·영어 문구가 함께 들어 있다)
assets/css/style.css    스타일
assets/js/main.js       한/영 전환 (텍스트 교체는 CSS 가 담당)
assets/img/screens/     앱 스크린샷
assets/qr/              스토어 QR 코드 (SVG)
tools/make-qr.py        QR 코드 생성기
```

## 출시 후 해야 할 일

`index.html` 의 **다운로드 섹션**에 주석으로 표시된 블록만 고치면 된다.
플랫폼마다 두 가지:

1. 타일의 `class="store-tile is-soon"` 에서 `is-soon` 을 지운다 → QR 가림막이 사라진다.
2. `<span class="store-btn" role="link" aria-disabled="true">` 를
   `<a class="store-btn" href="스토어_주소">` 로 바꾼다 (안쪽 내용은 그대로).

Android 주소는 이미 확정돼 있고 QR 도 만들어 뒀다:
`https://play.google.com/store/apps/details?id=com.tennismap.app`

iOS 는 심사를 통과해야 숫자 ID 가 나온다. 주소를 알게 되면 QR 을 만든다:

```bash
pip install segno
python3 tools/make-qr.py ios "https://apps.apple.com/kr/app/id<숫자ID>"
```

그리고 App Store 타일의 `<div class="qr qr-empty">` 안에
Google Play 타일처럼 `<img src="assets/qr/ios.svg" …>` 를 넣고 `qr-empty` 를 지운다.

## 문구를 고칠 때

한국어와 영어가 같은 자리에 `<span class="t-ko">` / `<span class="t-en">` 으로 나란히 들어 있다.
한쪽만 고치면 다른 언어에서 옛날 문구가 남으니 **둘 다** 고칠 것.

## 법적 고지

이용약관·개인정보처리방침은 이 저장소가 아니라 별도 저장소
[`tennismap-legal`](https://bigbigpark.github.io/tennismap-legal/) 에 있다.
푸터에서 링크로만 연결한다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```
