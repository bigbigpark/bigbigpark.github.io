---
title: "[ROS] PointCloud2 to LaserScan"

toc: true
toc_sticky: true
category: ros
tags: [ros, pointcloud, convert, laser, scan]
---

`sensor_msgs/PointCloud2`에서 `sensor_msgs/LaserScan`로 변환하자 <br/>

## 설명

간단하다 <br/>
launch 파일 하나만 작성하면 됨! <br/>

## 코드

remap 하는 부분에서 `cloud_in`에 PointCloud2 토픽이름을 넣어주고, <br/>
`scan`부분에 publish될 토픽 이름을 넣어준다! <br/>

그 외에 `rosparam` 같은 경우 게시글 제일 하단 ros wiki 레퍼런스를 참조하여 수정해주자!

~~~xml
<launch>
  <!-- Run pointcloud_to_laser node -->
  <node pkg="pointcloud_to_laserscan" type="pointcloud_to_laserscan_node" name="pointcloud_to_laserscan"  >
    <remap from="cloud_in" to="keypoints_cloud"/>
    <remap from="scan" to="keypoints/scan"/>
    <rosparam>
      target_frame: base_link # Leave disabled to output scan in pointcloud frame
      transform_tolerance: 0.01
      min_height: -10.0
      max_height: 10.0

      angle_min: -3.141591 # -M_PI
      angle_max: 3.141591  # M_PI
      angle_increment: 0.0087 # M_PI/360.0 (every degreee)
      scan_time: 1.0
      range_min: 0.3
      range_max: 100.0
      use_inf: true

      # Concurrency level, affects number of poinclouds queued for processing and number of threads used
      # 0: Detect Number of cored
      # 1: Single threaded
      # 2->inf : Parallelism level
      concurrency_level: 1
    </rosparam>
  </node>
</launch>
~~~

## Reference
* [pointcloud_to_laserscan](http://wiki.ros.org/pointcloud_to_laserscan)
* [[ROS Q&A] 120 - How To Convert a PointCloud Into a Laser Scan](https://www.youtube.com/watch?v=IFNikTHN1pk)