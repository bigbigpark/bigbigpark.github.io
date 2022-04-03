---
title: Gazebo, libcurl:(51) 'api.ignitionfuel.org'

toc: true
toc_sticky: true
category: error
tags: [gazebo, ros, error, ignitionfuel]
---

[Err] [REST.cc:205] Error in REST request

libcurl: (51) SSL: no alternative certificate subject name matches target host name 'api.ignitionfuel.org'

<br/>

이런 메세지 본 적 있을 것이다!

타겟 호스트 이름 주소가 잘못됐다

<br/>

~~~bash
$ gedit ~/.ignition/fuel/config.yaml
~~~

substitue **ignitionfuel** to **ignitionrobotics**

<br/>

