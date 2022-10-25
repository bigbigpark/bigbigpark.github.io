---
title: "[ROS] PC 2대 동일 네트워크 연결하기"
category: ros
tags: [ros, cpp, ip, communication, same, network, machine, 동일, 네트워크, 연결]
---

오늘은 서로 다른 PC를 하나의 ROS 네트워크에 연결해서 topic을 주고 받는 설정을 해보자

## How to?

It's so super easy ^_^ <br/>
다음 두 단계만 거치면 된다. <br/>
우선 server 역할을 할 PC 1대와 slave 역할을 할 PC 한 대를 사전에 정의해둔다. <br/>

### 1. Server PC setup

터미널에서 `ifconfig`를 입력하고 ip를 기억해두자 <br/>
예시: `192.168.0.1`

~~~bash
$ gedit ~/.bashrc

# ROS_HOSTNAME는 현재 사용 중인 PC의 ip를 입력해준다
export ROS_HOSTNAME=192.168.0.1
# ROS_MASTER_URI는 서버의 ip로 설정해준다
export ROS_MASTER_URI=http://192.168.0.1:11311

# 그리고 저장 후 적용
$ source ~/.bashrc
~~~


### 2. Slave PC setup

터미널에서 `ifconfig`를 입력하고 ip를 기억해두자 <br/>
예시: `192.168.0.7`

~~~bash
$ gedit ~/.bashrc

# ROS_HOSTNAME는 현재 사용 중인 PC의 ip를 입력해준다
export ROS_HOSTNAME=192.168.0.7
# ROS_MASTER_URI는 서버의 ip로 설정해준다
export ROS_MASTER_URI=http://192.168.0.1:11311

# 그리고 저장 후 적용
$ source ~/.bashrc
~~~

## 주의사항
* 서버 ip(=ROS_MASTER_URI)로 설정된 컴퓨터에서 `roscore`를 먼저 실행하고, 나머지 코드를 실행하자! <br/>
* 이렇게 설정해놓으면 일대다 통신이 가능하다 ^^