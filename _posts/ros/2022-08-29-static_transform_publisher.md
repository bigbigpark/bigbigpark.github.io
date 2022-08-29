---
title: "[ROS] Static Transform Publisher"

toc: true
toc_sticky: true
category: ros
tags: [ros, tf, transform, publisher, static]
---

ROS에서 static transform publisher를 해보자! (명령어 하나) <br/>

## 코드

~~~bash
Usage: static_transform_publisher x y z yaw pitch roll frame_id child_frame_id  period (milliseconds)
~~~

~~~xml
<launch>
 <node pkg="tf" type="static_transform_publisher" name="tf" args="x y z roll pitch yaw frame_id child_frame_id peroid[ms]"/>
</launch>
~~~

## Reference
* [static transformation publisher](https://answers.ros.org/question/208002/static-transformation-publisher/)