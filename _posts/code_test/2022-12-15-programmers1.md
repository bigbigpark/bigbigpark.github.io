---
title: "[프로그래머스] 분수의 덧셈 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

첫 번째 분수의 분자와 분모를 뜻하는 `denum1`, `num1`, 두 번째 분수의 분자와 분모를 뜻하는 `denum2`, `num2`가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.



## 제한 사항
0 < `denum1`, `num1`, `denum2`, `num2` < 1,000



## 입출력 예

| denum1 | num1 | denum2 | num2 | result  |
| ------ | ---- | ------ | ---- | ------- |
| 1      | 2    | 3      | 4    | [5, 4]  |
| 9      | 2    | 1      | 3    | [29, 6] |



## 코드

~~~c++
#include <string>
#include <vector>

using namespace std;

vector<int> solution(int denum1, int num1, int denum2, int num2)
{
    vector<int> answer(2);
    
    int boonja_sum = denum1*num2 + denum2*num1;
    int boonmo_sum = num1*num2;
    
    int max = -1;
    if (boonja_sum < boonmo_sum) max = boonmo_sum;
    else max = boonja_sum;
    
    int gcd = 1;
    for (int i = 2; i <= max; i++)
    {
        if (boonja_sum % i == 0 && boonmo_sum % i == 0)
        {
            gcd = i;
        }
    }
    answer[0] = boonja_sum/gcd;
    answer[1] = boonmo_sum/gcd;
    
    return answer;
}
~~~

문제 핵심 포인트

* 최대 공약수(Greatest Common Division)에 대한 이해




## Reference
* [분수의 덧셈](https://school.programmers.co.kr/learn/courses/30/lessons/120808)