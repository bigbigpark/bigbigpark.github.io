---
title: "[linux] Little Endian, Big Endian 확인"

toc: true
toc_sticky: true
category: linux
tags: [linux, byte order, little, big, endian, 확인]
---

내 컴퓨터가 Little endian인 지, Big endian인 지 확인해보자! <br/>

## 전체 코드

가볍게 아래 소스를 컴파일&빌드 후 실행해보자 ! <br/>

~~~c++
#include <iostream>

using namespace std;

int main(int argc, char** argv)
{

  int i = 0x00000001;

  if ( ((char *)&i)[0] )
    cout << "Little" << endl;
  else
    cout << "big" << endl;

  return 0;
}
~~~


## Reference
* [Big-Endian & Little-Endian 확인용 테스트 코드](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=v_lovepooh_v&logNo=20197032346)