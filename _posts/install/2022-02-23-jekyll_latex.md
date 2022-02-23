---
layout: post
title: Jekyll Latex 문법 적용
tags: install
---

<br/>

마크다운(markdown) 문법은 강력한데 수식쓰기에는 버겁다<br/>
많이 쓰는 레이텍을 적용시켜 보자! <br/>
<br/>

## 레이텍(Latex) 문법 적용

기본 지킬 테마는 아래와 달리 수학 수식을 지원하지 않는다! <br/>
수식 넣을 때 불편하므로 플러그인 추가해주자

$$ x + y + z + = 1 $$

<br/>

## 경로 설정

`루트 디렉토리` - `_includes` - `head.html` <br/>
여기에 아래와 같은 코드를 추가해주자  <br/>

~~~html
<!-- Latex -->
<script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
~~~

