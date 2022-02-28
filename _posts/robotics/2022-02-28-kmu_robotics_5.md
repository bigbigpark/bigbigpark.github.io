---
layout: post
title: "[KMU #05] Vehicle Guidance"
tags: robotics
---

## Definition of Guidance

`Vehicle Guidance` : 현재 위치에서 타겟 위치로 가기 위한 path/trajectory를 계산하는 액션임 <br/>

![img](/assets/img/robotics/2022-02-28-12.png)

<br/>

## Guidance Systems

* 세계 2차 대전 이후부터 Guidance 미사일 등장
* Control theory 연구와 더불어 guidance theory 연구도 같이 진행
* 결과적으로, `guided missile community`에서 많은 문헌들이 존재

<br/>

## Guidance and Control

* Guidance는 Control과 어떻게 다른가?
  * `Control`은 주어진 목적(i.e. trajectory tracking)을 만족시키는 힘과 모멘트를 결정하는 것 

* 관련 연구 주제: `Motion Planning`
  * 모션 플래닝은 `Robotics`나 `Computer Science` 분야에서 전통적으로 사용되어 왔던 용어
  * `정의`: 장애물이 포함된 환경에서 initial location에서 goal location으로 움직이기 위해 실행되는 일련의 action들의 집합을 planning하는 것!

* Vehicle guidance 와 Control System은 두가지 요소로 구성됨
  * (1) Attitude control systems
  * (2) Path control systems(i.e. trajectory tracking, path following)