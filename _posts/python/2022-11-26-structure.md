---
title: "[Python] 파이썬 구조체"

category: python_useful
tags: [python, class, struct, structure, dataclass]
---

파이썬에서 구조체는 어떻게 정의하고 사용할까? <br/>
생각보다 쉽다... ! <br/>


## 헤더 선언

파이썬 3.7 기준으로 작성한다 <br/>

~~~python
from dataclasses import dataclass
~~~

헤더 파일로 위와 같이 선언해주자

<br/>

## 메인 코드

~~~python
@dataclass
class pose:               # 구조체 이름
  seq: int = 0            # 변수명: 타입 = 초기값
  timestamp: float = 0.0
  x: float = 0.0
  y: float = 0.0
  theta: float = 0.0
~~~

로보틱스에서 많이 사용되는 `pose` 관련하여 구조체를 작성해보았다. <br/>
아주 간단하다!! <br/>
class로 선언해주고 **[변수명: 타입 = 초기값]** 순서로 나열하면 된다


## 사용하는 곳

~~~python
p = pose() # 위에서 정의한 pose 구조체로 선언됨
p.seq = 2
p.timestamp = 10.2
p.x = 1.0
p.y = 2.0
p.theta = 0.05

print(p)
~~~

위와 같이 사용하면 된다~~ 참 쉽즁