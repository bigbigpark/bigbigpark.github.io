---
title: "CMakeLists.txt 수정하기"

toc: true
toc_sticky: true
category: ceres
tags: [cmake, cmakelists, ceres, solver, install, 설치하기]
---

How to construct CMakeLists.txt to use ceres sovler<br/>

## CMakeLists.txt 파일 구성하기

Ceres solver를 설치하고 아래와 같이 빌드 코딩 후 빌드해보자 <br/>

### 1. Code Skeleton

~~~c++
#include <ceres/ceres.h>
#include <glog/logging.h>

using ceres::Problem;

int main(int argc, char** argv)
{
  // The variable to solve for with its initial value. It will be
  // mutated in place by the solver.
  double       x         = 0.5;
  const double initial_x = x;

  // Build the problem.
  Problem problem;

  return 0;
}

~~~

문제가 없이 빌드 되었다면 이 게시물을 건너뛰자! <br/>
나는 빌드조차 되지 않아서 꽤나 고생을 했다 <br/>

### 2. CMakeLists.txt
~~~cmake
# cmake 최소 버전을 적어준다
cmake_minimum_required(VERSION 2.8.3)

# project 이름을 적어준다 [띄어쓰기 금지]
project(my_proj)

# C++ 11로 컴파일하겠다는 뜻이다!
# ceres를 빌드하는 과정에서 에러가 나서 해결했던 방법이다
set(CMAKE_CXX_STANDARD 11)

# 아래 명령을 순서대로 입력해준다
find_package(Ceres REQUIRED)

include_directories(${CERES_INCLUDE_DIRS})

add_executable(main src/main.cpp)
target_link_libraries(main ${CERES_LIBRARIES})

~~~

위와 같이 선언하면 문제없이 빌드될 것이다 ! <br/>


## Reference
* [undefined reference to `ceres::Problem::Problem()'](https://groups.google.com/g/ceres-solver/c/wt8lf1aXrfg)