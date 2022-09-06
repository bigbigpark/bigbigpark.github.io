---
title: "[C++] vector 2차원을 1차원으로"

category: cpp_useful
tags: [c++, cpp, vector, flatten, 차원, dimension, algorithm]
---

2차원 형태의 std::vector를 1차원 vector로 만들어 보자! <br/>

## 코드

아래의 flatten 함수를 정의하고 사용하자 <br/>

~~~c++
std::vector<int8_t> flatten(const std::vector<std::vector<int8_t>> &array)
{
  std::vector<int8_t> flattened_v;

  for(auto& element : array)
  {
    flattened_v.insert(flattened_v.end(), element.begin(), element.end());
  }

  return flattened_v;
}
~~~

<br/>