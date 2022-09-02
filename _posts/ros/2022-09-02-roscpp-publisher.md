---
title: "[ROS] C++ publisher 작성하기"
category: ros
tags: [ros, 로스, publisher, 퍼블리셔, cpp, c++]
---

ROS 환경에서 C++ 기반 Publisher를 작성해보자 <br/>

## 작업 경로 생성

작업 경로는 본인이 원하는 곳에 만들면 된다 <br/>
나는 ~경로에 만들 것이다 <br/>

~~~bash
# -p 옵션을 붙이면 뒤에 src 폴더까지 동시에 만들 수 있음
$ mkdir -p ~/ros_ws/src
$ cd ~/ros_ws/src
~~~

<br/>

## 패키지 생성

패키지를 생성해주자

~~~bash
# catkin_create_pkg {패키지명} {의존성패키지1} {의존성패키지2}
$ catkin_create_pkg ros_simple_tutorial roscpp std_msgs
$ cd ros_simple_tutorial
~~~

<br/>

해당 디렉토리 안에 아래와 같이 구성이 되어있다.
~~~
📂 ros_simple_tutorial
┣ 📂 include / 📂 ros_simple_tutorial
┣ 📂 src
┣ 📜 CMakeLists.txt
┗ 📜 package.xml
~~~

<br/>

## Publisher 코드 작성

**src** 폴더 안에서 **pub.cpp** 파일을 만들어주자 <br/>

~~~bash
$ cd src
$ gedit pub.cpp # pub.cpp를 gedit 말고 vscode 등 본인이 편한 툴로 수정하자
~~~

### 전체 코드

~~~c++
#include <ros/ros.h>
#include <std_msgs/String.h>

int main(int argc, char** argv)
{
  ros::init(argc, argv, "pub_node");
  ros::NodeHandle nh;

  ros::Publisher pub = nh.advertise<std_msgs::String>("message", 10);
  std_msgs::String msg;

  ros::Rate r(1);
  while (ros::ok())
  {
    msg.data = "bigbigpark";

    pub.publish(msg);

    r.sleep();
  }

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
~~~


## 실행하기

~~~bash
$ roscore
~~~
~~~bash
$ source ~/ros_ws/devel/setup.bash
$ rosrun ros_simple_tutorial pub 
~~~

위의 명령어가 동작하지 않으면 `$ source ~/ros_ws/devel/setup.bash`를 해준다 <br/>

## 토픽 출력하기

토픽이 정상적으로 출력되는지 확인하자 

~~~bash
$ source ~/ros_ws/devel/setup.bash
$ rostopic echo /message
~~~

여기서 어떤 토픽이 지금 ROS 통신 상에 publish되고 있는 지는 아래 명령어로 확인 가능하다

~~~bash
$ rostopic list
~~~