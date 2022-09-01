---
title: "[C++] 현재 시간대 출력하기"

category: cpp_useful
tags: [C++, cpp, time, current, utc]
---

현재 시간(연도, 월, 일, 시분초)를 출력해보자! <br/>

## 라이브러리 선언

시간 관련 함수는 아래 라이브러리에 포함되어 있다 <br/>

~~~c++
#include <ctime>
~~~

<br/>

## 전체 코드

~~~c++
time_t timer;
timer = time(NULL); //time_t 변수에 시간 정보 저장
struct tm* t = localtime(&timer); //localtime 함수로 포맷 변환

std::cout << "year : " << t->tm_year + 1900 << std::endl;
std::cout << "month : " << t->tm_mon + 1 << std::endl;
std::cout << "day : " << t->tm_mday << std::endl;
std::cout << "hour : " << t->tm_hour << std::endl;
std::cout << "min : " << t->tm_min << std::endl;
std::cout << "sec : " << t->tm_sec << std::endl;
~~~

끝! <br/>

<br/>

## Reference
* ["현재시간 정보 얻기"](https://velog.io/@d0ngje/%ED%98%84%EC%9E%AC%EC%8B%9C%EA%B0%84-%EC%A0%95%EB%B3%B4-%EC%96%BB%EA%B8%B0)