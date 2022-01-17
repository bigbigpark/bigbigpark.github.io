# How to install nvidia driver on Ubuntu 18.04

Ubuntu 18.04에 Nvidia driver를 설치하는 방법을 알아보자

<br/>

## 1. 장치 확인

~~~bash
$ sudo lshw -C display
~~~

description쪽 부분에 **VGA**라고 적혀있으면 일단 꼽혀있는 거임!

<br/>

## 2. 저장소 추가

~~~bash
$ sudo add-apt-repository ppa:graphics-drivers/ppa
$ sudo apt update
~~~



<br/>

## 3. 권장 설치

Ubuntu에서는 설치 가능한 목록을 출력해줌

~~~bash
$ sudo ubuntu-drivers devices
~~~

여기서 **recommended**라고 적힌 녀석을 설치해줘야함

<br/>

## 4. 설치

위에서 설치하고 싶은 녀석을 설치하면 됨

~~~bash
$ sudo apt install nvidia-driver-470
~~~

<br/>