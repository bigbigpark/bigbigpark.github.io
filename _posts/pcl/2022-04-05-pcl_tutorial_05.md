---
title: "[#05] Pass Through Filter 적용하기"

category: pcl
tags: [pcl, point cloud, PCL, 포인트 클라우드, Pass Through, Filter]
---

Pass Through Filter로 ROI 정하기 <br/>


## 전체 코드

~~~c++
#include <iostream>
#include <pcl/point_types.h>
#include <pcl/filters/passthrough.h>

using namespace std;

int main(int argc, char** argv)
{
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZ>);
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud_filtered (new pcl::PointCloud<pcl::PointXYZ>);

  // 값 대입
  cloud->width = 5;
  cloud->height = 1;
  cloud->points.resize (cloud->width * cloud->height);

  for (auto& point: *cloud)
  {
    point.x = 1024 * rand() / (RAND_MAX + 1.0f);
    point.y = 1024 * rand() / (RAND_MAX + 1.0f);
    point.z = 1024 * rand() / (RAND_MAX + 1.0f);
  }

  // Create filtering object
  pcl::PassThrough<pcl::PointXYZ> pass;
  pass.setInputCloud(cloud);
  pass.setFilterFieldName("z");
  pass.setFilterLimits(0, 9); // min, max
  pass.setFilterLimitsNegative();
  pass.filter(*cloud_filtered);
  
  return 0;
}
~~~

## Reference
* [Point Cloud Library](https://pcl.readthedocs.io/projects/tutorials/en/master/index.html#)