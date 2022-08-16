---
layout: single
title: "[#16] PCL 기존 버전 완전 삭제"

category: pcl
tags: [pcl, remove, purge, uninstall, upgrade, change, version]
toc: true
toc_sticky: true
---

PCL 기존에 설치되어 있는 것들을 완전히 제거해보자! <br/>

## 기존 삭제되어 있는 것 삭제

### 1. `libpcl-dev` 제거

~~~bash
$ sudo apt purge libpcl-dev
~~~

<br/>

### 2. libraries 제거

~~~bash
$ cd /usr/lib/x86_64-linux-gnu
$ sudo rm libpcl*
~~~

<br/>

### 3. headers 삭제

~~~bash
$ cd /usr/include
$ sudo rm -r pcl-1.7 # 여기는 본인이 설치되어 있는 버전
~~~

<br/>

## Reference
* ["Upgrade PCL from 1.7 to 1.8 on Ubuntu 16.04"](https://gist.github.com/zhenzhenxiang/c2127ee7ad54a2e99ba7a4fdc0cf7147)