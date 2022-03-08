---
layout: post
title: "[#02] 드론 프로그래밍 - 쿼드롭터 호버링 제어시스템"
tags: drone
---

<br/>

## MMA 알고리즘으로 드론 제어

우리는 드론에 가해지는 입력을 눈으로 보고(=visual feedback) rpyt값을 조절한다 <br/>

![img](/assets/img/drone/2022-03-08/01.png)

<br/>

이 때 Altitude방향의 `Thrust`는 Horizontal 방향과 Vertical 방향의 두 힘으로 나눠짐 <br/>
**[가정]** <br/>
altitude에는 오직 thrust만 영향을 미친다고 가정해보자 <br/>
roll & pitch는 매우 작다고 가정 <br/>

![img](/assets/img/drone/2022-03-08/02.png)

<br/>

아래와 같이 z error만으로 제어가 가능하다 <br/>
reference보다 밑에 있을 경우는 z_error > 0 이므로 드론이 상승하게 되고, 반대로 z_error < 0일 경우에는 하강하게 된다 <br/> 

![img](/assets/img/drone/2022-03-08/03.png)
![img](/assets/img/drone/2022-03-08/04.png)

이 방법의 문제점은 무엇일까?? <br/>
바람(외력)이 불어서 드론이 기울어지면 복구할 방법이 없다 <br/>
아라서 한 쪽으로 계속 가다가 추락하게 된다 <br/>

![img](/assets/img/drone/2022-03-08/05.png)

<br/>

## Roll, Pitch, Yaw, Thrust의 독립제어기 설계

Control diagram을 좀 더 자세하게 그려보자 <br/>
각 성분마다 PID 제어기를 달아줬다 <br/>

![img](/assets/img/drone/2022-03-08/06.png)

<br/>

이 때 바람이 왼쪽으로 분다면 시계방향으로 `roll` 토크를 요구할 것이다 <br/>
동시에 Thrust feedback으로 인해서 드론은 왼쪽 방향으로 이동하면서 복귀할 것이다 <br/>

<br/>

![img](/assets/img/drone/2022-03-08/07.png)

<br/>

## 드론 이중 PID 제어

x,y position이라는 개념을 들고오자<br/>
드론이 현재 $$(x,y)=(0,0)$$ 이라는 Reference를 넣어보자 <br/>
이 때 센서로부터 예측되는 $$(\hat x, \hat y)$$를 이용해 `error`를 계산한다 <br/>
이 error를 계산해 xy평면에서의 값(Translation)과 yaw의 값(Rotation)을 가지고 `이중 PID`제어기를 구성한다 <br/>


![img](/assets/img/drone/2022-03-08/08.png)