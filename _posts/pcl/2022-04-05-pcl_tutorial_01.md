---
title: "[#01] PCD 파일 포맷 이해하기"

category: pcl
tags: [pcl, point cloud, PCL, 포인트 클라우드, PCD, 개념, 정의]
---

포인트 클라우드 파일 포맷에 대해 알아보자 !

<br/>

## 왜 New file format이 필요한가?

n-D 포인트 클라우드의 처리를 할 수 있는 PCL 라이브러리 일부 extension을 지원 X

**PCD**는 3D point cloud의 제일 **첫 번째 파일 형식이 아님**!!!

<br/>

Computer graphics나 Computational geometry에서 많은 포맷들을 만듦

- [PLY](http://en.wikipedia.org/wiki/PLY_(file_format)) - a polygon file format, developed at Stanford University by Turk et al
- [STL](http://en.wikipedia.org/wiki/STL_(file_format)) - a file format native to the stereolithography CAD software created by 3D Systems
- [OBJ](http://en.wikipedia.org/wiki/Wavefront_.obj_file) - a geometry definition file format first developed by Wavefront Technologies
- [X3D](http://en.wikipedia.org/wiki/X3D) - the ISO standard XML-based file format for representing 3D computer graphics data

<br/>

## PCD Version

The official entry point for the PCD file format in PCL however should be version **0.7 (PCD_V7)**.

<br/>

## File Format Header

모든 PCD 파일은 그 안에 저장된 포인트 클라우드에 대한 특정 properties를 명시하고 선언하는 **header**를 포함하고 있음!!

PCD의 헤더는 반드시 **ASCII**로 인코딩 되어있어야 함

<br/>

* **VERSION** - PCD 파일의 버전

* **FIELDS** - 한 포인트가 가질 수 있는 dimension이나 field의 이름을 명시

  ~~~bash
  FIELDS x y z                                # XYZ data
  FIELDS x y z rgb                            # XYZ + colors
  FIELDS x y z normal_x normal_y normal_z     # XYZ + surface normals
  FIELDS j1 j2 j3                             # moment invariants
  ...
  ~~~

* **SIZE** - 각 dimension의 크기를 바이트 단위로 명시

  ~~~c++
  unsigned char/char has 1 byte
  unsigned short/short has 2 bytes
  unsigned int/int/float has 4 bytes
  double has 8 bytes
  ~~~

* **TYPE** - 각 dimension의 타입을 char형으로 명시

  * **I** : signed types **int8**(char) **int16**(short) **int32**(int)
  * **U** : unsigned types **uint8**(unsigned char) **uint16**(unsigned short) **uint32**(unsigned int)
  * **F** : float types

* **COUNT** : 각 demension이 얼마나 많은 element를 갖고 있는가

  * 예를 들어 x data는 보통 1 element이지만 하나의 featrue descriptor(VFH 같은)는 308임
  * 기본적으로 각 포인트에 대해 n-D histogram descriptor를 도입하는 방법이고, 단일 연속 메모리 블록에서 처리하는 방식임
  * 만약 COUNT가 존재하지 않으면 디폴트는 1

* **WIDTH** : 포인트 클라우드 안에 포인트 개수인데 2가지 의미가 있음

  * unorganized datasets에 대한 total point 개수
  * organized datasets에 대한 한 row당 point 개수 

  ~~~bash
  WIDTH 640     # there are 640 points per line
  ~~~

* **HEIGHT** : 포인트 클라우드 안의 포인트의 height를 명시하는데 2가지 의미가 있음

  * unorganized dataset은 **1**로 set 됨[따라서 보통 이 값을 갖고 **unorganized**인지 아닌지 판단]
  * organized dataset은 row의 개수를 저장

  ~~~bash
  WIDTH 640       # Image-like organized structure, with 480 rows and 640 columns,
  HEIGHT 480      # thus 640*480=307200 points total in the dataset
  ~~~

  ~~~bash
  WIDTH 307200
  HEIGHT 1        # unorganized point cloud dataset with 307200 points
  ~~~

* **VIEWPOINT** : 데이터셋의 포인트들의 **viewpoint**를 얻음

  * 이 프로퍼티는 나중에 다른 coordinates 사이에 **transform**을 할 때 이용되거나
  * **Surface normal**이나 **consistent orientation**을 구할 때 이용됨
  * [구조] : translation(tx ty tz) + quaternion(qw qx qy qz)

  ~~~bash
  VIEWPOINT 0 0 0 1 0 0 0
  ~~~

* **POINTS** : 포인트 클라우드 안에 있는 포인트 total 개수

  * 0.7 version부터는 bit redundant때문에 사용
  * 미래 버전에는 제거될 예정

  ~~~bash
  POINTS 307200   # the total number of points in the cloud
  ~~~

* **DATA** : 포인트 클라우드 데이터가 저장되어있는 데이터 타입을 명시

  * 0.7 version에는 3가지 data type을 지원 [**ascii**, **binary**, **binary_compressed**]

<br/>

## Organized point cloud

말 그대로 정렬된 포인트 클라우드

이미지나 행렬 같이 row와 column으로 쪼갤 수 있는 녀석들을 organized point cloud라고 부름

주로 **stereo camera나 TOF camera 데이터**

<br/>

### [장점]

adjacent points들 사이의 관계를 알고 있음(e.g. pixels)

따라서 nearest neighbor 찾을 때 엄청 efficient하고, 비용이 적게 든다

<br/>

--- 여기까지가 PCD파일의 Header에 관한 정리!

따라서 Header entries는 반드시 **위의 순서**로 **정확하게** 명시되어야함!!!! 

~~~bash
VERSION
FIELDS
SIZE
TYPE
COUNT
WIDTH
HEIGHT
VIEWPOINT
POINTS
DATA
~~~

<br/>

## Data storage types

0.7 버전에서 **.pcd** file은 데이터 저장할 때 **3가지 모드**를 이용

### ascii

~~~bash
p_1
p_2
p_3
p_4
...

p_n
~~~

<br/>

### binary

**pcl::PointCloud.points array/vector**의 complete memory copy에 저장됨

Linux 시스템에서는 **mmap/munmap** operation으로 제일 빠르게 read/write access 가능

<br/>

### binary_compressed

정리 안함...

<br/>

## PCD 파일이 다른 파일 포맷보다 좋은점

다른 파일 포맷은 PCL에서 만든 함수를 못 쓰는 불상사가....ㅠㅠ

PCD 파일은 flexbility 와 speed가 좋음

<br/>

organized 포인트 클라우드를 store하고 process 하는 능력이 좋음

real time applications나 augmented reality나 robotics에서 극도로 중요함

<br/>

binary mmap/munmap 데이터 타입은 디스크에 데이터를 loading하고 saving하는데 가장 빠른 방법임

<br/>

포인트 클라우드 안에 모든 primitives를 지원(char, short, int, float, double)

strorage와 processing 측면에서 매우 유연하고 효율적이다

Invalid point dimensions은 보통 NaN 타입으로 저장됨

<br/>

feature descriptor를 위한 n-D histogram - 3D 인지/ 컴퓨터 비전에서 매우 중요

<br/>

그냥 있는 PCL 잘 쓰자!!

<br/>

## Example

~~~yaml
# .PCD v.7 - Point Cloud Data file format
VERSION .7
FIELDS x y z rgb
SIZE 4 4 4 4
TYPE F F F F
COUNT 1 1 1 1
WIDTH 213
HEIGHT 1
VIEWPOINT 0 0 0 1 0 0 0
POINTS 213
DATA ascii
0.93773 0.33763 0 4.2108e+06
0.90805 0.35641 0 4.2108e+06
0.81915 0.32 0 4.2108e+06
0.97192 0.278 0 4.2108e+06
0.944 0.29474 0 4.2108e+06
0.98111 0.24247 0 4.2108e+06
0.93655 0.26143 0 4.2108e+06
0.91631 0.27442 0 4.2108e+06
0.81921 0.29315 0 4.2108e+06
0.90701 0.24109 0 4.2108e+06
0.83239 0.23398 0 4.2108e+06
0.99185 0.2116 0 4.2108e+06
0.89264 0.21174 0 4.2108e+06
0.85082 0.21212 0 4.2108e+06
0.81044 0.32222 0 4.2108e+06
0.74459 0.32192 0 4.2108e+06
0.69927 0.32278 0 4.2108e+06
0.8102 0.29315 0 4.2108e+06
0.75504 0.29765 0 4.2108e+06
0.8102 0.24399 0 4.2108e+06
0.74995 0.24723 0 4.2108e+06
0.68049 0.29768 0 4.2108e+06
0.66509 0.29002 0 4.2108e+06
0.69441 0.2526 0 4.2108e+06
0.62807 0.22187 0 4.2108e+06
0.58706 0.32199 0 4.2108e+06
0.52125 0.31955 0 4.2108e+06
0.49351 0.32282 0 4.2108e+06
0.44313 0.32169 0 4.2108e+06
0.58678 0.2929 0 4.2108e+06
0.53436 0.29164 0 4.2108e+06
0.59308 0.24134 0 4.2108e+06
0.5357 0.2444 0 4.2108e+06
0.50043 0.31235 0 4.2108e+06
0.44107 0.29711 0 4.2108e+06
0.50727 0.22193 0 4.2108e+06
0.43957 0.23976 0 4.2108e+06
0.8105 0.21112 0 4.2108e+06
0.73555 0.2114 0 4.2108e+06
0.69907 0.21082 0 4.2108e+06
0.63327 0.21154 0 4.2108e+06
0.59165 0.21201 0 4.2108e+06
0.52477 0.21491 0 4.2108e+06
0.49375 0.21006 0 4.2108e+06
0.4384 0.19632 0 4.2108e+06
0.43425 0.16052 0 4.2108e+06
0.3787 0.32173 0 4.2108e+06
0.33444 0.3216 0 4.2108e+06
0.23815 0.32199 0 4.808e+06
0.3788 0.29315 0 4.2108e+06
0.33058 0.31073 0 4.2108e+06
0.3788 0.24399 0 4.2108e+06
0.30249 0.29189 0 4.2108e+06
0.23492 0.29446 0 4.808e+06
0.29465 0.24399 0 4.2108e+06
0.23514 0.24172 0 4.808e+06
0.18836 0.32277 0 4.808e+06
0.15992 0.32176 0 4.808e+06
0.08642 0.32181 0 4.808e+06
0.039994 0.32283 0 4.808e+06
0.20039 0.31211 0 4.808e+06
0.1417 0.29506 0 4.808e+06
0.20921 0.22332 0 4.808e+06
0.13884 0.24227 0 4.808e+06
0.085123 0.29441 0 4.808e+06
0.048446 0.31279 0 4.808e+06
0.086957 0.24399 0 4.808e+06
0.3788 0.21189 0 4.2108e+06
0.29465 0.19323 0 4.2108e+06
0.23755 0.19348 0 4.808e+06
0.29463 0.16054 0 4.2108e+06
0.23776 0.16054 0 4.808e+06
0.19016 0.21038 0 4.808e+06
0.15704 0.21245 0 4.808e+06
0.08678 0.21169 0 4.808e+06
0.012746 0.32168 0 4.808e+06
-0.075715 0.32095 0 4.808e+06
-0.10622 0.32304 0 4.808e+06
-0.16391 0.32118 0 4.808e+06
0.00088411 0.29487 0 4.808e+06
-0.057568 0.29457 0 4.808e+06
-0.0034333 0.24399 0 4.808e+06
-0.055185 0.24185 0 4.808e+06
-0.10983 0.31352 0 4.808e+06
-0.15082 0.29453 0 4.808e+06
-0.11534 0.22049 0 4.808e+06
-0.15155 0.24381 0 4.808e+06
-0.1912 0.32173 0 4.808e+06
-0.281 0.3185 0 4.808e+06
-0.30791 0.32307 0 4.808e+06
-0.33854 0.32148 0 4.808e+06
-0.21248 0.29805 0 4.808e+06
-0.26372 0.29905 0 4.808e+06
-0.22562 0.24399 0 4.808e+06
-0.25035 0.2371 0 4.808e+06
-0.29941 0.31191 0 4.808e+06
-0.35845 0.2954 0 4.808e+06
-0.29231 0.22236 0 4.808e+06
-0.36101 0.24172 0 4.808e+06
-0.0034393 0.21129 0 4.808e+06
-0.07306 0.21304 0 4.808e+06
-0.10579 0.2099 0 4.808e+06
-0.13642 0.21411 0 4.808e+06
-0.22562 0.19323 0 4.808e+06
-0.24439 0.19799 0 4.808e+06
-0.22591 0.16041 0 4.808e+06
-0.23466 0.16082 0 4.808e+06
-0.3077 0.20998 0 4.808e+06
-0.3413 0.21239 0 4.808e+06
-0.40551 0.32178 0 4.2108e+06
-0.50568 0.3218 0 4.2108e+06
-0.41732 0.30844 0 4.2108e+06
-0.44237 0.28859 0 4.2108e+06
-0.41591 0.22004 0 4.2108e+06
-0.44803 0.24236 0 4.2108e+06
-0.50623 0.29315 0 4.2108e+06
-0.50916 0.24296 0 4.2108e+06
-0.57019 0.22334 0 4.2108e+06
-0.59611 0.32199 0 4.2108e+06
-0.65104 0.32199 0 4.2108e+06
-0.72566 0.32129 0 4.2108e+06
-0.75538 0.32301 0 4.2108e+06
-0.59653 0.29315 0 4.2108e+06
-0.65063 0.29315 0 4.2108e+06
-0.59478 0.24245 0 4.2108e+06
-0.65063 0.24399 0 4.2108e+06
-0.70618 0.29525 0 4.2108e+06
-0.76203 0.31284 0 4.2108e+06
-0.70302 0.24183 0 4.2108e+06
-0.77062 0.22133 0 4.2108e+06
-0.41545 0.21099 0 4.2108e+06
-0.45004 0.19812 0 4.2108e+06
-0.4475 0.1673 0 4.2108e+06
-0.52031 0.21236 0 4.2108e+06
-0.55182 0.21045 0 4.2108e+06
-0.5965 0.21131 0 4.2108e+06
-0.65064 0.2113 0 4.2108e+06
-0.72216 0.21286 0 4.2108e+06
-0.7556 0.20987 0 4.2108e+06
-0.78343 0.31973 0 4.2108e+06
-0.87572 0.32111 0 4.2108e+06
-0.90519 0.32263 0 4.2108e+06
-0.95526 0.34127 0 4.2108e+06
-0.79774 0.29271 0 4.2108e+06
-0.85618 0.29497 0 4.2108e+06
-0.79975 0.24326 0 4.2108e+06
-0.8521 0.24246 0 4.2108e+06
-0.91157 0.31224 0 4.2108e+06
-0.95031 0.29572 0 4.2108e+06
-0.92223 0.2213 0 4.2108e+06
-0.94979 0.24354 0 4.2108e+06
-0.78641 0.21505 0 4.2108e+06
-0.87094 0.21237 0 4.2108e+06
-0.90637 0.20934 0 4.2108e+06
-0.93777 0.21481 0 4.2108e+06
0.22244 -0.0296 0 4.808e+06
0.2704 -0.078167 0 4.808e+06
0.24416 -0.056883 0 4.808e+06
0.27311 -0.10653 0 4.808e+06
0.26172 -0.10653 0 4.808e+06
0.2704 -0.1349 0 4.808e+06
0.24428 -0.15599 0 4.808e+06
0.19017 -0.025297 0 4.808e+06
0.14248 -0.02428 0 4.808e+06
0.19815 -0.037432 0 4.808e+06
0.14248 -0.03515 0 4.808e+06
0.093313 -0.02428 0 4.808e+06
0.044144 -0.02428 0 4.808e+06
0.093313 -0.03515 0 4.808e+06
0.044144 -0.03515 0 4.808e+06
0.21156 -0.17357 0 4.808e+06
0.029114 -0.12594 0 4.2108e+06
0.036583 -0.15619 0 4.2108e+06
0.22446 -0.20514 0 4.808e+06
0.2208 -0.2369 0 4.808e+06
0.2129 -0.208 0 4.808e+06
0.19316 -0.25672 0 4.808e+06
0.14497 -0.27484 0 4.808e+06
0.030167 -0.18748 0 4.2108e+06
0.1021 -0.27453 0 4.808e+06
0.1689 -0.2831 0 4.808e+06
0.13875 -0.28647 0 4.808e+06
0.086993 -0.29568 0 4.808e+06
0.044924 -0.3154 0 4.808e+06
-0.0066125 -0.02428 0 4.808e+06
-0.057362 -0.02428 0 4.808e+06
-0.0066125 -0.03515 0 4.808e+06
-0.057362 -0.03515 0 4.808e+06
-0.10653 -0.02428 0 4.808e+06
-0.15266 -0.025282 0 4.808e+06
-0.10653 -0.03515 0 4.808e+06
-0.16036 -0.037257 0 4.808e+06
0.0083286 -0.1259 0 4.2108e+06
0.0007442 -0.15603 0 4.2108e+06
-0.1741 -0.17381 0 4.808e+06
-0.18502 -0.02954 0 4.808e+06
-0.20707 -0.056403 0 4.808e+06
-0.23348 -0.07764 0 4.808e+06
-0.2244 -0.10653 0 4.808e+06
-0.23604 -0.10652 0 4.808e+06
-0.20734 -0.15641 0 4.808e+06
-0.23348 -0.13542 0 4.808e+06
0.0061083 -0.18729 0 4.2108e+06
-0.066235 -0.27472 0 4.808e+06
-0.17577 -0.20789 0 4.808e+06
-0.10861 -0.27494 0 4.808e+06
-0.15584 -0.25716 0 4.808e+06
-0.0075775 -0.31546 0 4.808e+06
-0.050817 -0.29595 0 4.808e+06
-0.10306 -0.28653 0 4.808e+06
-0.1319 -0.2831 0 4.808e+06
-0.18716 -0.20571 0 4.808e+06
-0.18369 -0.23729 0 4.808e+06
~~~

## Reference
* [Point Cloud Library](https://pcl.readthedocs.io/projects/tutorials/en/master/index.html#)