---
title: "[C++] 쿼터니언-3x3행렬 서로 변환"

toc: true
toc_sticky: true
category: cpp_useful
tags: [c++, cpp, matrix, eigen, rotation, quaternion]
---

Eigen::Quaternion을 Eigen::Matrix3f로 바꿔보자 <br/>

물론 수식으로 바꿀 수는 있지만 라이브러리가 numerical error가 적으니 .. ㅎ_ㅎ <br/>


## Quaternion to Matrix3f

이미 쿼터니언이 있어야 함 <br/>

~~~c++
Eigen::Quaterniond q;

auto R = q.normalized().toRotationMatrix();
~~~

<br/>

## Matrix3f to Quaternion

Eigen::Matrix3f로 선언된 R이 있어야 함 <br/>

~~~c++
Eigen::Quaterniond q(R);
~~~

<br/>