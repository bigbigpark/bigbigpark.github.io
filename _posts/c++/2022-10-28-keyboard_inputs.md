---
title: "[C++] 키보드 입력 바로 수신(엔터키 X)"
category: cpp_useful
tags: [c++, cpp, keyboard, ascii, input, delay, conio, console]
---

키보드 입력을 즉각즉각 수신해보자 <br/>

## 개요

`std::cin`이나 `getline`을 사용할 때 엔터키를 반드시 눌러줘야 입력으로 받을 수 있다 <br/>
하지만 게임에서 캐릭터 방향키처럼 누름과 동시에 값을 받도록 할 수가 있는데 방법을 한번 알아보자 <br/>

### 전체 코드

~~~c++
#include <conio.h>

int main()
{
  char ch;

  while (1)
  {
    ch = _getch(); // 입력값
    std::cout << ch << std::endl;
  }

  return 0;
}
~~~