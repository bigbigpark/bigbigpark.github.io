---
title: Ceres Solver 2.0

category: install
tags: [install, ceres, 설치, 라이브러리, 우분투, 리눅스, ubuntu, linux]
---

<br/>

ceres solver를 설치해보자

Ref. http://ceres-solver.org/installation.html

<br/>

## 1. Dependencies

v2.0 Ceres는 **fully C++14-compliant complier**를 요구

<=v1.4 Ceres는 **C++11** 이면 됨

* **Eigen 3.3** or later
* **CMake 3.5** or later
* **glog 0.3.1** or later

<br/>

## 2. Install all the dependencies

~~~bash
# CMake
sudo apt install cmake
# google-glog + gflags
sudo apt install libgoogle-glog-dev libgflags-dev
# BLAS & LAPACK
sudo apt install libatlas-base-dev
# Eigen3
sudo apt install libeigen3-dev
# SuiteSparse and CXSparse (optional)
sudo apt install libsuitesparse-dev
~~~

<br/>

## 3. Git clone Ceres Solver

~~~bash
$ cd ~/Downloads
$ mkdir ceres
$ cd ceres
~~~

~~~bash
$ git clone https://ceres-solver.googlesource.com/ceres-solver
~~~

여기까지만 오면 [ceres] - [ceres-solver]로 폴더 경로가 잡혀있을텐데,

직전 경로로 돌아가서 ceres-bin을 만들어 준다

~~~bash
$ cd ..
$ mkdir ceres-bin
$ cd ceres-bin
~~~

<br/>

## 4. Build, Test and Install

~~~bash
$ cmake ../ceres-solver
$ make -j3
$ make test
$ make install
~~~
