---
title: "[PCL] LiDAR 데이터 파싱하기"
category: pcl
tags: [pcl, lidar, parser, useful, code, property, intensity, ring, t, timestamp, reflectivity, velodyne, ouster, robosense]
---

sensor_msgs::PointCloud로부터 라이다 데이터를 파싱해보자


## 개요

아래 사진에서 **Num of fields**에 보면 9라고 적혀 있는데, 라이다 포인트 클라우드 안에 9가지 속성이 있음을 알 수 있다. <br/>
![](/assets/img/pcl/Selection_001.png)

* x, y, z
* intensity
* t
* reflectivity
* ring
* noise
* range

거두절미하고 바로 파싱해보자 <br/>
ROS 숙련자임을 가정하고 글을 작성한다 <br/>


## 코드

sensor_msgs::PointCloud2 메세지가 수신되었을 때 헤더를 출력하고, `data`에 담겨있는 정보들을 파싱하는 코드다 <br/>
ouster 회사의 라이다 기준으로 작성되었다. <br/>

~~~c++
void printAllCloudProperties(const sensor_msgs::PointCloud2::Ptr& msg)
{
  std::cout << "\n\n--- header" << std::endl;
  std::cout << "  frame_id      : " << msg->header.frame_id << std::endl;
  std::cout << "  seq           : " << msg->header.seq << std::endl;
  std::cout << "  stamp         : " << msg->header.stamp << std::endl;
  std::cout << "  width         : " << msg->width << std::endl;
  std::cout << "  height        : " << msg->height << std::endl;
  std::cout << "  point_step    : " << msg->point_step << std::endl;
  std::cout << "  row_step      : " << msg->row_step << std::endl;
  std::cout << "  Size          : " << msg->row_step * msg->height << std::endl;
  std::cout << "  Num of fields : " << msg->fields.size() << std::endl;

  int offset_x = 0;
  int offset_y = 0;
  int offset_z = 0;
  int offset_intensity = 0;
  int offset_t = 0;
  int offset_reflectivity = 0;
  int offset_ring = 0;
  int offset_noise = 0;
  int offset_range = 0;

  std::cout << "  [Name], [Offset]" << std::endl;
  for(auto& field : msg->fields)
  {
    std::cout << "  [" << field.name << "][" << field.offset << "]" << std::endl;

    if (field.name == "x") offset_x = field.offset;
    else if (field.name == "y") offset_y = field.offset;
    else if (field.name == "z") offset_z = field.offset;
    else if (field.name == "intensity") offset_intensity = field.offset;
    else if (field.name == "t") offset_t = field.offset;
    else if (field.name == "reflectivity") offset_reflectivity = field.offset;
    else if (field.name == "ring") offset_ring = field.offset;
    else if (field.name == "noise") offset_noise = field.offset;
    else if (field.name == "range") offset_range = field.offset;
  }

  pcl::PointCloud<pcl::PointXYZI>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZI>());

  cloud->header.frame_id = "os1_lidar";
  cloud->points.reserve(msg->row_step);

  int bytes_per_point = msg->point_step; // 48
  for (int i = 0; i < msg->width * msg->height; i++)
  {
    pcl::PointXYZI new_point;

    new_point.x =  *(float*)(&msg->data[0] + bytes_per_point*i + offset_x);
    new_point.y =  *(float*)(&msg->data[0] + bytes_per_point*i + offset_y);
    new_point.z =  *(float*)(&msg->data[0] + bytes_per_point*i + offset_z);
    new_point.intensity =  *(float*)(&msg->data[0] + bytes_per_point*i + offset_intensity);

    uint32_t point_t = *(uint32_t*)(&msg->data[0] + bytes_per_point*i + offset_t);
    uint16_t point_reflectivity = *(uint16_t*)(&msg->data[0] + bytes_per_point*i + offset_reflectivity);
    uint8_t point_ring = *(uint8_t*)(&msg->data[0] + bytes_per_point*i + offset_ring);
    uint16_t point_noise = *(uint16_t*)(&msg->data[0] + bytes_per_point*i + offset_noise);
    uint32_t point_range = *(uint32_t*)(&msg->data[0] + bytes_per_point*i + offset_range);
    
    cloud->points.push_back(new_point);
  }
}
~~~

## Reference
* [Failed to find match for field 'intensity' with Ouster LIDAR](https://answers.ros.org/question/307881/failed-to-find-match-for-field-intensity-with-ouster-lidar/)