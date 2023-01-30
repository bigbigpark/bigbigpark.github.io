---
title: "[ROS/Python] launch파일에서 param 읽기"

category: ros
tags: [ros, param, rospy, python]
---

launch파일에서 param으로 넘겨준 것을 읽어보자! <br/>

## 개요

아래 사진에서 10번째 줄에 있는 파라미터를 코드 단위에서 읽어보자

![](/assets/img/ros/2023-01-30/Selection_001.png)


## 코드

간단하죵~

~~~python
param = rospy.search_param('robot_name')
self.robot_name = rospy.get_param(param)
~~~

## Reference
* [rospyOverviewParameter Server](http://wiki.ros.org/rospy/Overview/Parameter%20Server)
