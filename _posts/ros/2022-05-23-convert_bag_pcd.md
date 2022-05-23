---
title: "[ROS] bag to pcd"

toc: true
toc_sticky: true
category: ros
tags: [ros, pcd, convert, bag, rosbag]
---

ROS bag파일에서 pcd파일로 변환하는 방법을 알아보자! <br/>

직접 코드를 짜서 구현해도 된다 <br/>
하지만 이 글에서는 누가 짜놓은 코드를 가져다 쓰기만 할 것이다 <br/>

## Bag to pcd

아래 명령어를 `먼저` 입력 후 rosbag 파일을 재생해준다 <br/>

~~~bash
$ rosrun pcl_ros pointcloud_to_pcd input:="/lidar_topic_name"
~~~

<br/>

## 결과

그러면 밑에와 같이 변환되는 것을 확인할 수 있다!

~~~bash
[ INFO] [1653288413.678141068]: Data saved to 6064231440.pcd
[ INFO] [1653288413.778496106]: Received 65536 data points in frame os_sensor with the following fields: x y z intensity t reflectivity ring ambient range
~~~

point cloud 내부 field 특성인 x, y, z, intensity, t, reflectivity, ring, ambient, range 값도 전부 변환된다