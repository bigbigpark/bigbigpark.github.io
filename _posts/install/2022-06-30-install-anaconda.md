---
title: "[Install] Anaconda on Ubuntu 18.04"

category: install
tags: [install, anaconda, deeplearning, pytorch, torchvision]
---

우분투 18.04에 아나콘다를 설치해보자! <br/>

## 아나콘다란?

이번에 찾아보면서 좀 알게 되었다 <br/>
파이썬 기반의 데이터 과학 및 머신러닝 플랫폼이다 <br/>
주로 대규모 데이터 처리, 예측 분석 및 과학 컴퓨팅에 사용되는 있기있는 플랫폼 중 하나! <br/>

1,000개 이상의 데이터 패키지, 콘다 명령줄 도구 및 아나콘다 네비게이터라는 데스크톱 GUI가 함께 제공된다<br/>

<br/>

거두절미하고.. 그냥 설치에 바로 가자

<br/>

## 설치하기

아래 명령어를 입력하게 되면 현재 경로를 시준으로 다운로드가 된다 <br/>
아나콘다 버전을 다르게 설치하고 싶으면 [아나콘다](https://www.anaconda.com/products/distribution) 여기를 참조해주자! <br/>
하지만 `conda update conda`도 있으니 참고하자 <br/>

~~~bash
$ curl -O https://repo.anaconda.com/archive/Anaconda3-5.2.0-Linux-x86_64.sh
~~~

<br/>


## 설치 스크립트 실행

아래 명령어를 입력하면 `Enter`랑 `Yes`를 치라는 안내 문구가 나오는데 <br/>
경로를 바꾸고 싶지 않고 원래 제공하는 default값으로 설치하고 싶으면 죄다 해당 단어를 입력해주자! <br/>

~~~bash
$ bash https://repo.anaconda.com/archive/Anaconda3-5.2.0-Linux-x86_64.sh
~~~

<br/>

## 소싱하기

설치 스크립트 끝 줄에 환경변수 파일인 `~/.bashrc` 파일에 쓸 거냐고 물어본다 <br/>
`yes`라고 눌렀다면 아래 명령어로 파일을 소싱해주자 <br/>

~~~bash
$ source ~/.bashrc
~~~

<br/>

## conda 간단한 명령어 정리

* `conda info` : 현재 콘다 설치 유형에 대한 정보 표기
* `conda update conda` : 콘다 도구를 업데이트
* `conda update anaconda` : 위의 `conda`를 업데이트 후 실행해야 아나콘다 업데이트가 수행됨

<br/>

## 가상 환경 구축

`bigbigpark`이라는 이름의 가상환경을 가지는 python 3.6 기반 환경 구축 <br/>

* 설치 : `conda create -n bigbigpark python=3.6`
* 제거 : `conda env remove -n bigbigpark`
* 환경확인 : `conda info --envs` or `conda env list`
* 실행 : `conda activate bigbigpark`
* 종료 : `conda deactivate`

<br/>

# Reference
* [Ubuntu 18.04 : Anaconda 설치하는 방법, 예제, 명령어](https://jjeongil.tistory.com/1326)
* [우분투 18.04 아나콘다 설치 (Ubuntu 18.04 Anaconda Install) 우분투 18.04 가상환경 설정 (Ubuntu 18.04 virtual environments)](https://choice-life.tistory.com/7)