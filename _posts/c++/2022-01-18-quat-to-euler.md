---
layout: post
title: Quaternion to Euler 변환
tags: [c++]
---

<br/>

## Quaternion to Euler

많이 쓴다...

하지만 잘 안 외워져서 일단 블로그에 남긴다

<br/>

## quat to euler

코드는 아래와 같이 사용하면 됨

~~~c++
#include <tf/tf.h>

tf::Quaternion q(
        msg->pose.pose.orientation.x,
        msg->pose.pose.orientation.y,
        msg->pose.pose.orientation.z,
        msg->pose.pose.orientation.w);
tf::Matrix3x3 m(q);
double roll, pitch, yaw;
m.getRPY(roll, pitch, yaw);
~~~

