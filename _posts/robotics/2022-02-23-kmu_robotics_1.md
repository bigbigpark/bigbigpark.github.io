---
layout: page
title: "[KMU #01] 이동로봇공학"
tags: [robotics]
---

<br/>

돌아서면 까먹고.. ㅠㅠ <br/>
학교 다니면서 공부했던 내용들을 위주로 정리합니다 <br/>

## Control Block diagram

`Guidance` : 제어 오차를 만들기 위한 Path planning도 포함 <br/>
`Vehicle w\ Actuator` : 여기에서 Process Noise 존재 <br/>
`Sensor` : 여기서 Measurement Noise 존재 <br/>
`Estimator` : Motion model(w/ Process Noise) + Measurement Model(w/ Measurement Noise)로 최종 state의 추정치 <br/>


<br/>

## Noise와 Disturbance의 차이

* `Noise` : 잡음, High freq.
* `Disturbance` : 외란, Low freq.

