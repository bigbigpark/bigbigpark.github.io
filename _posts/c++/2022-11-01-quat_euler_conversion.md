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

~~~c++
#include <tf/tf.h>

// input : 쿼터니언(quat)
tf::Quaternion q( quat.x,	quat.y,	quat.z,	quat.w);
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

// input : 오일러 각(roll, pitch, yaw)
tf2::Quaternion quat;
quat.setRPY(roll, pitch, yaw);
quat.normalize();

std::cout << "quat.w : " << quat.getW() << std::endl;
std::cout << "quat.x : " << quat.getX() << std::endl;
std::cout << "quat.y : " << quat.getY() << std::endl;
std::cout << "quat.z : " << quat.getZ() << std::endl;
~~~