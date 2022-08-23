---
title: "[C++] geometry_msgs/Pose to Eigen::Matrix4f"

toc: true
toc_sticky: true
category: cpp_useful
tags: [c++, cpp, matrix, eigen, rotation, quaternion]
---

C++로 수학적 표현을 다루다보면 행렬 표현을 피할 수 없다 <br/>
보통 Eigen 라이브러리를 이용하여 많이들 표현하는데, 이 때 Rotation과 Translation이 담긴 Transformation matrix를 많이 사용한다. <br/>
기본적으로 4x4 행렬이며 상호 변환해서 사용하는 법을 알아보자 <br/>
더불어 Eigen의 block 기능을 이용하여 구현해본다 <br/>

<br/>

## Geometry_msgs/Pose -> Eigen::Matrix4d

~~~c++
// Input : (geometry_msgs::Pose pose)
Eigen::Matrix4d xpose = Eigen::Matrix4d::Identity();
xpose.block<3,3>(0,0) = Eigen::Quaterniond(quat.w(), quat.x(), quat.y(), quat.z()).normalized().toRotationMatrix();
xpose.block<3,1>(0,3) = Eigen::Vector3d(pose.position.x, pose.position.y, pose.position.z);
~~~

<br/>

반대로 <br/>

<br/>

## Eigen::Matrix4d -> geometry_msgs/Pose

~~~c++
// Input : Eigen::Matrix4d xpose)
geometry_msgs::Pose pose;

Eigen::Quaterniond q(xpose.block<3, 3>(0, 0));
pose.orientation.x = q.x();
pose.orientation.y = q.y();
pose.orientation.z = q.z();
pose.orientation.w = q.w();

pose.position.x = xpose(0,3);
pose.position.y = xpose(1,3);
pose.position.z = xpose(2,3);
~~~

## Reference
* ["Pose Conversion Package for ROS"](https://github.com/LimHyungTae/Eigen_for_Robotics)