---
layout: post
title: Could not get lock /var/lib/dpkg/lock-frontend - open (11 resource temporarily unavailable)
tags: [error]
---

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

