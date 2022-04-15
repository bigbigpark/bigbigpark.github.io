---
title: "[ROS/PCL] PointCloud2 샘플데이터 재생 rosbag"

toc: true
toc_sticky: true
category: ros
tags: [ros, pointcloud2, rosbag, play, rviz, sample]
---

How to visualize PointCloud2 on rviz <br/>

How to play bag file using rosbag <br/>

<br/>

rosbag 파일을 play하면서 rviz에 시각화 하는 것을 정리한다 <br/>
오늘 재생할 파일은 [ouster](https://ouster.com/)사에서 제공하는 sample data를 이용한다 <br/>

## 샘플데이터 재생하기
### 1. roscore 실행

roscore를 실행해주자 <br/>

~~~bash
$ roscore
~~~

<br/>

(사진) <br/>

![](/assets/img/ros/01.png)

### 2. rosbag 실행

다른 터미널에서 rosbag 파일을 재생해준다 <br/>
`-l` 옵션은 무한 재생하겠다는 뜻이다 <br/>

~~~bash
$ rosbag play OS1-64_city3.bag -l
~~~

<br/>

(사진) <br/>

![](/assets/img/ros/02.png)

<br/>

rviz에 띄우기에 앞서서 **2가지 확인**이 필요하다 <br/>

1. 저장된 데이터의 **토픽 이름**이 무엇인지
2. 저장된 데이터의 **frame_id**가 무엇인지

#### 토픽이름 확인

아래 명령어로 현재 ros 통신 안에 있는 토픽 이름을 모두 확인할 수 있다 <br/>
`-v` 옵션은 publisher랑 subscriber랑 분리해서 볼 수 있다 <br/>

~~~bash
$ rostopic list -v
~~~

<br/>

#### frame_id 확인

위에서 토픽 이름을 확인한 결과<br/>
저장되어 있는 라이다 데이터는 sensor_msgs/PointCloud2 형식이고, 이름은 **/os1_cloud_node/points**임을 확인할 수 있다 <br/>
따라서 아래쪽의 명령어 `echo`를 입력하게 되면 라이다 데이터를 터미널에 모두 출력하는데 이 때 `grep frame_id`라고 하면 frame_id를 포함하는 것만 출력해준다 <br/>

~~~bash
$ rostopic echo /os1_cloud_node/points | grep frame_id
~~~

<br/>

(사진) <br/>

![](/assets/img/ros/04.png)


### 3. rviz 실행

여기까지 오면 우리는 다음과 같은 정보를 얻게 된다 <br/>
frame_id = "/os1_lidar"  <br/>
topic 이름 = "/os1_cloud_node/points" <br/>

<br/>

Rviz를 실행해준다 <br/>

~~~bash
$ rviz
~~~

<br/>

![](/assets/img/ros/05.png) 

<br/>

왼쪽 아래쪽에 **Add**를 눌러서 **PointCloud2**를 선택해주고 **OK**를 누른다 <br/>

![](/assets/img/ros/06.png)

<br/>

다음 PointCloud2 토픽 이름을 아까 찾았던 **/os1_cloud_node/points**로 변경해준다 <br/>

![](/assets/img/ros/07.png)

<br/>

끝으로 맨 위의 [Global Options]-[Fixed Frame]에 아까 찾았던 **os1_lidar**를 입력해주면 아래와 같은 결과가 나온다 <br/>

![](/assets/img/ros/08.png)


