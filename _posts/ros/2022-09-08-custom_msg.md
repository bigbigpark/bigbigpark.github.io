---
title: "[ROS] 메세지만 있는 패키지 만들기"
category: ros
tags: [ros, cpp, msg, package, custom, 메세지, 패키지]
---

메세지(.msg)파일만 모아둔 패키지를 따로 만들고 이를 이용해보자 </br>

## 개요

ROS를 사용하다보면 .msg파일만 따로 모아서 이용하는 경우가 있다. <br/>

하나의 패키지 안에 **msg**라는 파일을 만들어서 이용하게 되는 경우, 다른 패키지에서 이 메세지를 이용하려 할 때 문제가 생긴다. <br/>

그래서 오늘은 메세지 파일만 모아둔 패키지를 만들어서 이용해보자! <br/>

## 메세지 패키지 만들기

우선 기본적인 ROS 특성을 아는 유저 대상으로 글을 적는다. <br/>

**robot_msgs**라는 이름의 패키지를 만들어보자. <br/>

~~~bash
$ catkin_create_pkg robot_msgs std_msgs message_runtime message_generation
~~~

<br/>

이후 메세지 파일이 담길 **msg**라는 폴더를 만들자. <br/>
최종 파일 구조는 아래와 같다.

~~~
📦src
 ┗ 📂robot_msgs
 ┃ ┣ 📂msg
 ┃ ┣ 📜CMakeLists.txt
 ┃ ┗ 📜package.xml
~~~

## 사용할 메세지 만들기

나는 **RobotInfo.msg**라는 메세지를 아래와 같이 만들었다. <br/>

~~~
std_msgs/Header Header
string name
uint8 id
float32 linear_velocity
float32 angular_velocity
~~~

## package.xml 수정하기

아래 줄을 추가해주자. <br/>
ROS 버전에 따라 **run_depend**라고 적혀 있기도 한다. <br/>

~~~xml
<build_depend>message_runtime</build_depend>
<exec_depend>message_generation</exec_depend>
~~~

## CMakeLists.txt 수정하기

있는 내용을 전부 지우고 아래 내용으로 붙여넣기 한다. <br/>
각 라인이 어떤 것을 의미하는 지는 주석을 달아놨다.

~~~bash
# 본인의 cmake 버전을 적으면 된다
cmake_minimum_required(VERSION 3.0.2)

# 본인의 프로젝트명, 여기서는 robot_msgs
project(robot_msgs)

find_package(catkin REQUIRED COMPONENTS
  message_generation
  message_runtime
  std_msgs
)

# 아까 생성해둔 msg 폴더 안에 있는 .msg 파일 모두를 나열해준다
add_message_files(
  FILES
  RobotInfo.msg
)

# 위에서 추가한 .msg 파일에서 의존하는 다른 패키지가 있다면 기술해준다
# RobotInfo.msg의 경우 std_msgs/Header 를 이용하기 때문에
# std_msgs를 추가해준다
generate_messages(
  DEPENDENCIES
  std_msgs
)

catkin_package(
 CATKIN_DEPENDS message_generation message_runtime std_msgs
)
~~~

자! 여기까지만 하면 메세지만 있는 패키지가 완성되었다. <br/>
여기서 새롭게 메세지를 추가하고 싶으면 다음 두 단계만 거치면 된다. <br/>
1. msg 폴더 안에 메세지 파일 추가할 것
2. 추가한 파일을 CMakeLists.txt 안에 add_message_files 밑에 나열할 것

<br/>

메세지 패키지를 만들었으니 어떻게 이용하는지 알아보자. <br/>
이 패키지를 받아서 사용하는 것은 정말 간단하다. <br/>

## 메세지 패키지 빌드 및 사용해보기

이 메세지를 사용하기 위해서는 사용하는 곳의 CMakeLists.txt와 package.xml에 몇 줄만 추가하면 된다. <br/>

## package.xml 수정

3가지를 추가 기입해준다. <br/>

~~~xml
<build_depend>robot_msgs</build_depend>
<build_export_depend>robot_msgs</build_export_depend>
<exec_depend>robot_msgs</exec_depend>
~~~


## CMakeLists.txt 수정

find_package()와 catkin_package() 제일 끝에 아까 만들었던 robot_msgs 패키지를 추가해준다. <br/>
추가를 하고 나면 아래와 같이 되어 있을 것이다.

~~~cmake
find_package(catkin REQUIRED COMPONENTS
  roscpp
  std_msgs
  robot_msgs
)

catkin_package(
  CATKIN_DEPENDS  roscpp std_msgs robot_msgs
)
~~~

이제 모든 준비는 끝! 바로 이용해 볼 시간이다! <br/>

## 코드 작성해보기

아래와 같이 이용하면 된다. <br/>

~~~c++
#include <ros/ros.h>

// 이렇게 아까 빌드한 패키지를 추가해주자
#include <robot_msgs/RobotInfo.h>

int main(int argc, char** argv)
{
  ros::init(argc, argv, "main");
  ros::NodeHandle nh;

  robot_msgs::RobotInfo msg;

  ROS_INFO("linear_velocity: %f", msg.linear_velocity);
  ROS_INFO("angular_velocity: %f", msg.angular_velocity);

  return 0;
}
~~~