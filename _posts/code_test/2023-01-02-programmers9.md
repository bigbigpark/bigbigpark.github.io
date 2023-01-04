---
title: "[프로그래머스] 이진수 더하기 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

이진수를 의미하는 두 개의 문자열 `bin1`과 `bin2`가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- return 값은 이진수를 의미하는 문자열입니다.
- 1 ≤ `bin1`, `bin2`의 길이 ≤ 10
- `bin1`과 `bin2`는 0과 1로만 이루어져 있습니다.
- `bin1`과 `bin2`는 "0"을 제외하고 0으로 시작하지 않습니다.



## 입출력 예

| bin1   | bin2   | result  |
| ------ | ------ | ------- |
| "10"   | "11"   | "101"   |
| "1001" | "1111" | "11000" |



## 코드

~~~c++
#include <string>
#include <vector>
#include <cmath>
#include <iostream>
using namespace std;

string solution(string bin1, string bin2)
{
    string answer = "";
    
    int num1 = 0, idx1;
    for (int i = bin1.size()-1; i >= 0; --i)
    {
        int v = bin1[i]-'0';
        
        idx1 = bin1.size() - (i+1);
        if (v == 1) num1 += pow(2, idx1);
    }
    
    int num2 = 0, idx2;
    for (int i = bin2.size()-1; i >= 0; --i)
    {
        int v = bin2[i]-'0';
        
        idx2 = bin2.size() - (i+1);
        if (v == 1) num2 += pow(2, idx2);
    }

    int num = num1 + num2;
    if (num == 0)
    {
        answer = "0";
        return answer;
    }

    while (num != 1)
    {
        int remain = num % 2;
        string n = to_string(remain);
        answer.insert(0, n);
        
        num /= 2;
        if (num == 1) answer.insert(0, "1");
    }
    
    return answer;
}
~~~



## 다른 사람 코드

한창균씨 코드를 참고하였다.

~~~c++
#include <string>
#include <vector>
#include <bitset>
using namespace std;

string solution(string bin1, string bin2) {
    auto tmp = bitset<32>(bitset<32>(bin1).to_ulong() + bitset<32>(bin2).to_ulong()).to_string();

    int ind = 0;
    while(tmp[ind] == '0')
    {
        ind++;
    }
    if(ind == tmp.size())
    {
        ind--;
    }
    return tmp.substr(ind);
}
~~~



## 문제 핵심 포인트

1. C++의 `<bitset>`을 사용할 줄 아는가?
2. C++ string 클래스의 `str.substr()`을 사용할 줄 아는가?



### 1) 선언하기

~~~~c++
#include <bitset>

string bin1 = "1001";
string bin2 = "1111";

bitset<16> bit; // 0으로 초기화된 16비트 선언
bitset<16> bit(bin1); // string 객체를 넣어도 됨

auto num1 = bitset<16>(bin1).to_ulong(); // .to_ulong()으로 숫자로 변환
auto num2 = bitset<16>(bin2).to_ulong(); // .to_ulong()으로 숫자로 변환
auto num_str = bitset<16>(bitset<16>(bin1).to_ulong()
             + bitset<16>(bin2).to_ulong()).to_string(); // string으로 변환
~~~~



### 2) 함수

* bitset<개수> 이름, 비트 선언

* bit.set(), 전체 비트를 1로 셋팅

* bit.reset(), 전체 비트를 0으로 셋팅

* bit.size(), 비트의 크기를 구함

* bit.any(), 하나라도 1이면 1반환, 모두 0이면 0 반환

* bit.none(), 비트셋 모두가 0이어야 1반환

* bit.flip(), 모든 비트 반전

* bit.flip(n), n+1번째 비트 반전

* bit.test(n), n+1번째 비트 검사 (0인지 1인지)

* bit.to_string(), 전체 비트를 string 화 시킴

* git.to_ulong(), 전체 비트를 unsigned long의 값으로 바꿔줌

  

### 3) 문자열 부분 추출

~~~c++
string str;

str.substr(); // 전체 문자열 가져오기
str.substr(5); // 5번 인덱스부터 끝까지
str.substr(5, 1); // 5번 인덱스부터 길이 1만큼
~~~




## Reference
* [이진수 더하기](https://school.programmers.co.kr/learn/courses/30/lessons/120885)
* [비트셋(Bitset) STL 사용방법](https://www.crocus.co.kr/549)
* [C++ string (문자열)의 부분 문자열 추출 (substr)](https://psychoria.tistory.com/773)