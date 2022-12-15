---
title: "[프로그래머스] 특정 문자 제거하기 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

문자열 `my_string`과 문자 `letter`이 매개변수로 주어집니다. `my_string`에서 `letter`를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- 1 ≤ `my_string`의 길이 ≤ 100
- `letter`은 길이가 1인 영문자입니다.
- `my_string`과 `letter`은 알파벳 대소문자로 이루어져 있습니다.
- 대문자와 소문자를 구분합니다.



## 입출력 예

| my_string | letter | result  |
| --------- | ------ | ------- |
| "abcdef"  | "f"    | "abcde" |
| "BCBdbe"  | "B"    | "Cdbe"  |



## 코드

~~~c++
#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string my_string, string letter)
{
    string answer = "";

    for (const auto& cur_str: my_string)
    {
        std::string temp_str;
        temp_str += cur_str;
        
        if (temp_str != letter) answer += cur_str;
    }
    
    cout << answer;
    
    
    return answer;
}
~~~

문제 핵심 포인트

* 문자열 다루기
  * string에서 인덱싱을 하면 `char`로 형변환이 됨.


* string에 관련된 알고리즘 라이브러리 이용

`<string>`에 정의된 `erase`함수를 사용해보자



### 사용하는 방법 3가지

* string& **erase**(size_t pos 0, size_t len = npos);
* iterator **erase**(const_iterator p);
* iterator **erase**(const_iterator first, const_iterator last;

~~~c++
std::string test = "Hello world!";

// Example #1
test.erase(0, 5); // pos 길이부터 len길이만큼의 문자를 지운다.

// Example #2
test.erase(test.begin() + 2); // p에 위치하는 문자 제거

// Example #3
test.erase(test.begin() + 5, test.begin() + 8); // first부터 last 직전 범위 문자열 삭제
~~~



### 특정 문자만 제거하기

~~~c++
test.erase(std::remove(test.begin(), test.end(), 'A'), test.end());
~~~




## Reference
* [특정 문자 제거하기](https://school.programmers.co.kr/learn/courses/30/lessons/120826)