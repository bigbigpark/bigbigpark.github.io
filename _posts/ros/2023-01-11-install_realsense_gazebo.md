---
title: "[ROS] Gazebo 환경 로봇에 Realsense 카메라 부착하기"

category: ros
tags: [ros, gazebo, realsense, intel, depth, camera]
---

내 로봇(rosbot, jackal, quadrotor 등) 에 intel realsense camera를 설치해보자 <br/>



## 개요

LiDAR만 사용하다가 Realsense를 이용한 아이디어가 생각나서 스터디도 할 겸 설치 과정을 정리한다.


## 설치

아래 명령어로 패키지를 받은 후에 빌드까지 해주자 !

~~~bash
$ git clone https://github.com/issaiass/realsense2_description
$ catkin build
~~~

## 설치 잘 됐는 지 확인

아래 명령어를 실행하면 Gazebo 상에서 d435 모델이 스폰되고, Rviz상에 값이 보일 것이다. <br/>

~~~bash
$ roslaunch realsense2_description view_d435_model_rviz_gazebo.launch
~~~


### [주의]

여기서 `librealsense_gazebo_plugin.so` 같은 에러 메세지가 뜬다면
https://bigbigpark.github.io/ros/librealsense/ 여기를 참고해서 설치하자. <br/>

## 내 로봇에 붙이기

### 1. 가정

내 로봇은 urdf.xacro 파일을 사용하여 gazebo 상에서 스폰된다고 가정.

### 2. 불러오기

아래 사진과 같이 사용하면 된다.

![](/assets/img/ros/2023-01-11/Selection_000.png)

* name : 아무거나 해도 됨
* topic_ns : `namespace`를 설정해준다. 나는 로봇 여러 대에 할 거라서 $(arg)를 사용하였다.
* parent : 부모 노드가 될 링크를 설정해준다 (ex. base_link, camera_link 등등)
* publish_pointcloud : 뎁스 정보를 이용한 포인트 클라우드를 publish할 지 말 지 설정하는 거임.
* <origin> : 위에서 설정한 parent 링크로부터 얼만큼 떨어져서 센서를 부착할 지 결정

## 확인

![](/assets/img/ros/2023-01-11/Selection_001.png)

## Reference
* [이응창님의 친절한 설명](https://github.com/engcang)
* [realsense2_description](https://github.com/issaiass/realsense2_description)