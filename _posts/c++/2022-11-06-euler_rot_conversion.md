---
title: "[C++] Euler to Rotation Matrix 변환"
category: cpp_useful
tags: [c++, cpp, quaternion, euler, angle, conversion, eigen]
---

Euler angle(roll, pitch, yaw)에서 3x3 회전 행렬을 얻어보자 <br/>

## 개요

로보틱스에서 좌표계를 다루다 보면 해당 각도 표현을 많이 사용하게 된다. <br/>
자주 사용하는데도 헷갈려서 블로그에 기록해둔다. <br/>

## Euler --> Rotation Matrix

~~~c++
double roll, pitch, yaw;
roll   = 0.0 * M_PI/180;
pitch  = 0.0 * M_PI/180;
yaw    = 0.0 * M_PI/180;

Eigen::AngleAxisd roll_axis_angle (roll, Eigen::Vector3d::UnitX());
Eigen::AngleAxisd pitch_axis_angle(pitch, Eigen::Vector3d::UnitY());
Eigen::AngleAxisd yaw_axis_angle  (yaw, Eigen::Vector3d::UnitZ());

Eigen::Quaternion<double> q =  yaw_axis_angle*pitch_axis_angle *roll_axis_angle;
Eigen::Matrix3d rot = q.matrix();
~~~

## Reference
* [Finding roll, pitch yaw from 3X3 rotation matrix with Eigen](https://ros-developer.com/2017/11/18/finding-roll-pitch-yaw-3x3-rotation-matrix-eigen/)