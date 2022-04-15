---
title: "[Google Drive] 우분투(리눅스)에서 구글 드라이브 사용하기"

toc: true
toc_sticky: true
category: install
tags: [google drive, drive, google, install, ubuntu]
---

How to mount google drive on Ubuntu/Linux <br/>

**구글 드라이브**를 리눅스 환경에 마운트하는 방법을 정리한다 <br/>
매~~우 쉬우니 차례차례 명령어만 따라치면 손쉽게 할 수 있다 <br/>

## 설치

아래 명령어를 차례로 입력해준다 <br/>

~~~bash
$ sudo add-apt-repository ppa:alessandro-strada/ppa
$ sudo apt update
$ sudo apt install google-drive-ocamlfuse
~~~

<br/>

## 폴더 생성

구글 드라이브를 마운트할 **폴더**를 하나 생성해준다 <br/>

~~~bash
$ mkdir ~/GoogleDrive
~~~

<br/>
사진으로 보면 아래와 같다 <br/>

![](/assets/img/install/2022-04-15/07.png)

## 구글 드라이브 마운트 하기

~~~bash
$ google-drive-ocamlfuse ~/GoogleDrive
~~~

<br/>
사진으로 보면 아래와 같다 <br/>

![](/assets/img/install/2022-04-15/08.png)

<br/>

여기까지 무사히 따라왔다면 **구글 계정**으로 **로그인** 하라는 창이 하나 열린다 <br/>

![](/assets/img/install/2022-04-15/09.png)

<br/>

드라이브에 연동되어 있는 구글 계정으로 로그인 한다 <br/>
우측 하단에 **허용**을 누른다 <br/>

![](/assets/img/install/2022-04-15/10.png)

<br/>

아래 사진과 같이 뜬다면 성공 ! <br/>

![](/assets/img/install/2022-04-15/11.png)

## 결과 확인

아까 마운트할 폴더를 만든 경로에 구글 드라이브가 성공적으로 마운팅된 것을 확인할 수 있다 <br/>
(아래 사진 확인)

![](/assets/img/install/2022-04-15/12.png)

<br/>

## 꿀팁

구글 드라이브를 마운트하고 싶을때마다 아래 명령어 치기는 너무 time-consuming한 일이다 <br/>
~~~bash
$ google-drive-ocamlfuse ~/GoogleDrive
~~~

### 단축키 설정

환경변수 편집창을 열고, <br/>

~~~bash
$ gedit ~/.bashrc
~~~

제일 하단에 아래 명령을 추가해준다 <br/>

~~~bash
alias gd='google-drive-ocamlfuse ~/GoogleDrive'
~~~

환경변수 편집창을 닫고 반영해준다 <br/>

~~~bash
$ source ~/.bashrc
~~~

> 끝

이제 **gd**만 입력하여도 구글 드라이브가 마운트된다 <br/>

~~~bash
$ gd
~~~