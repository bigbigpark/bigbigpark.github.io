---
title: "[Error] gazebo-2: process has died [pid xxxx, ..] "
category: error
tags: [gazebo, ros, error, process, gazebo2, died]
---

Gazebo 동작 도중에 `gazebo-2: process has died` 에러가 뜬다면? <br/>

## 에러코드

~~~bash
[gazebo-2] process has died [pid 12345, exit code 223,
~~~

## 해결 방법

~~~bash
$ killall gzserver
$ killall gzclient
~~~

## Reference
* [[error] "[gazebo-2] process has died [pid xxxxx, ..."](https://jdselectron.tistory.com/110)