---
title: "[ROS 2] 패키지 생성"
category: ros2
tags: [ros2, ros, package, create, workspace]
---

ROS 2를 공부하면서 나중에 안 까먹기 위해 블로그에 기록한다 <br/>

## 패키지 생성 문법

~~~bash
$ ros2 pkg create --build-type ament_cmake <package_name>
~~~

빌드 타입이 지금 **ament_cmake**로 되어 있는데 표윤석 박사님 책에 보면 **colcon**도 사용한다는데 정확하게 어떤 차이인 지는 모르겠다. 나는 그래서 아래 명령어로 패키지를 생성한다 

~~~bash
$ ros2 pkg create my_ros2
~~~

<br/>

이렇게 치고 나면 아래와 같이 뜬다 <br/>
패키지 이름, 경로, 포맷, 저자, 라이센스 등등 필요한 정보가 많이 출력되는 거 같다 <br/>

~~~
going to create a new package
package name: my_ros2
destination directory: /home/scpark/ros2_ws/src
package format: 3
version: 0.0.0
description: TODO: Package description
maintainer: ['scpark <scsc1125@gmail.com>']
licenses: ['TODO: License declaration']
build type: ament_cmake
dependencies: []
creating folder ./my_ros2
creating ./my_ros2/package.xml
creating source and include folder
creating folder ./my_ros2/src
creating folder ./my_ros2/include/my_ros2
creating ./my_ros2/CMakeLists.txt
~~~

## 패키지 빌드하기

workspace에 있는 모든 패키지를 빌드할 수도 있고, 원하는 특정 패키지만 빌드할 수도 있다 <br/>

~~~bash
$ colcon build
$ colcon build --packages-select {PACKAGE_NAME}
~~~

## setup 파일 source

~~~bash
$ source ${WORKSPACE}/install/setup.bash
~~~