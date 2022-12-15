---
title: "[프로그래머스] 배열의 평균값 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

정수 배열 `numbers`가 매개변수로 주어집니다. `numbers`의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- 0 ≤ `numbers`의 원소 ≤ 1,000
- 1 ≤ `numbers`의 길이 ≤ 100
- 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.



## 입출력 예

| numbers                                      | result |
| -------------------------------------------- | ------ |
| [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]              | 5.5    |
| [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99] | 94.0   |



## 코드

~~~c++
#include <string>
#include <vector>
#include <numeric>

using namespace std;

double solution(vector<int> numbers)
{
    return (double)std::accumulate(numbers.begin(), numbers.end(), 0)/numbers.size();
}
~~~

문제 핵심 포인트

* 평균을 구하는 방법
  * 반복문 돌면서 총합을 구하고 사이즈로 나눠도 된다.
  * 하지만 `<numeric>`에 있는 `std::accumulate(v.begin(), v.end(), 초기값)`을 이용하자 ^^





## Reference
* [배열의 평균값](https://school.programmers.co.kr/learn/courses/30/lessons/120817)