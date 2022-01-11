# How to install opencv 3.4.5 on Ubuntu 20.04

<br/>
OS: Ubuntu 20.04 Focal
Package: OpenCV 3.4.5
<br/>

## 1. 미리 설치된 OpenCV 버전 삭제

두번째 명령어 실행시 관련된 다른 패키지도영향을 받을 수 있음
<br/>
i.e. nvidia graphic driver

~~~bash
$ sudo apt purge libopencv* python3-opencv
$ sudo apt autoremove -y
~~~

<br/>

## 2. 부가 패키지 설치

블로그 참조: https://wth-mongdol.tistory.com/m/223

~~~bash
# 빌드, 소스 관련
$ sudo apt install -y build-essential cmake pkg-config git

# 이미지 관련
$ sudo apt install -y libjpeg-dev libtiff5-dev libpng-dev libjasper-dev

# 동영상 및 카메라 관련 
$ sudo apt install -y libavcodec-dev libavformat-dev libswscale-dev libdc1394-22-dev libxvidcore-dev libx264-dev libxine2-dev libv4l-dev v4l-utils libgstreamer1.0-dev libgstreamer-plugins-base1.0-dev

# GUI, qt, 최적화, python3 관련
$ sudo apt install -y libgtk-3-dev libatlas-base-dev libeigen3-dev gfortran
$ sudo apt install -y python3-dev python3-numpy libtbb2 libtbb-dev
~~~

<br/>

## 3. OpenCV 3.4.5 설치

opencv-x.x.x: 기본 소스 코드

opencv_contrib-x.x.x: 추가 기능 코드(Extra Module, 알고리즘, 테스트 중인 신기능 포함)

~~~bash
$ wget -O opencv-3.4.5.zip https://github.com/opencv/opencv/archive/3.4.5.zip
$ wget -O opencv_contrib-3.4.5.zip https://github.com/opencv/opencv_contrib/archive/3.4.5.zip
~~~

압축 풀기

~~~bash
$ unzip opencv-3.4.5.zip
$ unzip opencv_contrib-3.4.5.zip
~~~

빌드 준비

~~~bash
 $ cd opencv-3.4.5
 $ mkdir build
 $ cd build
~~~

빌드

~~~bash
$ cmake \ -D CMAKE_BUILD_TYPE=RELEASE \ -D CMAKE_INSTALL_PREFIX=/usr/local \ -D WITH_TBB=OFF \ -D WITH_IPP=OFF \ -D WITH_1394=OFF \ -D BUILD_WITH_DEBUG_INFO=OFF \ -D BUILD_DOCS=OFF \ -D INSTALL_C_EXAMPLES=ON \ -D INSTALL_PYTHON_EXAMPLES=ON \ -D BUILD_EXAMPLES=OFF \ -D BUILD_TESTS=OFF \ -D BUILD_PERF_TESTS=OFF \ -D WITH_QT=ON \ -D WITH_GTK=OFF \ -D WITH_OPENGL=ON \ -D OPENCV_EXTRA_MODULES_PATH=../../opencv_contrib-3.4.5/modules \ -D WITH_V4L=ON \ -D WITH_FFMPEG=ON \ -D WITH_XINE=ON \ -D BUILD_NEW_PYTHON_SUPPORT=ON \ -D OPENCV_GENERATE_PKGCONFIG=ON ../
~~~

make

~~~bash
# 코어 개수 확인
$ nproc 
$ make -j16

# 이제 설치를 해줍니다. 
$ sudo make install 
~~~

<br/>

## 3. 버전 확인

~~~bash
$ pkg-config --modversion opencv
~~~

