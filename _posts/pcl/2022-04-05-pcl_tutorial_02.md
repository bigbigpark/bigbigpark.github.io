---
title: "[#02] PCD 파일 읽기"

toc: true
toc_sticky: true
category: pcl
tags: [pcl, point cloud, PCL, 포인트 클라우드, PCD, read, 읽기]
---

PCD 파일을 읽어보자 <br/>
파일 [다운로드]() <br/>

## 전체 코드

~~~c++
#include <iostream>

// 헤더 파일 선언
#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>

using namespace std;

int main(int argc, char** argv)
{
  // PCD 파일을 담을 Object 선언
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZ>());

  // 2가지 방법 존재
  // 1. loadPCDFilie 함수를 이용
  if (pcl::io::loadPCDFile("../before_proj.pcd", *cloud) == -1)
  {
    PCL_ERROR("Couldn't read the pcd file");
    return -1;
  }

  // 2. PCDReader를 이용 
  pcl::PCDReader reader;
  reader.read("../before_proj.pcd", *cloud);

  cout << "pc size: " << cloud->width * cloud->height << endl;

  for(auto& point: *cloud)
  {
    cout << "x: " << point.x << " "
    << "y: " << point.y << " "
    << "z: " << point.z << endl;
  }
  return 0;
}
~~~