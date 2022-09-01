---
title: "[ROS] TF 만들기(Static Transform Publisher)"

category: ros
tags: [ros, tf, transform, publisher, static]
---

ROS에서 TF 메세지를 빠르게 만들어보자 <br/>
ROS에서 static transform publisher를 해보자! (명령어 하나) <br/>

## 코드

아래 명령어를 .launch 파일 안에 추가하여 사용하면 된다 <br/>

~~~xml
<launch>
 <node pkg="tf" type="static_transform_publisher" name="tf" args="x y z roll pitch yaw frame_id child_frame_id peroid[ms]"/>
</launch>
~~~

## Reference
* [static transformation publisher](https://answers.ros.org/question/208002/static-transformation-publisher/)