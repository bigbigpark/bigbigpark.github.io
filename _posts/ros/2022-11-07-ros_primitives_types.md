---
title: "[ROS] 표준 자료형 비교"
category: ros
tags: [ros, python, types, types, 타입, variable, primitives, 변수, 형태]
---

ROS에서 사용하는 자료형과 C++ or Python에서 사용하는 자료형과 비교해보자 <br/>

## 자료형 비교 테이블

나는 Python보다는 C++ 위주로 코드를 많이 짜서 자주 사용하는 것만 **볼드체**로 표시해두었다. <br/>

<br/>

| 자료형 타입    |   C++   |python|
| ---- | ---- | ---- |
| bool |uint8_t| bool|
| **int8** |**int8_t**| int |
| uint8 |uint8_t| int |
| int16 |int16_t| int |
| uint16 |uint16_t | int |
| **int32** | **int32_t**| int |
| uint32 | uint32_t| int |
| int64 | int64_t| int |
| uint64 | uint64_t| int |
| **float32** |**float**| float |
| **float64** |**double**| float |
| **string** |**std::string**| string |
| **time** |**ros::Time**| rospy.Time |
| duration |Duration| rospy.Duration |


## Refence
* [ROS 자료형-ROS C++ 파이썬 비교 (c++ vs python)](https://codingcoding.tistory.com/376)