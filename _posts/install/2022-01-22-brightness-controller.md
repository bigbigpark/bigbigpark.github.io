---
title: "[Ubuntu] 리눅스(우분투) 화면밝기 간단하게 해결!"

category: install
tags: [install, brightness, controll, 리눅스, 화면밝기, linux]
---

<br/>

우분투에서 화면 밝기 조절해보자! <br/>

가끔 우분투(리눅스) 환경에서 화면 밝기가 조절이 되지 않을 경우가 있다 <br/>
나는 예전에 노트북 환경에서 리눅스를 다뤘을 때 이런 문제가 있었다 ! <br/>

<br/>

너무 밝은 상태로 코딩하면 눈이 너무 아파서... 저처럼 피해보는 사람들이 없기를!! <br/>

요약하면 **brightness-controller**라는 프로그램을 설치해야 한다 <br/>

## Brightness-controller 설치하기

### 1. 저장소 추가 (ADD PPA)

~~~bash
$ sudo add-apt-repository ppa:apandada1/brightness-controller
~~~

<br/>

아래쪽 사진과 같이 나올텐데 **ENTER**키를 눌러서 진행하자 <br/>

![](/assets/img/install/2022-04-15/13.png)

<br/>

## 2. 패키지 업데이트 및 설치

~~~bash
$ sudo apt update
$ sudo apt install brightness-controller
~~~

<br/>

## 3. 실행

~~~bash
$ brightness-controller
~~~

![](/assets/img/install/2022-04-15/14.png)

<br/>

### 실행 화면

다음과 같이 실행될 것이다 <br/>
딴 거는 사용자에 맞게 커스텀 하면 되는데 나는 제일 왼쪽 **Primary**탭에 있는 **Brightness**만 조절하였다 <br/>

너무 낮추면 0이 되어서 재부팅하는 일이 생길 수 있으니... 미리 주의를 요한다 <br/>

![](/assets/img/install/2022-04-15/15.png)

<br/>

이렇게 설정해놓고 노트북을 재부팅하면 밝기 조절을 계속 해줘야하는 단점이 있다 <br/>
혹시 이런 문제를 해결하신분이 있다면.. 알려주세요 ㅠㅠ <br/>

<br/>


그래서 노트북을 새로 켜게 될 경우에 한번씩만 꼭 실행해주면 가능할 것이다 <br/>
아니면 특정시간 후에 자동으로 실행되는 스크립트를 만들어도 좋을 것이다 <br/>

## 4. 삭제

~~~bash
$ sudo apt purge brightness-controller
~~~





<br/>

