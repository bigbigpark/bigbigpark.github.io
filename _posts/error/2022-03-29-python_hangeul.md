---
title: "[Python] 한글 입력 오류"

category: error
tags: [python, hangeul, 한글, 입력, unicode]
---

아래와 같은 에러가 날 경우 해결하자

## Error case

~~~bash
SyntaxError: Non-ASCII character '\xea' in file gps_test.py on line 18, but no encoding declared; see http://python.org/dev/peps/pep-0263/ for details
~~~

<br/>

## Solution

끝!

~~~python
 # -*- coding: utf-8 -*-
~~~
