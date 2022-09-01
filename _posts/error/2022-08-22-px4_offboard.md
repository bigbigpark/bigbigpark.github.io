---
title: "[PX4] offboard control이 안 될 때"

category: error
tags: [ros, ros2, PX2, autopilot, SITL, gazebo, control, offboard]
---

PX4와 ROS2 예제를 돌리던 중 `[PreFlightCheck] mode not suitable for takeoff` 라는 문구와 함께 컨트롤이 되지 않는 경우에 해결해보자! <br/>

<br/>

## ROS2를 이용해서 PX4 SITL 돌려보기

3가지 터미널에서 아래 명령어를 각각 입력해보자 <br/>
~~~bash
$ make px4_sitl_rtps gazebo
~~~
~~~bash
$ micrortps_agent -t UDP
~~~
~~~bash
$ ros2 run px4_ros_com offboard_control
~~~

<br/>

## 에러 발생

다음과 같은 에러가 첫 번째 터미널에서 발생하는 경우가 있다 <br/>
~~~bash
INFO  [commander] Failsafe mode activated	
WARN  [PreFlightCheck] Mode not suitable for takeoff
INFO  [commander] Failsafe mode deactivated	
INFO  [tone_alarm] notify negative
~~~

이 때는 파라미터 설정이 잘못된 것이므로 다음과 같이 해결해주자 <br/>

<br/>

## 해결!

첫 번째 터미널에 다음을 입력해준다 <br/>

~~~bash
param set COM_RCL_EXCEPT 4
param set NAV_DLL_ACT 0
param set NAV_RCL_ACT 0
~~~

## Reference
* [Not able to take off from offboard control mode (failsafe mode activated, [PreFlightCheck] mode not suitable for takeoff) ](https://github.com/PX4/PX4-Autopilot/issues/19919)
