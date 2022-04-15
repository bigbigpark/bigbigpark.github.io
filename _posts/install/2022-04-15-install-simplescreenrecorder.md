---
title: "[리눅스] 우분투 화면녹화 simplescreen recorder로 해결!"

toc: true
toc_sticky: true
category: install
tags: [install, simplescreenrecorder, capture]
---

우분투, 리눅스 환경에서 화면 녹화하는 방법을 알아보자 <br/>

`화면 녹화`에는 여러가지 툴이 있지만<br/>
통상적으로 많이 사용하는 **simplescreen recorder** 설치 방법을 정리한다 <br/>

<br/>

## 설치

아래 명령어를 터미널에 입력한다<br/>

~~~bash
$ sudo apt install simplescreenrecorder
~~~

## 실행

아래 두가지 방법 중 편한 방법으로 실행하면 된다 <br/>

- 터미널 창에 **simplecreenrecorder** 입력하기
~~~bash
$ simplescreenrecorder
~~~
- 윈도우 누르고 simplescreenrecorder 검색해서 실행하기
![](/assets/img/install/2022-04-15/01.png)

<br/>

## 프로그램 사용방법

### 첫 화면

처음 실행했을 때 화면이다 <br/>
다음 단계를 위해 **Continue**를 눌러주자 <br/>

![](/assets/img/install/2022-04-15/02.png)

### Video input/ Audio input

다음 페이지를 보면 `Video input`과 `Audio input`이 나눠져 있다 <br/>

Video input에서는 (모니터가 여러대일 경우) 녹화할 모니터를 선택할 수 있고, <br/>
전체화면, 고정된 사각형(조절 가능) 혹은 마우스 커서를 따라 녹화를 할지 설정 가능하다 <br/>
바로 밑에 있는 **Frame rate**은 동영상 프레임을 뜻한다 <br/>
이 값이 높을수록 영상이 부드럽지만 용량이 큰 동영상이 녹화될 수 있다 <br/>
경우에 따라서 오디오를 녹화하지 않을 수도 있다 <br/>

![](/assets/img/install/2022-04-15/03.png)

### 녹화 경로 지정

녹화할 파일을 저장할 경로를 지정하는 부분이다 <br/>
컨테이너는 **MP4**로 해준다, 일반적인 동영상 포맷의 확장자다!<br/>
아래쪽 **Codec** 부분이 좀 중요한데.. **H.264**를 통상적으로 많이 사용한다 <br/>
이 코덱 부분을 잘못 건드리게 되면 동영상이 재생이 안 되거나 powerpoint에 삽입도 안 되는 불상사가 생기니 유의해서 설정하자 <br/>

![](/assets/img/install/2022-04-15/04.png)

### 녹화 시작

맨 위쪽에 `Start recording`을 누르면 녹화가 시작된다 <br/>
이렇게 버튼을 눌러도 되고 **hotkey(단축키)**를 설정하여 녹화하여도 된다 <br/>
나는 **Ctrl+Shift+R**을 단축키로 설정하여서 녹화를 하는 편이다 <br/>
한번 누르면 녹화가 시작되고, 한번더 누르면 녹화가 중단된다 <br/>

<br/>

**[중요]** 이 때 녹화는 중단되는 것이지, 저장되는 것이 아니다 !!<br/>
따라서 다시 돌아와서 `Save recording`을 눌러줘야 저장이 완료된다 <br/>

![](/assets/img/install/2022-04-15/05.png)

### 결과 확인

경로에 가서 무사히 녹화되었는지 확인한다 <br/>

![](/assets/img/install/2022-04-15/06.png)

<br/>

이상 Simplescreen recorder의 설치 방법 및 사용 방법을 알아보았다 <br/>