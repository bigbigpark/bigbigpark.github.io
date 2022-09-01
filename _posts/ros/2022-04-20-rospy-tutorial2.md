---
title: "[ROS/Python] 간단한 Subscriber"

category: ros
tags: [ros, python, rospy, publisher, subscriber]
---

아주 간단한 ros subscriber 만들어보자!<br/>

바로 직전 포스트인 ros subscriber 이은 글이니 잘 동작하지 않으면 직전 [포스트](https://bigbigpark.github.io/ros/rospy-tutorial/)를 참고하자 <br/>

<br/>

## Simple ROS Subscriber

### 1. 폴더 생성

파일을 만들 폴더를 하나 만들고 그 경로로 이동하자 <br/>

~~~bash
$ mkdir ~/rospy_tutorial
$ cd ~/rospy_tutorial
~~~

### 2. Subscriber.py 파일 생성

Sublisher를 만들기 위하여 아래와 같이 파일을 만들어준다 <br/>

~~~bash
$ gedit sub.py
~~~

### 3. 전체적인 코드

전체적인 코드를 보고 하나하나 나눠서 보자 <br/>

In `sub.py`, <br/>

~~~bash
#! /usr/bin/env python

import rospy
from std_msgs.msg import String
  
def msg_callback(msg):
  print(msg)
  
if __name__ == '__main__':
  rospy.init_node('topic_sub_node')
  sub = rospy.Subscriber('/bigbigpark', String, msg_callback, queue_size=1)
  
  rospy.spin()
~~~

여기까지만 보고도 코드의 구조가 이해되는 사람은 바로 5번으로 넘어가자 <br/>

### 4. 코드 나눠서 보기

저 문장을 셔뱅이라고 부르는데 자세한 설명은 [여기]()를 참조하자 <br/>

~~~python
#! /usr/bin/env python
~~~

<br/>

`rospy` 라이브러리를 불러온다 <br/>
`std_msgs`라는 메세지 패키지에서 `String`이라는 헤더 파일을 불러온다 <br/>

~~~python
import rospy
from std_msgs.msg import String
~~~

<br/>

callback은 다시 부른다? 이런 뉘앙스인데 말 그대로 특정 이벤트가 들어왔을 때 호출되는 함수 정도로만 알고 있자 <br/>
함수의 뜻은 callback 함수가 호출되었을 때 수신된 메세지를 print하겠다는 뜻이다 <br/>

~~~python
def msg_callback(msg):
  print(msg)
~~~

<br/>

노드를 선언해준 후 Subscriber를 선언해준다 <br/>
안에 들어가는 인자는 아래쪽에 나와있는 순서대로 **토픽명, 타입, 콜백함수, 큐 사이즈** 이다<br/>
다시 말해서 `bigbigpark`이라는 이름의 `String` 타입의 토픽을 subscribe하겠다는 것이고, 그 때 큐 사이즈는 1로 하겠다는 뜻이다 <br/>
특히 토픽이 수신될 때마다 `msg_callback`이라는 `콜백함수`를 실행하겠다는 의미다 <br/>
이 글에서는 queue_size에 대한 자세한 내용은 다루지 않겠다 <br/>

~~~python
rospy.init_node('topic_sub_node')
sub = rospy.Subscriber('/bigbigpark', String, msg_callback, queue_size=1)
~~~

<br/>

`rospy.spin()`은 현재까지 선언된 모든 subscriber에 대한 callback 함수를 동작시키겠다는 의미다 <br/>
이 부분은 무한루프로 동작을 하니 이 선언 아래쪽에 있는 코드는 동작을 하지 않는다 <br/>

~~~python
rospy.spin()
~~~

### 5. 실행하기

파일은 저장하고 터미널 창에서 다음과 같이 실행해보자 <br/>

~~~bash
$ roscore
$ python pub.py
$ python sub.py
~~~

<br/>

### 6. 결과

성공적으로 수신됨을 확인했다 <br/>

![](/assets/img/ros/2022-04-20/02.png)