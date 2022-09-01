---
title: "[C++] 터미널에 컬러로 출력해보자"

category: cpp_useful
tags: [c++, print, color]
---

리눅스 터미널에 칼라로 출력해보자!<br/>

## Main code

아래와 같이 코딩을 해보자 <br/>

~~~c++
// test.cpp
#include <iostream>

int main(int argc, char** argv)
{
  std::cout << "A B C D E F G" << std::endl;
  std::cout << "가 나 다라 마 바 사" << std::endl;
  std::cout << "1 2 3 4 5 6 7" << std::endl;
  return 0;
}
~~~

### 컴파일

~~~bash
$ g++ -o test test.cpp
~~~

### 실행

~~~bash
$ ./test
~~~

### 결과

![](/assets//img/cpp/2022-05-15/01.png)

<br/>

여기서 칼라로 출력해보자! <br/>
하는 방법은 간단하다 <br/>

## 컬러로 출력하기

공통된 문장을 볼 수 있는데, <br/>
차이점은 봐서 알겠지만 30에서 37까지 숫자마다 컬러가 매핑되어 있다 <br/>
따라서 사용하고 싶은 색상을 사용하면 된다 <br/>


### 소스코드 

~~~c++
#include <iostream>

int main(int argc, char** argv)
{
  std::cout << "\033[1;30m" << "black " << "\033[0m" << std::endl;
  std::cout << "\033[1;31m" << "red " << "\033[0m" << std::endl;
  std::cout << "\033[1;32m" << "green " << "\033[0m" << std::endl;
  std::cout << "\033[1;33m" << "yellow " << "\033[0m" << std::endl;
  std::cout << "\033[1;34m" << "blue " << "\033[0m" << std::endl;
  std::cout << "\033[1;35m" << "magenta " << "\033[0m" << std::endl;
  std::cout << "\033[1;36m" << "cyan " << "\033[0m" << std::endl;
  std::cout << "\033[1;37m" << "white " << "\033[0m" << std::endl;

  return 0;
}
~~~

### 결과

![](/assets//img/cpp/2022-05-15/02.png)

<br/>

### 컬러 배치표

컬러 배치표는 아래 사진을 참고하자 <br/>

![](/assets//img/cpp/2022-05-15/03.png)
