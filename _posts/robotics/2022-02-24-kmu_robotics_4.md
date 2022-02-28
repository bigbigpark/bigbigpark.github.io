---
layout: post
title: "[KMU #04] Control System Design"
tags: robotics
---

<br/>

## Concept of Stability

제어의 가장 중요한 성능은 `Stabliity`임

![img](/assets/img/robotics/2022-02-24-14.png)

3가지의 평형 상태가 존재하지만 첫 번째가 제일 stable

<br/>

## Vehicle Stability

![img](/assets/img/robotics/2022-02-24-15.png)

노란색 선에서 외력이 들어올 때,
1. `직선성`이 유지
2. Magnitude값은 떨어졌지만 오른쪽으로 가는 `방향성` 유지
3. 1번과 2번을 합치면 general한 position stability가 됨

<br/>

## Stability vs. Maneuverability

![img](/assets/img/robotics/2022-02-24-16.png)

<br/>

## Vehicle Control System

![img](/assets/img/robotics/2022-02-24-17.png)

<br/.

## Guidance, Control and Navigation

보통 항공우주 쪽에서 GNC(Guidance, Naviation & Control) <br/.

![img](/assets/img/robotics/2022-02-24-18.png)

<br/>

## What is Control?

![img](/assets/img/robotics/2022-02-24-19.png)

<br/>

## Linear System

![img](/assets/img/robotics/2022-02-24-20.png)

<br/>

## Transfer Function in s-Domain

라플라스 트랜스폼을 해봅시당

![img](/assets/img/robotics/2022-02-24-21.png) 

<br/>

## Analysis of System Response

![img](/assets/img/robotics/2022-02-24-22.png) 

<br/>

## Why use feedback control?

![img](/assets/img/robotics/2022-02-24-23.png) 

<br/>

## Control Approaches

![img](/assets/img/robotics/2022-02-24-24.png) 

<br/>

## Clasical Control: PID Control

![img](/assets/img/robotics/2022-02-24-25.png) 

<br/>

## Modern Control in State-Space

![img](/assets/img/robotics/2022-02-28-01.png)

<br/>

## Modern Control in State-Space

![img](/assets/img/robotics/2022-02-28-02.png)

<br/>

## 모든 시스템이 선형은 아님!

![img](/assets/img/robotics/2022-02-28-03.png)

<br/>


## (Self-Tuning) Adaptive Control

Operating condition이 어떻냐에 따라 제어법을 바꿀 수 있다 <br/>
아래와 같이 두 가지 접근법도 존재! <br/>

![img](/assets/img/robotics/2022-02-28-04.png)

<br/>

## Motion Control of Vehicles

Ground Vehicles은 `종방향`, `횡방향`의 속도가 주요 관심사 <br/>
`Kinematic` model이 주로 사용됨 <br/>
Aerial Vehicles는 rpy가 direction이 주요 관심사 <br/>

![img](/assets/img/robotics/2022-02-28-05.png)

<br/>

## Autopilot Design

![img](/assets/img/robotics/2022-02-28-06.png)

<br/>

## Integral Control

쓰로틀이 0일 때 에러값을 0으로 만들어 주던지 <br/>

forgetting factor 를 적용하던지 <br/>

![img](/assets/img/robotics/2022-02-28-07.png)

<br/>

## Turning Control (선회 제어)

![img](/assets/img/robotics/2022-02-28-08.png)

<br/>

## Thrust Allocation (추력 분배)

![img](/assets/img/robotics/2022-02-28-10.png)


<br/>

## Thrust Allocation:: Moore-Penros Pseudoinverse

![img](/assets/img/robotics/2022-02-28-09.png)

<br/>

## Thrust Allocation:: Moore-Penros Pseudoinverse

![img](/assets/img/robotics/2022-02-28-11.png)

<br/>
