---
title: "[Linux] 패키지 설치 경로 찾기"

toc: true
toc_sticky: true
category: linux
tags: [linux, ubuntu, package, path, 패키지, 설치 ,경로]
---

리눅스에 설치한 패키지 경로를 찾아보자<br/>

리눅스는 계정 별로, 설치 방법별로 경로가 다르게 잡히는 거 같다 <br/>

## apt install로 설치

~~~bash
$ dpkg -L openjdk-8-jre
~~~


## gem으로 설치

~~~bash
$ gem environment | grep something
~~~

## rpm으로 설치

~~~bash
$ rpm -qa | grep pcre
~~~

## yum으로 설치

~~~bash
$ yum list installed pcre*
~~~

## Reference
* [패키지가 설치 된 위치 찾기 in Ubuntu](http://dveamer.github.io/ubuntu/FindWhereThePackageInstalled.html)