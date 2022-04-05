---
title: "[Python] Quat to Euler"

toc: true
toc_sticky: true
category: python_useful
tags: [install, quaternion, euler, transformation, 변환]
---

C++ 예제만 포스팅 했는데, 파이썬도 빠르게 만들기 위해서 적어둔다 <br/>

~~~python

from tf.transformations import euler_from_quaternion, quaternion_from_euler

q_list = [q.x, q.y, q.z, q.w]
(r, p, y) = euler_from_quaternion(q_list)

~~~