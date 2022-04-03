---
title: 저장소 변경

toc: true
toc_sticky: true
category: install
tags: [우분투 저장소, repository, change, kakao, mirror, 저장소, linux, ubuntu]
---

<br/>

여기서 저장소란 우분투에서 바이너리 패키지를 받게 되는 저장소를 일컫는다

따라서 한국과 가까운 서버일수록 당연히 빠르다

그거를 변경해보자!


~~~bash
$ sudo vim /etc/apt/sources.list

# vim editor가 없다면
$ sudo apt install vim
~~~

<br/>

![img01](/assets/img/blog/ubuntu/2022-01-11/01.png)

지금 보면 kr.archive.ubuntu.com 으로 설정되어 있는데 이 부분을 변경하자

<br/>

이 화면 그대로 아래 명령어를 입력해준다

~~~bash
:%s/kr.archive.com/mirror.kakao.com/g

# 명령어 설명
# :%s/변경할 대상/변경할 값/g
# 여기서 s는 substitute의 약자
~~~

<br/>

아래 명령어로 편집기를 닫는다

~~~bash
:wq!
~~~

<br/>