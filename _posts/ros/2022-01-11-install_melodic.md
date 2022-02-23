---
layout: post
title: ROS melodic 설치 (Ubuntu 18.04)
tags: [ros]
---

Ref. http://wiki.ros.org/noetic/Installation

<br/>

## 1. 설치

packages.ros.org로부터 software를 받도록 PC setup하는 과정

~~~bash
$ sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
~~~

<br/>

key 등록

~~~bash
$ sudo apt install curl # if you haven't already installed curl
$ curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | sudo apt-key add -
~~~

<br/>

Update package

~~~bash
$ sudo apt update
~~~

<br/>

설치

~~~bash
$ sudo apt install ros-melodic-desktop-full
~~~

<br/>

환경변수 설정

~~~bash
$ gedit ~/.bashrc

# 파일 제일 하단에 아래 문장 기입
source /opt/ros/melodic/setup.bash
~~~

<br/>

## 2. 디펜던시 설치

ROS workspace를 구축하고 빌드하는데 있어서 dependencies를 설치해야 함

~~~bash
$ sudo apt install python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential
$ sudo apt install python3-rosdep
~~~

<br/>

## 3.  Initialize rosdep

ROS tools를 사용하기 전, rosdep을 초기화를 해야 함

rosdep은 사용자가 컴파일할 소스의 dependencies를 쉽게 설치 하게끔 함

최초 1회만 하면 됨

~~~bash
$ sudo rosdep init
$ rosdep update
~~~

