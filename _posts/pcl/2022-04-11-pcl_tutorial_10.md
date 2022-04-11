---
title: "[#10] 평면 법선벡터 추정하기"

toc: true
toc_sticky: true
category: pcl
tags: [pcl, point cloud, 포인트 클라우드, estimate, surface, normals, 법선벡터, 평면, 추정]
---

Estimate surface normals <br/>

<br/>

## 전체 코드

~~~c++
#include <iostream>
#include <tic_toc.h>
#include <pcl/io/pcd_io.h>
#include <pcl/console/parse.h>
#include <pcl/point_types.h>
#include <pcl/features/normal_3d.h>

/*
  @brief Pseudo Code
  for each point p in cloud P
    1. get the nearest neighbors of p
    2. compute the surface normal n of p
    3. check if n is consistently oriented towards the viewpoint and flip otherwise
  
  @brief
  The viewpoint is by default (0,0,0) and can be changed with:
    setViewPoint (float vpx, float vpy, float vpz);
  @brief
    computePointNormal (const pcl::PointCloud<PointInT> &cloud, const std::vector<int> &indices, Eigen::Vector4f &plane_parameters, float &curvature);
    Where cloud is the input point cloud that contains the points, indices represents the set of k-nearest neighbors from cloud, and plane_parameters and curvature represent the output of the normal estimation, with plane_parameters holding the normal (nx, ny, nz) on the first 3 coordinates, and the fourth coordinate is D = nc . p_plane (centroid here) + p. The output surface curvature is estimated as a relationship between the eigenvalues of the covariance matrix (as presented above), as:
    
    * curvature = lamda_0 / (lamda_0 + lamda_1 + lamda_2)
*/

using namespace std;

int main(int argc, char** argv)
{
  vector<int> filenames = pcl::console::parse_file_extension_argument(argc, argv, ".pcd");
  if (filenames.size() != 1)
  {
    cerr << "Cannot load more than 1 pcd file" << endl;
    return 0;
  }
  
  pcl::PointCloud<pcl::PointXYZ>::Ptr cloud_ptr (new pcl::PointCloud<pcl::PointXYZ>);

  if (pcl::io::loadPCDFile (argv[filenames[0]], *cloud_ptr) <  0)
  {
    cerr << "Cannot load file: " << argv[filenames[0]] << endl;
    return 0;
  }
  
  TicToc t_whole;
  
  pcl::NormalEstimation<pcl::PointXYZ, pcl::Normal> ne;
  ne.setInputCloud(cloud_ptr);
  
  pcl::search::KdTree<pcl::PointXYZ>::Ptr kdtree_ptr (new pcl::search::KdTree<pcl::PointXYZ>());
  ne.setSearchMethod(kdtree_ptr);
  
  pcl::PointCloud<pcl::Normal>::Ptr cloud_normals_ptr (new pcl::PointCloud<pcl::Normal>());
  
  ne.setRadiusSearch(0.03);
  
  // Compute the features
  ne.compute(*cloud_normals_ptr);
  
  pcl::io::savePCDFile ("temp.pcd", *cloud_normals_ptr);
  
  cout << t_whole.toc() << "ms" << endl;

  return 0;
}
~~~

## Reference
* [Point Cloud Library](https://pcl.readthedocs.io/projects/tutorials/en/master/index.html#)