---
title: "Multiple GCC versions"

toc: true
toc_sticky: true
category: install
tags: [install, gcc, g++, multiple, other version, 여러 버전]
---

다양한 종류의 GCC 버전을 설치해보자 ! <br/>

## Check your gcc version

~~~bash
 $ gcc --version
~~~

위의 명령어로 본인이 사용하고 있는 컴파일러의 버전이 보일것이다 <br/>

<br/>

## Install Multiple GCC version

~~~bash
 $ sudo apt install software-properties-common
 $ sudo add-apt-repository ppa:ubuntu-toolchain-r/test
~~~

원하는 컴파일러 버전을 설치해주자 <br/>

~~~bash
 $ sudo apt install gcc-7 g++-7 gcc-8 g++-8 gcc-9 g++-9
~~~

alternative 를 configuration 해주자! <br/>
아래와 같이 설정하게 되면 `gcc-9`가 제일 우선순위가 높다 ! <br/>

~~~bash
 $ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 90 --slave /usr/bin/g++ g++ /usr/bin/g++-9 --slave /usr/bin/gcov gcov /usr/bin/gcov-9
 $ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-8 80 --slave /usr/bin/g++ g++ /usr/bin/g++-8 --slave /usr/bin/gcov gcov /usr/bin/gcov-8
 $ sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 70 --slave /usr/bin/g++ g++ /usr/bin/g++-7 --slave /usr/bin/gcov gcov /usr/bin/gcov-7
~~~

<br/>

다른 버전을 사용하고 싶으면 `udpate-alternatives`를 이용해주자 <br/>

<br/>
