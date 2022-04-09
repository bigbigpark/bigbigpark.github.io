---
title: "[#09] 파라미터 모델로 포인트 프로젝션 하기"

toc: true
toc_sticky: true
category: pcl
tags: [pcl, point cloud, 포인트 클라우드, projection, parametric, model]
---

Project points using parametric model <br/>

<br/>

## 전체 코드

~~~c++
#include <iostream>
#include <pcl/point_cloud.h> // for PointClooud
#include <pcl/point_types.h>
#include <pcl/ModelCoefficients.h>
#include <pcl/filters/project_inliers.h>

#include <pcl/io/pcd_io.h>

using namespace std;

int main(int argc, char** argv)
{
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZ>);
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloudProjected (new pcl::PointCloud<pcl::PointXYZ>);

  // Fill in the data
  cloud->width = 100;
  cloud->height = 1;
  cloud->points.resize(cloud->width * cloud->height);

  for (auto& point: *cloud)
  {
    point.x = 1024 * rand() / (RAND_MAX + 1.0f);
    point.y = 1024 * rand() / (RAND_MAX + 1.0f);
    point.z = 1024 * rand() / (RAND_MAX + 1.0f);
  }
  
  // Create planar coefficients
  // MODEL: ax + by + cz + d = 0;
  // In this tutorial, a = 0, b = 0, c = 1, d = 0
  pcl::ModelCoefficients::Ptr coeff (new pcl::ModelCoefficients);
  coeff->values.resize(4);
  coeff->values[0] = 0;
  coeff->values[1] = 0;
  coeff->values[2] = 1;
  coeff->values[3] = 0;

  // Create filtering object
  pcl::ProjectInliers<pcl::PointXYZ> proj;
  proj.setModelType(pcl::SACMODEL_PLANE);
  proj.setInputCloud(cloud);
  proj.setModelCoefficients (coeff);
  proj.filter(*cloudProjected);

  pcl::PCDWriter writer;
  writer.write("../before_proj.pcd",*cloud);
  writer.write("../after_proj.pcd",*cloudProjected);

  return 0;
}
~~~

## Reference
* [Point Cloud Library](https://pcl.readthedocs.io/projects/tutorials/en/master/index.html#)