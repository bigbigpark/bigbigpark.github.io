---
title: "[Python] 간단한 알고리즘 수행시간 측정"

category: python_useful
tags: [install, time, timer, elasped, duration]
---

파이썬에서 아주 간단하게 알고리즘 측정 시간을 구해보자

## 코드

코드 상단에 다음과 같이 입력해주자

~~~python
import time

t_algorithm = time.time()
# 측정하고자 하는 알고리즘 코드 라인
print('t_algorithm: {} [sec]'.format(time.time() - t_algorithm))
~~~
<br/>

위와 같이 하면 알고리즘 수행 시간을 구할 수 있다. <br/>
단위는 **초[seconde]**이다