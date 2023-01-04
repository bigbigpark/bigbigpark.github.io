---
title: "[프로그래머스] 소인수분해 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

소인수분해란 어떤 수를 소수들의 곱으로 표현하는 것입니다. 예를 들어 12를 소인수 분해하면 2 * 2 * 3 으로 나타낼 수 있습니다. 따라서 12의 소인수는 2와 3입니다. 자연수 `n`이 매개변수로 주어질 때 `n`의 소인수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- 2 ≤ `n` ≤ 10,000



## 입출력 예

| n    | result       |
| ---- | ------------ |
| 12   | [2, 3]       |
| 17   | [17]         |
| 420  | [2, 3, 5, 7] |



## 코드

~~~c++
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

vector<int> solution(int n)
{
    vector<int> answer;
    unordered_map<int, bool> um;
 
    int div = 2;
    
    while (n != 1)
    {
        if (n % div == 0)
        {
            // cout << div << endl;
            um[div] = true;
            
            n /= div;
        }
        else div++;
    }
    
    for(auto& v : um)
    {
        answer.push_back(v.first);
    }
    
    sort(answer.begin(), answer.end());
    
    
    return answer;
}
~~~



## 문제 핵심 포인트

1. 소인수분해의 정의를 알고있는가?
   - 하나의 숫자를 소수의 곱으로 표현하는 것




## Reference
* [소인수분해](https://school.programmers.co.kr/learn/courses/30/lessons/120852)