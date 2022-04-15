---
title: "Could not get lock /var/lib/dpkg/lock-frontend - open (11 resource temporarily unavailable)"

toc: true
toc_sticky: true
category: error
tags: [update, linux, update, lock, 패키지, 업데이트, 오류, sudo, linux, ubuntu]
---

sudo apt update 에러 해결! <br/>

<br/>

가끔 패키지 업데이트를 수행하다가 아래와 같은 에러 메세지를 보게 된다 <br/>

~~~bash
Could not get lock /var/lib/dpkg/lock-frontend - open (11 resource temporarily unavailable)
~~~

<br/>

그럴 때는 아래와 같이 명령어를 입력해준 후 해결하자 <br/>

## Solve

~~~bash
$ sudo killall apt apt-get
~~~

~~~bash
$ sudo rm /var/lib/apt/lists/lock
$ sudo rm /var/cache/apt/archives/lock
$ sudo rm/var/lib/dpkg/lock*

$ sudo dpkg --configure -a
~~~

