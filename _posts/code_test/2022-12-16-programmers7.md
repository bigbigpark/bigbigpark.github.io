---
title: "[프로그래머스] 배열 회전시키기 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

정수가 담긴 배열 `numbers`와 문자열 `direction`가 매개변수로 주어집니다. 배열 `numbers`의 원소를 `direction`방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- 3 ≤ `numbers`의 길이 ≤ 20
- `direction`은 "left" 와 "right" 둘 중 하나입니다.



## 입출력 예

| numbers                   | direction | result                    |
| ------------------------- | --------- | ------------------------- |
| [1, 2, 3]                 | "right"   | [3, 1, 2]                 |
| [4, 455, 6, 4, -1, 45, 6] | "left"    | [455, 6, 4, -1, 45, 6, 4] |



## 코드

~~~c++
#include <string>
#include <vector>

using namespace std;

enum
{
  LEFT = 4,
  RIGHT
};

vector<int> solution(vector<int> numbers, string direction)
{
    int dir = direction.size();
    
    int num_last, num_first;
    switch (dir)
    {
        case RIGHT:
            num_last = numbers.back();
            numbers.erase(numbers.end()-1);
            numbers.insert(numbers.begin(), num_last);
            break;
            
        case LEFT:
            num_first = numbers.front();
            numbers.erase(numbers.begin());
            numbers.insert(numbers.end(), num_first);
            
            break;
            
        default:
            break;
    }
    
    return numbers;
}
~~~

문제 핵심 포인트

* `vector` 메소드에 대한 이해
  * `erase`
    * 첫 번째 원소 삭제: erase( v.begin() )
    * 마지막 원소 삭제: erase( **v.end() -1** )
  * `insert`
    * 첫 번째 원소 삽입: insert( v.begin(), 5 ) // 5를 처음에 추가
    * 마지막에 원소 삽입: insert( v.end(), 3 ) // 3을 마지막에 추가


## Reference
* [배열 회전시키기](https://school.programmers.co.kr/learn/courses/30/lessons/120844)