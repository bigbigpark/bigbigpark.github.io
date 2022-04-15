---
title: "[Ubuntu] 우분투 저장소 변경, 한국서버로 속도 up!"

toc: true
toc_sticky: true
category: linux
tags: [우분투 저장소, repository, change, kakao, mirror, 저장소, linux, ubuntu]
---

<br/>

**저장소(repository)**란 우분투에서 바이너리 패키지를 받게 되는 **저장소**를 일컫는다 <br/>
따라서 한국과 가까운 서버일수록 당연히 다운로드 및 업데이트 속도가 빠르다 <br/>
그거를 변경해보자! <br/>

<br/>

## 왜 필요한가? 

리눅스를 처음 설치하고 sudo apt update 속도가 엄청 느린경우가 있다 <br/>
따라서 저장소를 변경하는 이유는 바이너리 패키지에 접근하는 속도를 높이기 위해서다 <br/>
아마 디폴트 값으로 kr.archive.ubuntu.com으로 연결되어 있는데, 빠른 한국 서버가 있으니 거기로 변경해주자 <br/>

<br/>

## 저장소 변경하기

### 1. 저장소 정보가 들어있는 파일 편집

~~~bash
$ sudo vim /etc/apt/sources.list

# vim editor가 없다면
$ sudo apt install vim
~~~

<br/>

아래 사진을 보면 보라색으로  **kr.archive.ubuntu.com** 으로 설정되어 있는데 이 부분을 변경하자

![](/assets/img/linux/2022-04-15/02.png)

<br/>

### 치환

vim이나 vi 에디터에서 명령어를 입력하기 위해 콜론을 이용한다 <br/>
위에서 봤던 화면에서 **:**를 입력해준다 <br/>

<br/>

:를 입력하면 그 안에 명령어를 입력할 수가 있는데 아래와 같이 입력해주자

~~~bash
%s/kr.archive.com/mirror.kakao.com/g
~~~

### 명령어 설명
:%s/변경할 대상/변경할 값/g <br/>
여기서 %s는 대체하겠다는 의미의 substitute의 약자이다 <br/>

<br/>

즉, kr.archive.ubuntu.com을 mirror.kakao.com으로 모두 변경하겠다는 말이다<br/>

## 결과

![](/assets/img/linux/2022-04-15/03.png)

<br/>

아래 명령어로 편집기를 닫는다

~~~bash
:wq!
~~~

wq!는 저장과 동시에 편집기를 닫는다는 명령어다 <br/>

<br/>