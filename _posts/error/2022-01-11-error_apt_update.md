---
title: sudo apt update 에러 해결!

toc: true
toc_sticky: true
category: error
tags: [update, linux, update, lock, 패키지, 업데이트, 오류, sudo, linux, ubuntu]
---

Could not get lock /var/lib/dpkg/lock-frontend - open (11 resource temporarily unavailable)

<br/>

`Take it EAZY`  

~~~bash
$ sudo killall apt apt-get
~~~

~~~bash
$ sudo rm /var/lib/apt/lists/lock
$ sudo rm /var/cache/apt/archives/lock
$ sudo rm/var/lib/dpkg/lock*

$ sudo dpkg --configure -a
~~~

