---
title: "[프로그래머스] 대문자와 소문자 (Lv.0)"

category: code_test
tags: [code, test, 코딩테스트, 프로그래머스]
---

## 문제 설명

문자열 `my_string`이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.



## 제한 사항
- 1 ≤ `my_string`의 길이 ≤ 1,000
- `my_string`은 영어 대문자와 소문자로만 구성되어 있습니다.



## 입출력 예

| my_string    | result       |
| ------------ | ------------ |
| "cccCCC"     | "CCCccc"     |
| "abCdEfghIJ" | "ABcDeFGHij" |



## 코드

~~~c++
#include <string>
#include <vector>
#include <iostream>

using namespace std;

string solution(string my_string)
{
    string answer = "";
    
    for (auto& my_str: my_string)
    {
        // 65~90-A~Z, 97~122-a~z
        my_str = ( (int)my_str < 91) ? my_str+32 : my_str-32;
        
        std::string temp;
        temp += my_str;
        answer.append(temp);
    }
      
    return answer;
}
~~~

문제 핵심 포인트

* ASCII 코드에 대한 이해
  * A~Z: 65~90
  * a~z: 97~122

* `islower`, `isupper` 함수에 대한 이해
  * `toupper`, `tolower` 함수에 대한 이해
  * 


~~~c++
std::string my_string = "bigbigPARK";

for(auto& my_str: my_string)
{
    if (islower(my_str)) my_str = toupper(my_str);
    else if (isupper(my_str)) my_str = tolower(my_str);
}
~~~






## Reference
* [대문자와 소문자](https://school.programmers.co.kr/learn/courses/30/lessons/120893/solution_groups?language=cpp)