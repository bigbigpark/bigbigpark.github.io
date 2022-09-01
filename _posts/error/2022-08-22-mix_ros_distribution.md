---
title: "[ERROR] 한번에 두 가지 버전의 ROS를 설치하려 할 때 "

category: error
tags: [ros, ros2, distribution, foxy, melodic, kinetic, noetic, mix, version, 설치, 동시]
---

ROS_DISTRO was set to 'foxy' before. Please make sure that the environment does not mix paths from different distributions 라는 메세지가 뜰 때 어떻게 해야 할까 ? <br/>

## ROS 여러가지 버전 동시에 설치 ?

Ubuntu 20.04같은 환경에서 ROS noetic이 설치되어 있는 경우 ROS foxy를 설치하는 과정에서 아래와 같은 에러 메세지를 볼 수 있다 <br/>

~~~bash
ROS_DISTRO was set to 'foxy' before. Please make sure that the environment does not mix paths from different distributions
~~~

사실 이 문제는 해결 방법이 간단하다. <br/>
ROS 1에서 ROS 2로 환경을 변경하는 과정에서의 warning 메세지일 뿐 무시하고 설치하면 된다. <br/>


## Reference
* [ROS_DISTRO make sure environment doesn’t mix paths](https://get-help.robotigniteacademy.com/t/ros-distro-make-sure-environment-doesnt-mix-paths/13150)
