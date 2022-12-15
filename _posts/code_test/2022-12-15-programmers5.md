---
title: "[프로그래머스] 문자열안에 문자열 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

문자열 `str1`, `str2`가 매개변수로 주어집니다. `str1` 안에 `str2`가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- 1 ≤ `str1`의 길이 ≤ 100
- 1 ≤ `str2`의 길이 ≤ 100



## 입출력 예

| str1                     | str2   | result |
| ------------------------ | ------ | ------ |
| "ab6CDE443fgh22iJKlmn1o" | "6CD"  | 1      |
| "ppprrrogrammers"        | "pppp" | 2      |



## 코드

~~~c++
#include <string>
#include <vector>

using namespace std;

int solution(string str1, string str2)
{
    if (str1.find(str2) == std::string::npos) return 2;
    else return 1;
}
~~~

문제 핵심 포인트

* `find`함수에 대한 이해



size_t find(const string& str, size_T pos = 0) const;

~~~c++
std::string sentence = "apple";

// find() 함수는 찾지 못하면 std::string::npos 를 반환함
if (sentence.find("pl") != std::string::npos) std::cout << "찾음" << std::endl;

// 찾으면 인덱스를 반환!!!
auto idx = sentence.find("pl")
~~~



추가로 있는 중복되는 문자 찾기는 아래와 같다.

~~~c++
std::string name = "bigbigpark";
std::string target = "big";

while (name.find(target) != std::string::npos)
{
    size_t pos = name.find(target);
    std::cout << pos << std::endl;

    size_t length = target.size();
    std::cout << length << std::endl;

    // name.erase(pos, length);
    name.replace(pos, length, std::string(length, '*'));
    std::cout << name << std::endl;
}
~~~






## Reference
* [문자열안에 문자열](https://school.programmers.co.kr/learn/courses/30/lessons/120908)