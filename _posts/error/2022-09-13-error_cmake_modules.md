---
title: "[Error] Cannot build 'cmake_modules'"
category: error
tags: []
---

catkin으로 빌드하다가 아래 메세지가 뜬다면?

~~~bash
CMake Error at /opt/ros/noetic/share/catkin/cmake/catkinConfig.cmake:83 (find_package):
  Could not find a package configuration file provided by "cmake_modules"
  with any of the following names:

    cmake_modulesConfig.cmake
    cmake_modules-config.cmake

  Add the installation prefix of "cmake_modules" to CMAKE_PREFIX_PATH or set
  "cmake_modules_DIR" to a directory containing one of the above files.  If
  "cmake_modules" provides a separate development package or SDK, be sure it
  has been installed.
Call Stack (most recent call first):
  CMakeLists.txt:7 (find_package)
~~~

## How to solve?

쉽다 

~~~bash
# 당신의 ROS 버전을 입력하라
$ sudo apt install ros-noetic-cmake-modules
~~~

## Reference
* [astplanner compilation error: Could not find a package configuration file provided by “cmake_modules”](https://programmerah.com/fastplanner-compilation-error-could-not-find-a-package-configuration-file-provided-by-cmake_modules-26880/)