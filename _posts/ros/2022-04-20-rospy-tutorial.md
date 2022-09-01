---
title: "[ROS/Python] 간단한 Publisher"

category: ros
tags: [ros, python, rospy, publisher, subscriber]
---

아주 간단한 ros publisher를 만들어보자!<br/>

## rospy 설명

**rospy**는 다른 C++로된 패키지와는 달리 `CMakeList.txt`나 `package.xml`을 작성하지 않아도 어느 경로에서든 ROS 라이브러리를 include 할 수 있고, 사용할 수 있다 <br/>

사용하기 전에 환경변수를 설정해주자<br/>

## bash파일 수정

gedit으로 bash파일을 오픈해준다 <br/>
~~~bash
$ gedit ~/.bashrc
~~~

아래 줄을 적고 저장 후 창을 닫는다 <br/>

~~~bash
source /opt/ros/melodic/setup.bash
~~~

아래 명령어로 수정된 bash파일을 적용해준다 <br/>
~~~bash
$ source ~/.bashrc
~~~

<br/>

## Simple ROS Publisher

### 1. 폴더 생성

파일을 만들 폴더를 하나 만들고 그 경로로 이동하자 <br/>

~~~bash
$ mkdir ~/rospy_tutorial
$ cd ~/rospy_tutorial
~~~

### 2. Publisher.py 파일 생성

publisher를 만들기 위하여 아래와 같이 파일을 만들어준다 <br/>

~~~bash
$ gedit pub.py
~~~

### 3. 전체적인 코드

전체적인 코드를 보고 하나하나 나눠서 보자 <br/>

In `pub.py`, <br/>

~~~bash
#! /usr/bin/env python
import rospy
from std_msgs.msg import String

rospy.init_node('topic_pub_node')

pub = rospy.Publisher('bigbigpark', String, queue_size=1)
msg = String()
r = rospy.Rate(1)

if __name__ == '__main__':
  msg = 'Hi! My name is bigbigpark'
  
  while not rospy.is_shutdown():
    pub.publish(msg)
    r.sleep()
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

rospy에 관한 코드를 작성하기 전에 제일 먼저 수행되어야하는 `init_node`이다 <br/>
이렇게 선언하면 `topic_pub_node`라는 이름의 노드를 사용하겠다는 뜻이다 <br/>

~~~python
rospy.init_node('topic_pub_node')
~~~

<br/>

Publisher를 선언해준다 <br/>
안에 들어가는 인자는 아래쪽에 나와있는 순서대로 **토픽명, 타입, 큐 사이즈** 이다<br/>
다시 말해서 `bigbigpark`이라는 이름의 String 타입의 토픽을 publish하겠다는 것이고, 그 때 큐 사이즈는 1로 하겠다는 뜻이다 <br/>
이 글에서는 queue_size에 대한 자세한 내용은 다루지 않겠다 <br/>

~~~python
pub = rospy.Publisher('bigbigpark', String, queue_size=1)
~~~

<br/>

Publisher를 선언했으면 거기 안에 담아줄 메세지를 선언해줘야 한다 <br/>
이번 예제에서는 `String` 객체를 이용할 것이기 때문에 아래쪽과 같이 선언해준다 <br/>
참고로 String 객체에 어떤 정보가 담겨 있느냐는 [std_msgs/String Message](http://docs.ros.org/en/noetic/api/std_msgs/html/msg/String.html) 여기서도 확인할 수 있고, 터미널 창에서 `rosmsg info std_msgs/String` 으로도 확인 가능하다 <br/>
추가로 메세지 발행 주기를 설정할 수 있는데 `1 Hz`로 설정해준다

~~~python
msg = String()
r = rospy.Rate(1)
~~~

<br/>

main문은 간단하게 작성을 했고 다음과 같이 동작한다 <br/>
1. msg에 임의의 문자열을 저장 <br/>
2. msg를 publish <br/>
3. 1 Hz 마다 루프가 동작

`rospy.is_shutdown()`은 노드 내부에서 예외가 떠서 비정상적으로 종료가 되거나 사용자가 `Ctrl+C`를 눌러서 종료할 수 있음을 의미한다 <br/>

~~~python
if __name__ == '__main__':
  msg = 'Hi! My name is bigbigpark'
  
  while not rospy.is_shutdown():
    pub.publish(msg)
    r.sleep()
~~~

<br/>

### 5. 실행하기

파일은 저장하고 터미널 창에서 다음과 같이 실행해보자 <br/>

~~~bash
$ roscore
$ python pub.py
~~~

<br/>

### 6. 결과

아래 명령어로 현재 발행중인 topic을 볼 수 있다 <br/>

~~~bash
$ rostopic list
~~~

아래쪽과 같이 `/bigbigpark`이라는 토픽명이 출력된다 <br/>

~~~
/bigbigpark
/rosout
/rosout_agg
~~~

`echo`명령어로 볼 때도 잘 됨을 확인할 수 있다 <br/>

~~~bash
$ rostopic echo /bigbigpark
~~~

![](/assets/img/ros/2022-04-20/01.png)