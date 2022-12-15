---
title: "[프로그래머스] 머쓱이보다 키 큰 사람 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 `array`와 머쓱이의 키 `height`가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요..



## 제한 사항
- 1 ≤ `array`의 길이 ≤ 100
- 1 ≤ `height` ≤ 200
- 1 ≤ `array`의 원소 ≤ 200



## 입출력 예

| array                | height | result |
| -------------------- | ------ | ------ |
| [149, 180, 192, 170] | 167    | 3      |
| [180, 120, 140]      | 190    | 0      |



## 코드

~~~c++
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> array, int height)
{
    // 1. 배열에 머쓱이 키 추가
    array.push_back(height);
    
    // 2. sort 오름차순
    std::sort(array.begin(), array.end());
    
    // 3. 머쓱이 키 인덱스 찾기
    auto idx = std::find(array.begin(), array.end(), height) - array.begin();
    
    // 4. 머쓱이랑 키 같은 녀석 찾기
    while(1)
    {
        auto iter = std::find(array.begin()+idx, array.end(), height);
        
        if (iter == array.end()) break;
        else idx++;
    }
    
    // 5. 배열 사이즈 - 인덱스 반환    
    return array.size() - idx;
}
~~~

문제 핵심 포인트

* C++ vector 정렬(sort)에 관한 내용 알고 있는가
* index 찾는법 --> 마지막에 array.begin() 빼주기
  * 빼는 과정 생략하면 iter 값이 반환됨, 값 보려면 *iter





## Reference
* [머쓱이보다 키 큰 사람](https://school.programmers.co.kr/learn/courses/30/lessons/120585)