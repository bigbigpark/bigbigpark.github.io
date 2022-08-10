---
layout: single
title: "[#14] PointCloud 좌표 회전 하기"

category: pcl
tags: [pcl, point cloud, 포인트 클라우드, rotation, coordinate]
toc: true
toc_sticky: true
---

ROS에서 포인트 클라우드를 회전시켜 보자 ! <br/>

~~~c++
#include <ros/ros.h>
#include <iostream>
#include <pcl/point_cloud.h>
#include <pcl/conversions.h>
#include <pcl_ros/point_cloud.h>

#include <pcl/common/transforms.h>
#include <sensor_msgs/PointCloud2.h>

using namespace std;

ros::Publisher cloud_pub;
ros::Subscriber cloud_sub;

void cloudCallback(const sensor_msgs::PointCloud2::Ptr& msg)
{
  pcl::PointCloud<pcl::PointXYZI>::Ptr cloud_ptr (new pcl::PointCloud<pcl::PointXYZI>());

  pcl::fromROSMsg(*msg, *cloud_ptr);
  
  Eigen::Affine3f transform = Eigen::Affine3f::Identity();

  // Define a translation vector
  transform.translation() << 0, 0, 0;
  
  float theta = M_PI;

  // Define a rotation matrix
  transform.rotate(Eigen::AngleAxisf (theta, Eigen::Vector3f::UnitZ()));

  // Executing transformation
  pcl::PointCloud<pcl::PointXYZI>::Ptr tf_cloud_ptr (new pcl::PointCloud<pcl::PointXYZI>());
  pcl::transformPointCloud (*cloud_ptr, *tf_cloud_ptr, transform);

  sensor_msgs::PointCloud2 ros_cloud;
  pcl::toROSMsg(*tf_cloud_ptr, ros_cloud);
  ros_cloud.header = msg->header;

  cloud_pub.publish(ros_cloud);
}

int main(int argc, char** argv)
{
  ros::init(argc, argv, "transform_cloud_node");
  ros::NodeHandle nh;

  cloud_pub = nh.advertise<sensor_msgs::PointCloud2>("/lidar_data2", 1);
  cloud_sub = nh.subscribe("/lidar_data", 1, cloudCallback);

  ros::spin();

  return 0;
}
~~~