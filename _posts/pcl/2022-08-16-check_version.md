---
layout: single
title: "[#15] PCL 버전 확인"

category: pcl
tags: [pcl, point cloud, 포인트 클라우드, version, 버전, check]
toc: true
toc_sticky: true
---

PCL 버전을 확인해보자! <br/>

~~~bash
$ dpkg -s libpcl-dev | grep 'Version'
~~~