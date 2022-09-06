---
title: "[C++] std::vector을 cv::Mat로 변환하기"

category: cpp_useful
tags: [c++, cpp, vector, STL, opencv, mat, cv, algorithm]
---

C++에서 std::vector 자료형을 cv::Mat 자료형으로 변환해보자! <br/>

## 개요

코딩을 하다 보면 1차원 배열 혹은 2차원 배열에서 **cv::Mat**으로 변환해야하는 일이 생긴다. <br/>

그래서 다음과 같은 순서로 변환을 진행해본다. <br/>

1. 2차원 vector를 1차원 vector 으로 변환 (flatten)
2. 1차원 vector를 cv::Mat 으로 변환

## 2차원 vector를 1차원 vector으로

이 부분은 [이전 포스팅](https://bigbigpark.github.io/cpp_useful/vector_flatten/)에서 한번 다룬 적이 있지만 다시 적는다. <br/>

flatten이라는 **납작하게 하다**라는 뜻을 가진 함수를 하나 만들어 준다. <br/>
이 함수의 기능은 이름에서 알다시피 2차원을 1차원으로 만들어주는 녀석일 것이다. <br/>

### Sample Code

~~~c++
std::vector<u_int8_t> flatten(const std::vector<std::vector<u_int8_t>>& array)
{
  std::vector<u_int8_t> flattened_array;

  for (auto& element: array)
  {
    flattened_array.insert(flattened_array.end(), element.begin(), element.end());
  }
  return flattened_array;
}

// 사용하는 곳에서
auto array_1d = flatten(array_2d);
~~~

여기서 STL인 std::vector에 관해 자세하게 다루진 않겠다. <br/>
코드를 보고 이해하면 완벽하지만 이해가 잘 되지 않으면, 2차원을 1차원으로 바꿔주는 정도로 해석할 수 있다. <br/>
참고로 이 코드는 **row-major** 방식으로 동작한다.<br/>
**row-major** 방식이란 **행 우선**이라는 뜻으로 2차원 배열에서 행 단위로 잘라서 1차원 배열에 넣는 것이라 생각하면 된다.

<br/>

따라서 위와 같은 **flatten**이라는 함수를 하나 선언해주고 사용하는 곳에서 2차원 vector를 입력으로 넣으면 1차원 배열을 얻을 수 있다. <br/>

## 1차원 vector를 cv::Mat 으로 변환

이거는 엄청 쉽다.. 이게.. **OpenCV** ?? <br/>
우선 array_2d가 **nxn**처럼 가로와 세로가 같다고 가정할 때, 그 크기를 기입해줘야 한다.


### 변환 코드 및 cv::imshow() 출력하기

~~~c++
// 위에서 받은 array_1d를 이용하여

cv::Mat mat(array_2d.size(), array_2d.size(), CV_8U, array_1d.data());
std::string title_name = "std::vector to cv::Mat";
cv::namedWindow(title_name, cv::WINDOW_AUTOSIZE);
cv::imshow(title_name, mat);
cv::waitKey(5);
~~~

CV_8U는 Unsigned 8 bit를 뜻하는데, 다른 자료형이 궁금하면 구글링을 해보자. <br/>
만약에 이 수치를 변화시키고 싶다면 flatten 함수 안에 input/output 인자의 반환 타입도 변경해야 할 것이다.<br/>