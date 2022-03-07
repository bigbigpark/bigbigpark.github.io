---
layout: post
title: "[#01] 드론 프로그래밍 - 제어시스템 설계"
tags: drone
---

<br/>

**UAV 제어 과제**를 하게 되었다 <br/>
지금까지는 `자율주행 자동차`와 `모바일 로봇`만 다뤘는데 드론은 처음이다! <br/>
따라서 제어 시스템을 정리를 하면서 공부하고 구현할 예정이다 <br/>
`매트랩 코리아` 강의를 바탕으로 정리한다 <br/>
나의 모든 글은 상업적 목적이 절대 없으며 철저한 개인 공부임을 밝힌다 <br/>

<br/>

## 드론의 종류

드론에는 아래와 같이 여러 종류가 있다 <br/>

* Quadcopter
* Hexacopter
* Octocopter
* Helicopter

![img](/assets/img/drone//2022-03-07/01.png)

## 드론의 기본 센서

드론은 기본적으로 아래의 센서로 구성되어 있다 <br/>

* Ultrasonar
  * 지면과의 거리 측정
* Camera
  * Optical flow를 통한 drone motion 추정

![img](/assets/img/drone//2022-03-07/02.png)

* Pressure
  * Altitude 측정 -> 지면과 공중의 공기압이 다른 것을 이용

![img](/assets/img/drone//2022-03-07/03.png)

* IMU(Inertial Measurement Unit)
  * Acceleration
  * Angular rate

![img](/assets/img/drone//2022-03-07/04.png)

<br/>

## 드론 제어의 개요

기본 적인 Control block diagram을 따른다 <br/>

![img](/assets/img/drone//2022-03-07/05.png)

<br/>

Quadcopter를 기준으로 모터 4개의 `forces & torques`를 입력 받음 <br/>
On-board sensor로부터 `system state`에 대한 추정치를 측정 <br/>
Feedback 되어서 Controller에 Guidance와 함께 인가 <br/>

<br/>

## 드론의 자유도

드론은 기본적으로 `Underactuated system` <br/>

![img](/assets/img/drone//2022-03-07/06.png)

![img](/assets/img/drone//2022-03-07/07.png)

<br/>

## 드론 제어의 기초를 알아보자!!!

![img](/assets/img/drone//2022-03-07/08.png)

<br/>

모터에 장착된 프로펠러가 회전을 하면 아래쪽으로 힘이 작용한다 <br/>
이 때 `reactive force`가 사진과 같이 위로 작용해서 막대기가 상승하게 된다 <br/>
이 힘이 중력과 같다면 제자리에서 `Hovering` 한다 <br/>

![img](/assets/img/drone//2022-03-07/09.png)

<br/>

하지만 힘이 막대기 끝에 있다면? <br/>
힘의 방향이 달라서 `토크`가 발생하여 막대기가 회전하게 된다 <br/>
이 때 위쪽 방향의 힘 < 중력 방향의 힘 이기 때문에 막대기는 곧 오른쪽 아래로 추락한다 <br/>

![img](/assets/img/drone//2022-03-07/10.png)

<br/>

따라서 막대기 끝에도 똑같은 힘을 주어서, 반대 방향의 토크를 만들어 내어 상쇄시킨다 <br/>

![img](/assets/img/drone//2022-03-07/12.png)

<br/>

막대기 1개는 2차원에서 잘 작동하지만 이를 3차원으로 확장시키기 위하여 막대기를 2대를 이용한다 <br/>

![img](/assets/img/drone//2022-03-07/13.png)

<br/>

## 드론의 Yaw 동작

![img](/assets/img/drone//2022-03-07/13.png)

<br/>

기본 생김새는 이렇다. <br/>
각 프로펠러의 `회전 방향`이 서로 막대기 두개를 겹쳐서 X 자 프레임을 만든다 <br/>

![img](/assets/img/drone//2022-03-07/14.png)

<br/>

이 때 대각선에 있는 초록색의 힘을 크게하고, 빨간색을 작게하면? <br/>
위쪽 방향으로의 Total force=gravity force와 같게 되어 호버링 한다 <br/>
하지만 수평 방향으로는 녹색의 힘이 더 크기 때문에 yaw 각도로 운동한다<br/>

![img](/assets/img/drone//2022-03-07/15.png)

<br/>

## 드론의 Roll

왼쪽 두개의 프로펠러의 방향을 같게하고 힘을 키운다 <br/>
이 때 나머지 프로펠러는 방향을 반대, 힘을 줄인다 <br/>
이도 마찬가지로 토크가 발생하여 roll 각도로 운동한다 <br/>

![img](/assets/img/drone//2022-03-07/16.png)

<br/>

## 드론의 Pitch

앞쪽 두개의 프로펠러의 방향을 같게하고 힘을 키운다 <br/>
이 때 나머지 프로펠러는 방향을 반대, 힘을 줄인다 <br/>
이도 마찬가지로 토크가 발생하여 pitch 각도로 운동한다 <br/>

![img](/assets/img/drone//2022-03-07/18.png)

<br/>

이 때 Roll과 Pitch는 Yaw와는 `독립적인` 동작을 한다 <br/>
왜냐하면 사진에서 보이듯이 Yaw torque들이 서로 반대방향으로 만들어져 상쇄되기 때문 <br/>

![img](/assets/img/drone//2022-03-07/19.png)

<br/>

## 드론의 상승

드론이 상승하려면 어떻게 해야할까? <br/>
드론의 총 무게를 들어올리는 추력(`Thrust`) 이상을 내면 된다 <br/>

<br/>

말이 좀 공학스럽지 못한데, Force of gravity 보다 큰 Thrust force가 작용하면 드론은 상승하게된다 <br/>

이는 각 모터가 그 추력의 1/4의 힘만 내면 된다는 것을 의미!! <br/>

![img](/assets/img/drone//2022-03-07/20.png)

<br/>

## Motor Mixing Algorithm

![img](/assets/img/drone//2022-03-07/21.png)

<br/>

하지만 생각해보자... <br/>
드론이 roll, pitch 운동을 할 때는 각도가 기울어져서 직전 상태가 호버링 상태였다면 추락하게 된다 <br/>

![img](/assets/img/drone//2022-03-07/22.png) 

<br/>

따라서 드론이 roll, pitch 성분으로 운동할 때는 그에 해당하는 추력이 더 필요하게 된다 <br/>

![img](/assets/img/drone//2022-03-07/22.png)