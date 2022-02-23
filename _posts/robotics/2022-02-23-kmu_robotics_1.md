---
layout: page
title: "[KMU #01] 이동로봇공학"
tags: [robotics]
---

<br/>

## 이동로봇공학 #1

돌아서면 까먹고.. ㅠㅠ <br/>
학교 다니면서 공부했던 내용들을 위주로 정리합니다 <br/>

<br/>

## Control Block diagram

제어랑 추정이랑 같이 사용되는 것 같다 <br/>

![img](/assets/img/robotics/2022-02-23-control_block.png)

`Guidance` : 제어 오차를 만들기 위한 Path planning도 포함 <br/>
`Vehicle w\ Actuator` : 여기에서 Process Noise 존재 <br/>
`Sensor` : 여기서 Measurement Noise 존재 <br/>
`Estimator` : Motion model(w/ Process Noise) + Measurement Model(w/ Measurement Noise)로 최종 state의 추정치 <br/>


<br/>

## Noise와 Disturbance의 차이

둘 다 시스템에 영향을 주는 요소인 것은 맞는데....! <br/>

* `Noise` : 잡음, High freq.
* `Disturbance` : 외란, Low freq.

<br/>