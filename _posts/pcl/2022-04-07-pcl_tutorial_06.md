---
title: "[#06] Statistical Outlier Removal Filter 적용하기"

toc: true
toc_sticky: true
category: pcl
tags: [pcl, point cloud, 포인트 클라우드, sor, statistical outlier removal]
---

Statistical Outlier Removal Filter를 사용해보자 <br/>


## 전체 코드

~~~c++
#include <iostream>

#include <pcl/io/pcd_io.h>  // pcl::PCDReader, pcl::PCDWriter 여기 포함
#include <pcl/point_types.h>  // PassThrough, VoxelGrid 여기 포함
#include <pcl/filters/statistical_outlier_removal.h> // StatisticalOutlierRemoval 여기 포함

using namespace std;

int main(int argc, char** argv)
{
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud (new pcl::PointCloud<pcl::PointXYZ>);
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloudFiltered (new pcl::PointCloud<pcl::PointXYZ>);

  // // Read the pcd file
  pcl::PCDReader reader;

  reader.read("../data/table_scene_lms400.pcd", *cloud);

  // Create filtering obejct
  pcl::StatisticalOutlierRemoval<pcl::PointXYZ> sor;
  sor.setInputCloud(cloud);
  sor.setMeanK(50);
  sor.setStddevMulThresh (1.0);
  sor.filter(*cloudFiltered);


  // Write
  pcl::PCDWriter writer;
  writer.write("../data/table_scene_lms400_inlier.pcd", *cloudFiltered, false);

  sor.setNegative(true);
  sor.filter(*cloudFiltered);
  writer.write("../data/table_scene_lms400_outlier.pcd", *cloudFiltered, false);

  return 0;
}
~~~

## Reference
* [Point Cloud Library](https://pcl.readthedocs.io/projects/tutorials/en/master/index.html#)