---
layout: single
title: "[#14] PointCloud 좌표 회전 하기"

category: pcl
tags: [pcl, point cloud, 포인트 클라우드, rotation, coordinate]
---

PointCloud를 각 축별로 회전 시켜보자 <br/>
본 예제는 Z 축을 기준으로 회전하는 예제다 <br/>

~~~c++
pcl::PointCloud<pcl::PointXYZI>::Ptr cloud_ptr (new pcl::PointCloud<pcl::PointXYZI>());

Eigen::Affine3f transform = Eigen::Affine3f::Identity();

// Define a translation vector
transform.translation() << 0, 0, 0;

float theta = M_PI;

// Define a rotation matrix
transform.rotate(Eigen::AngleAxisf (theta, Eigen::Vector3f::UnitZ()));

// Executing transformation
pcl::PointCloud<pcl::PointXYZI>::Ptr tf_cloud_ptr (new pcl::PointCloud<pcl::PointXYZI>());
pcl::transformPointCloud (*cloud_ptr, *tf_cloud_ptr, transform);
~~~