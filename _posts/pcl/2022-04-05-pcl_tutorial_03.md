---
title: "[#03] PCD 파일 쓰기"

toc: true
toc_sticky: true
category: pcl
tags: [pcl, point cloud, PCL, 포인트 클라우드, PCD, wrtie, 쓰기]
---

PCD 파일 형식으로 저장해보자 <br/>


## 전체 코드

~~~c++
#include <iostream>

// 헤더 파일 선언
#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>

using namespace std;

int main(int argc, char** argv)
{
  // PCL object 선언
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZ>());

  // Unorganized form으로 데이터 채우기
  cloud->width = 30;
  cloud->height = 1;
  cloud->points.resize(cloud->width * cloud->height);

  // 포인트 클라우드 데이터에 난수 삽입
  for(auto& point: *cloud)
  {
    point.x = 1024 * rand() / (RAND_MAX + 1.0f);
    point.y = 1024 * rand() / (RAND_MAX + 1.0f);
    point.z = 1024 * rand() / (RAND_MAX + 1.0f);
  }

  // 2가지 방법 존재
  // 1. savePCDFile 함수 이용
  // Third argument -> False for ASCII
  if (pcl::io::savePCDFile("../test.pcd", *cloud, false) == -1)
  {
    PCL_ERROR("Failed to save!");
    return -1;
  }

  // 2. PCDWriter 이용
  pcl::PCDWriter writer;
  writer.write("../test.pcd", *cloud, false);

  return 0;
}
~~~