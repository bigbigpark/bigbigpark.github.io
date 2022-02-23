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
* 직교좌표계(Cartesian=Rectangular) w.r.t. $$ x,y,z $$ <br/>
* 원통좌표계(Cylinderical=polar) w.r.t. $$ r,\theta,z$$ <br/>
* 구형좌표계(Spherical) w.r.t. $$ r,\theta,\phi$$

<br/>

## Global & Local frame

1. Global frame
  * Earth-centered inertial frame(=inertial frame)
    * ECI frame, 지구 질량 중심이 원점 관성 공간에서 회전 X
    * 뉴턴의 법칙이 완전히 유효한 기준 좌표계, 실제로 존재 X
2. Local frame
  * Body-fixed frame = Vehicle-fixed frame

<br/>

## Wheeled Robots
* Unicycle : 한발자전거 같은 거
* Steered wheels : 
  - bicycle
  - tricycle
* `Defferential drive`
  - 대부분의 모바일 로봇은 이렇게 구성
* Omnidirectional
* Tracked locomotion
* Walking wheels

![img](/assets/img/robotics/2022-02-23-kmu_01.png)

<br/>

## Kinematics of Wheeled Vehicles

* Unicycle

![img](/assets/img/robotics/2022-02-23-kmu_04.png)

x와 y의 좌표계가 뒤집혀 있는데, 이동체가 바뀌어도 알고리즘을 바꾸지 않아도 됨 <br/>
지상 빼고는 전부 이런 형태 <br/>

`Position vector` <br/>

$$ 

\textbf{r} = x\textbf{i}+y\textbf{j}

$$ 

`Velocity vector` : 위의 위치 벡터를 편미분 하면 됨 <br/>

$$ 
\frac {d \textbf{r}}{dt} =\dot{x}+x\frac{d\textbf{i}}{dt}+\dot{y}+y\frac{d\textbf{j}}{dt} \\ = \dot{x}\textbf{i}+\dot{y}\textbf{j} 
$$

따라서 `space state term` 으로 나타내면,

$$\begin{bmatrix}
\dot x\\
\dot y\\
\dot \theta
\end{bmatrix} = \begin{bmatrix} Vcos(\theta)\\ Vsin(\theta)\\ w\end{bmatrix}
$$

<br/>

* Bicycle Model

![img](/assets/img/robotics/2022-02-23-kmu_02.png)

$$\begin{bmatrix}
\dot x\\
\dot y\\
\dot \theta
\end{bmatrix} = \begin{bmatrix} Vcos(\theta)\\ Vsin(\theta)\\ w\end{bmatrix}
$$

<br/>

$$

\begin{align}
V_f=V=V_{fx}=V-fcos(\delta) \\
V_{fy}=rl=V_fsin(\delta) \\
\therefore \frac{(2)}{(1)}=\frac{rl}{V}=\frac{V_fsin(\delta)}{V_fcos(\delta)}= tan(\delta) \\
\therefore r = \frac{V}{l}tan(\delta) \,
\end{align}
$$

<br/>

따라서 `Minimum tuning radius`,$$R_{min}=\frac{l}{tan(\delta_{max})}$$

<br/>

* Differential Drive Model

![img](/assets/img/robotics/2022-02-23-kmu_03.png)

위의 그림과 다를 수 있음 <br/>
여기서 문제를 조금 바꿔보자 <br/>
ICC(순간곡률중심)과 로봇 중심 사이를 `R`, 축간 거리를 `2a`로 notiation 해보자 <br/>

$$

V = \frac{v_L+v_R}{2}, \\ \,\\
벡터의\, 정리에 \,따르면\, \textbf{v}=\textbf{r} \times \textbf{w} \\
v_L=w(R-a) \\
v_R=w(R+a) \\
\therefore w = \frac{v_R-v_L}{2a} \\
$$

<br/>

여기서 재미난건, <br/>

$$

\begin{bmatrix}
\dot x \\ \dot y \\ \dot \theta \\
\end{bmatrix} = 
\begin{bmatrix}
vcos(\theta) \\ vsin(\theta) \\  w \\
\end{bmatrix} = 
\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
v \\ w \\
\end{bmatrix} =
\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
\frac{v_L+v_R}{2} \\ \frac{v_R-v_L}{2a} \\
\end{bmatrix} \\ =
\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} \; \frac{1}{2} \\ -\frac{1}{2a} \; \frac{1}{2a}  \\
\end{bmatrix}
\begin{bmatrix}
v_L \\ v_R \\
\end{bmatrix} \\ = 
r\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} \; \frac{1}{2} \\ -\frac{1}{2a} \; \frac{1}{2a}  \\
\end{bmatrix} 
\begin{bmatrix}
w_L \\ w_R \\
\end{bmatrix} 

$$

<br/>

자.. 우리는 `휠 엔코더`로부터 각속도 $$w_R \; w_L$$을 얻을 수 있다 <br/>
이를 통해서 어떠한 행렬을 곱하면 robot의 속도 정보인 $$ \dot{\textbf{X}} $$ 를 얻을 수 있음 <br/>
더 꿀잼인건 위의 식을 각도 측면에서 한번 바라보자!! <br/>
where, $$ \Delta t \rightarrow 0 \\ $$ 일 때가 조건임 <br/>

$$

\begin{bmatrix}
\dot x \\ \dot y \\ \dot \theta \\
\end{bmatrix} =
r\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} \; \frac{1}{2} \\ -\frac{1}{2a} \; \frac{1}{2a}  \\
\end{bmatrix} 
\begin{bmatrix}
w_L \\ w_R \\
\end{bmatrix}, \\
\begin{bmatrix}
\frac{\Delta x}{\Delta t} \\ \frac{\Delta y}{\Delta t} \\ \frac{\Delta \theta}{\Delta  t} \\
\end{bmatrix} =
r\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} \; \frac{1}{2} \\ -\frac{1}{2a} \; \frac{1}{2a}  \\
\end{bmatrix} 
\begin{bmatrix}
\frac{\Delta \theta_{L}}{\Delta t} \\ \frac{\Delta \theta_{R}}{\Delta t} \\
\end{bmatrix} \\ \,
\\ 양변을 \Delta t로 \, 곱하면? \\ \,

\\
\begin{bmatrix}
{\Delta x} \\ {\Delta y} \\ {\Delta \theta} \\
\end{bmatrix} =
r\begin{bmatrix}
cos(\theta) \\ sin(\theta) \\ 1 \\
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} \; \frac{1}{2} \\ -\frac{1}{2a} \; \frac{1}{2a}  \\
\end{bmatrix} 
\begin{bmatrix}
{\Delta \theta_{L}} \\ {\Delta \theta_{R}} \\
\end{bmatrix} 

$$

시간 변화량이 아주 작을 때, 엔코더의 미소 각도변화량으로 <br/>
3차원에서 state를 찾아가는 접근법 존재 <br/>
`Jacobian`과 연관이 있음! <br/>