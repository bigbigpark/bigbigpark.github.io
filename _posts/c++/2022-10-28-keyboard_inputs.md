---
title: "[C++] 키보드 입력 바로 수신(엔터키 X)"
category: cpp_useful
tags: [c++, cpp, keyboard, ascii, input, delay, conio, console, linux]
---

리눅스에서 키보드 입력을 즉각즉각 수신해보자 <br/>

Windows 환경에서는 `#include <conio.h>`를 하여 `_getch()`나 `_kbhit()`을 바로 활용할 수 있는데, <br/>
리눅스 환경에서는 불가능하다 ㅠㅠ ! 그래도 방법은 있으니 걱정 노노 <br/>


## 개요

`std::cin`이나 `getline`을 사용할 때 엔터키를 반드시 눌러줘야 입력으로 받을 수 있다 <br/>
하지만 게임에서 캐릭터 방향키처럼 누름과 동시에 값을 받도록 할 수가 있는데 방법을 한번 알아보자 <br/>

### 1. 헤더파일 및 함수 정의

리눅스 환경에서 키보드 입력을 받기 위해 아래 헤더 파일 및 함수를 하나 정의해주자 <br/>

~~~c++
#include <stdio.h>
#include <termio.h>
int getch(void)
{
  int ch;
  struct termios buf, save;
  tcgetattr(0,&save);
  buf = save;
  buf.c_lflag &= ~(ICANON|ECHO);
  buf.c_cc[VMIN] = 1;
  buf.c_cc[VTIME] = 0;
  tcsetattr(0, TCSAFLUSH, &buf);
  ch = getchar();
  tcsetattr(0, TCSAFLUSH, &save);
  return ch;
}
~~~

## 2. main 문에서 잘 쓰기s

~~~c++
#include <conio.h>

int main()
{
  int input;

  while (1)
  {
    input = getch();
    std::cout << input << std::endl;
  }

  return 0;
}
~~~