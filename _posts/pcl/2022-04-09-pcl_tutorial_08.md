---
title: "[#08] 세그먼테이션으로부터 인덱스 추출하기"

toc: true
toc_sticky: true
category: pcl
tags: [pcl, point cloud, 포인트 클라우드, segmentation, indices, extract, 추출]
---

How to extract indeices from segmentation <br/>

<br/>

## 전체 코드

~~~c++
#include <iostream>
#include <pcl/io/pcd_io.h>
#include <pcl/point_types.h>

#include <pcl/ModelCoefficients.h>

#include <pcl/sample_consensus/method_types.h>
#include <pcl/sample_consensus/model_types.h>

#include <pcl/segmentation/sac_segmentation.h>

#include <pcl/filters/voxel_grid.h>
#include <pcl/filters/extract_indices.h>

using namespace std;

int main(int argc, char** argv)
{
  pcl::PCLPointCloud2::Ptr cloudBlob (new pcl::PCLPointCloud2);
  pcl::PCLPointCloud2::Ptr cloudFilteredBlob (new pcl::PCLPointCloud2);

  pcl::PointCloud<pcl::PointXYZ>::Ptr cloudFiltered (new pcl::PointCloud<pcl::PointXYZ>);
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloudP (new pcl::PointCloud<pcl::PointXYZ>);
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloudF (new pcl::PointCloud<pcl::PointXYZ>);

  // Read
  pcl::PCDReader reader;
  reader.read("../data/tutorials/table_scene_lms400.pcd", *cloudBlob);

  cout << "[before] size: " << cloudBlob->width * cloudBlob->height << endl;

  // Downsampling
  pcl::VoxelGrid<pcl::PCLPointCloud2> voxel;
  voxel.setInputCloud(cloudBlob);
  voxel.setLeafSize(0.01f, 0.01f, 0.01f);
  voxel.filter(*cloudFilteredBlob);

  // Convert from [pcl::PCLPointCloud2] to [pcl::PointCloud<pcl::PointXYZ>]
  pcl::fromPCLPointCloud2(*cloudFilteredBlob, *cloudFiltered);

  cout << "[after] size: " << cloudFiltered->width * cloudFiltered->height << endl;

  // Write downsampled version
  pcl::PCDWriter writer;
  writer.write("../data/tutorials/table_scene_lms400_downsampled.pcd", *cloudFiltered, false);

  // Declare Model Coefficient & Inlier
  pcl::ModelCoefficients::Ptr coeff (new pcl::ModelCoefficients());
  pcl::PointIndices::Ptr inliers (new pcl::PointIndices());

  // Create segment object
  pcl::SACSegmentation<pcl::PointXYZ> seg;
  // optional
  seg.setOptimizeCoefficients(true);
  // Mandatory
  seg.setModelType( pcl::SACMODEL_PLANE);
  seg.setMethodType (pcl::SAC_RANSAC);
  seg.setMaxIterations (1000);
  seg.setDistanceThreshold (0.01);

  // Create filtering object
  pcl::ExtractIndices<pcl::PointXYZ> extract;

  int i = 0;
  int nr_points = (int) cloudFiltered->size();
  // original cloud의 30%는 유지
  while(cloudFiltered->size() > 0.3 * nr_points)
  {
    // Segment the largest planar componet from the remaining cloud
    seg.setInputCloud( cloudFiltered);
    seg.segment(*inliers, *coeff);

    if (inliers->indices.size() == 0)
    {
      cerr << "주어진 데이터셋에 대한 planar model 추정 실패" << endl;
      break;
    }

    // Extract inliers
    extract.setInputCloud (cloudFiltered);
    extract.setIndices (inliers);
    extract.setNegative(false);
    extract.filter (*cloudP);
    cerr << "Extracted inlieres size : " << cloudP->width * cloudP->height << " data points." << endl;

    std::stringstream ss;
    ss << "../temp/table_scene_lms400_plane_" << i << ".pcd";
    writer.write<pcl::PointXYZ>(ss.str(), *cloudP, false);

    // Create filtering object
    extract.setNegative (true);
    extract.filter (*cloudF);
    cloudFiltered.swap(cloudF);
    i++;
  }

  return 0;
}
~~~

## Reference
* [Point Cloud Library](https://pcl.readthedocs.io/projects/tutorials/en/master/index.html#)