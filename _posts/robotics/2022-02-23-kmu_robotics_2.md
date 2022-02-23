---
layout : post
title : "[KMU #2] 로봇 모션1"
tags: [robotics]
---

<br/>

## Classification of Vehicles

Vehicle의 종류는 여러 개가 있었다 <br/>
나는 vehicle하면 자동차인줄 알았지만.. ㅠㅠ <br/>

* `Vehicle`의 종류 <br/>
  * Ground Vehicles
    1. Legged :  4족 보행로봇 등
    2. Wheeled : 터틀봇, 로스봇, 자칼 등
  * Aerial Vehicles
    1. Fixed-wing : 고정식
    2. Rotary-wing : 회전식
  * Marine(Ocean) Vehicles
    1. Surface(floating)
    2. Underwater

<br/>

## Robot Locomotion

정의: 모바일 로봇이 한 장소에서 다른 장소로 움직이기 위해서 사용되어지는 Mechanism 이나 Method를 뜻함

`Bio-inspired locomotion` : walking, jumping, running, swimming, flying

<br/>

## Motion에 대한 기본 Concepts

`Kinematics` : motion(힘, 가속도)의 표현을 제외한 수학적인 표현 <br/>
`Kinetics` : motion(힘, 가속도)를 고려한 관계 <br/>
`Dynamics` : Kinematics + Kinetics <br/>

![img](/assets/img/robotics/2022-02-23-kinematics.png)

<br/>

## Motion을 어떻게 정의하는가?

object의 motion을 정량화하기 위해서는 `Reference frame`이란 것이 필요! <br/>
reference frame이란 `origin` 또는 `coordinate system` 으로부터 정의됨 <br/>

<br/>

## Coordinate Systems

3가지가 존재
* 직교좌표계(Cartesian=Rectangular)

$$
x+y+z+d  = 1
$$


* 원통좌표계(Cylinderical=polar)
* 구형좌표계(Spherical)