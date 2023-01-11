---
title: "[ROS] librealsense_gazebo_plugin.so 설치해보자"

category: ros
tags: [ros, gazebo, realsense, intel, depth, camera]
---

`librealsense_gazebo_plugin.so`가 없다는 에러 경고 창이 뜬다면! <br/>



## 개요

Intel RealSense Gazebo ROS plugin 을 설치해보자.

설치 경로: https://github.com/pal-robotics/realsense_gazebo_plugin



## 설치

~~~bash
$ git clone https://github.com/pal-robotics/realsense_gazebo_plugin.git
$ catkin build # 또는 catkin_make
~~~



## 확인

워크스페이스 들어가보면 아래처럼 디렉토리가 구성이 되어 있을 건데 `devel`에 `librealsense_gazebo_plugin.so`가 있을 것이다.

`my_workspace`

- **build**

- **devel** : here!!

- **logs**

- **src**