---
layout: post
title : "[KMU #03] Robot Motion 2"
tags: [robotics]
---

## 자유도 : Degrees of Freedom (DOFs)
* `동적 시스템` (Dynamic System)
  * 한 object의 configuration을 나타내는데 필요한 실수값의 좌표계의 최소 숫자

$$

A=\begin{bmatrix}
acos(\theta) \; -asin(\theta) \; c \\
asin(\theta) \; acos(\theta) \; d \\
0 \; 0 \; 1\\
\end{bmatrix}
\rightarrow DoF(A) = 4
$$

* `수학`
  * 논리적으로 독립된 값의 최댓값

<br/>

## How to compute Motion

* From forces/moments to position/orientation <br/>

![img](/assets/img/robotics/2022-02-24-01.png)

왼쪽 3개는 `body-fixed frame`, 오른쪽 2개는 `global frame` 에서 정의됨

$$

[u,v,w] \; \rightarrow \, [\dot{x} \; \dot{y} \; \dot{z}] \\
[p,q,r] \; \rightarrow \, [\dot{\phi} \; \dot{\theta} \; \dot{\psi}] \\

$$

$$\rightarrow \, $$ 왼쪽에서 오른쪽으로 가기 위해서는 `Euler Angle Transformation`이 필요!

<br/>

## Coordinate Transformation

좌표계간 변환을 해보자! <br/>
A와 B 프레임 사이의 Transformation을 해보자 <br/>

![img](/assets/img/robotics/2022-02-24-02.png)

<br/>

![img](/assets/img/robotics/2022-02-24-03.png)

## Yaw angle

roll pitch yaw라고 부르지만 실제 변환은 yaw pitch roll 순서로 변환됨 <br/>

![img](/assets/img/robotics/2022-02-24-04.png)

## Pitch angle

![img](/assets/img/robotics/2022-02-24-05.png)

## Roll angle

![img](/assets/img/robotics/2022-02-24-06.png)

<br/>

## Position Transformation Matrix

보통은 global frame에서 표현되는 body-fixed frame의 변환을 많이 씀! <br/>
i.e. `Odometry` <br/>
따라서 아래처럼 변환을 해보면 yaw-pitch-roll 순서로 행렬이 곱해짐을 확인 <br/>

![img](/assets/img/robotics/2022-02-24-07.png)

<br/>

## Linear Velocity Transformation

$$\therefore \,$$ 선속도와 각속도도 Transformation으로 표현 가능! <br/>

![img](/assets/img/robotics/2022-02-24-08.png)

<br/>

## Angular Velocity Transformation

![img](/assets/img/robotics/2022-02-24-09.png)

![img](/assets/img/robotics/2022-02-24-10.png)

<br/>

## Simulation of 6-DoF Motion

![img](/assets/img/robotics/2022-02-24-11.png)

<br/>

## Underactuated Systems

Control input의 개수보다 Dimension of configuration space가 큰 시스템!!!

![img](/assets/img/robotics/2022-02-24-12.png)

## Underactuated Vehicle

Underactuated 시스템은 우리 주변에 굉장히 많이 있음!
* 바퀴형 로봇, 드론, 잠수함 등등
<br/>
심지어 Fully actuated system도 특정 상황에서 Underactuated system으로 변경되기도 함 <br/>

* 시스템 고장 & 데미지
* 이 때는 fault-tolerant(일부 고장에도 정상동작하는) 시스템을 고려해야 함

![img](/assets/img/robotics/2022-02-24-13.png)