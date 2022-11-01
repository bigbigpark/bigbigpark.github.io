---
title: "[C++] Quaternion to Euler 변환"
category: cpp_useful
tags: [c++, cpp, quaternion, euler, angle, conversion, eigen]
---

Quaternion과 Euler(roll, pitch, yaw)을 상호 변환 해보자 <br/>


## 개요

좌표계를 다루다 보면 해당 각도 표현을 많이 사용하게 된다. <br/>
자주 사용하는데도 헷갈려서 블로그에 기록해둔다. <br/>

## Quaternion --> Euler

리눅스 환경에서 키보드 입력을 받기 위해 아래 헤더 파일 및 함수를 하나 정의해주자 <br/>

~~~c++
#include <tf/tf.h>

// input : 쿼터니언
tf::Quaternion q( quat.x,
									quat.y,
									quat.z,
									quat.w);
tf::Matrix3x3 m(q);

double roll, pitch, yaw;
m.getRPY(roll, pitch, yaw);

std::cout << "roll  : " << roll << std::endl;
std::cout << "pitch : " << pitch << std::endl;
std::cout << "yaw   : " << yaw << std::endl;
~~~

## Euler --> Quaternion

~~~c++
#include <tf2/LinearMath/Quaternion.h>

tf2::Quaternion quat;
quat.setRPY(0.0, 0.0, xpose_cur(2,0));
quat.normalize();

std::cout << "quat.w : " << quat.getW() << std::endl;
std::cout << "quat.x : " << quat.getX() << std::endl;
std::cout << "quat.y : " << quat.getY() << std::endl;
std::cout << "quat.z : " << quat.getZ() << std::endl;
~~~