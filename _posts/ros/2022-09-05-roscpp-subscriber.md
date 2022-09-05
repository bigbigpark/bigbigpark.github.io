---
title: "[ROS] C++ subscriber 작성하기"
category: ros
tags: [ros, 로스, subscriber, 섭스크라이버, cpp, c++]
---

ROS 환경에서 C++ 기반 Subscriber를 작성해보자 <br/>

## 작업 경로 및 패키지 생성

이전 publisher 만드는 패키지와 이어지는 것이므로 작업 경로 및 패키지 생성은 아래 경로를 참고하자 <br/>

["[ROS] C++ publisher 작성하기"](https://bigbigpark.github.io/ros/roscpp-publisher/)

<br/>

## Subscriber 코드 작성

**src** 폴더 안에서 **sub.cpp** 파일을 만들어주자 <br/>

~~~bash
$ cd src
$ gedit sub.cpp
~~~

### 전체 코드

~~~c++
#include <ros/ros.h>
#include <std_msgs/String.h>

void stringCallback(const std_msgs::String::Ptr& msg)
{
  ROS_INFO("I got a message: %s", msg->data.c_str());
}

int main(int argc, char** argv)
{
  ros::init(argc, argv, "sub_node");
  ros::NodeHandle nh;

  ros::Subscriber sub = nh.subscribe("message", 10, stringCallback);

  ros::spin();

  return 0;
}
~~~

코드가 이해되지 않으면 질문 남겨주시면 감사하겠습니다 :)

<br/>

## CMakeLists.txt 수정

아까 **ros_simple_tutorial** 패키지 경로에 가서 **CMakeLists.txt**를 수정해주자

~~~bash
$ gedit CMakeLists.txt
~~~

<br/>

원래 있던 것을 삭제하고 아래를 복사 붙여넣기 한다 <br/>
간혹 제일 첫 번째 줄인 **cmake_minimum_required** 이 에러 나는 경우가 있는데 이럴 때는 터미널 창에 `$ cmake --version`을 입력하여 자신의 cmake 버전을 입력해준다 <br/>

~~~cmake
cmake_minimum_required(VERSION 3.0.9)
project(ros_simple_tutorial)

# add_compile_options(-std=c++11)

find_package(catkin REQUIRED COMPONENTS
  roscpp
  std_msgs
)

catkin_package(
#  INCLUDE_DIRS include
#  LIBRARIES ros_simple_tutorial
#  CATKIN_DEPENDS roscpp std_msgs
#  DEPENDS system_lib
)

include_directories(
# include
  ${catkin_INCLUDE_DIRS}
)

add_executable(pub src/pub.cpp)
target_link_libraries(pub
  ${catkin_LIBRARIES}
)

add_executable(sub src/sub.cpp)
target_link_libraries(sub
  ${catkin_LIBRARIES}
)
~~~

## 실행하기

~~~bash
$ roscore
~~~
~~~bash
$ source ~/ros_ws/devel/setup.bash
$ rosrun ros_simple_tutorial pub
$ rosrun ros_simple_tutorial sub
~~~