---
title: "[C++] geometry_msgs/Pose to Eigen::Matrix4f"

toc: true
toc_sticky: true
category: cpp_useful
tags: [c++, cpp, matrix, eigen, rotation, quaternion]
---

## Geometry_msgs/Pose -> Eigen::Matrix4d

~~~c++
// Input : (geometry_msgs::Pose pose)
Eigen::Matrix4f::Identity xpose;

xpose.block<3,3>(0,0) = Eigen::Quaterniond(quat.w, quat.x, quat.y, quat.z).toRotationMatrix;

xpose(0,3)= pose.position.x;
xpose(1,3)= pose.position.y;
xpose(2,3)= pose.position.z;
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