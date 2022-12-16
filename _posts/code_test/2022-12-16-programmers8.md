---
title: "[프로그래머스] 최반값 찾기 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 `array`가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

## 제한 사항
- 0 < `array`의 길이 < 100
- 0 ≤ `array`의 원소 < 1000



## 입출력 예

| array              | result |
| ------------------ | ------ |
| [1, 2, 3, 3, 3, 4] | 3      |
| [1, 1, 2, 2]       | -1     |
| [1]                | 1      |



## 코드

이 문제는 다 풀어놓고 삽질했던 문제다...

문제를 **정확하게** 읽자 !!



### 기존 코드

~~~c++
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int solution(vector<int> array)
{
    int answer = 0;
    
    vector<int> num_list(1000, 0);
    
    for(const auto& n: array)
    {
        num_list[n]++;
    }
    
    auto max_iter = max_element(num_list.begin(), num_list.end());
    auto max_iter2 = max_element(max_iter+1, num_list.end());
    
    return *max_iter == *max_iter2 ? -1 : *max_iter;
}
~~~

1000개의 빈도를 나타내는 배열 `num_list`를 작성해놓고 `array`에서 해당 숫자 인덱스에 맞게 `++` 해주었다.

근데 아무리아무리 아무..........리 제출해도 틀렸다고 뜬다...

과연 무엇이 문제일까?!



답은.. 빈도를 출력하는 것이 아니라 빈도가 가장 높은 **숫자**를 출력하는 것이었다. ㅠㅠ

### 정답 코드

~~~c++
#include <string>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int solution(vector<int> array)
{
    int answer = 0;
    
    vector<int> num_list(1000, 0);
    
    for(const auto& n: array)
    {
        num_list[n]++;
    }
    
    auto max_iter = max_element(num_list.begin(), num_list.end());
    auto max_iter2 = max_element(max_iter+1, num_list.end());
    
    if (*max_iter == *max_iter2)  return -1;
    else return std::distance(num_list.begin(), max_iter);
}
~~~



## 문제 핵심 포인트

* 문제 똑바로 읽기

* `find` 메소드에 대한 이해
  * `<algorithm>` 헤더에 포함
  * std::find( v.begin(), v.end(), 찾을 숫자 )  로 사용,, 못 찾으면 v.end() 반환.
* `distance`메소드에 대한 이해
  * `<algorithm>` 헤더에 포함
  * std::distance( v.begin(), iter 대입 ) 로 사용,, iter의 인덱스 값을 반환.
  * 



## Reference
* [최반값 구하기](https://school.programmers.co.kr/learn/courses/30/lessons/120812#qna)