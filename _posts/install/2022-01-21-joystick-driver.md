---
title: 조이스틱 드라이버 설치

category: install
tags: [install, joystick, driver, 조이스틱, 드라이버, 리눅스, 설치]
---

<br/>

드라이버 설치 해보자..

처음에는 잘 안 잡힌다

<br/>

## 1. USB 연결 상태 확인

아래와 같은 명령어 2개가 자주 이용된다

~~~bash
$ lsusb
$ dmesg --follow
~~~

필자는 아래 명령어를 자주 애용한다

실시간으로 보이기 때문!

하지만 둘 다 이용하는 것이 바람직하다

<br/>

## 2. USB Joystick driver 설치

~~~bash
$ sudo apt install xboxdrv joystick
$ sudo apt install jstest-gtk
~~~

<br/>

## 3. 설치확인

~~~bash
$ jstest-gtk
~~~

안 뜨면 `Refresh`눌러서 확인해본다!!!

<br/>