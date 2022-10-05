---
title: "[C++] std::vector<double> 평균, 표준편차 구하기"
category: cpp_useful
tags: [c++, cpp, vector, STL, mean, average, variance, std, algorithm]
---

std::vector<double>로부터 평균(mean)과 표준편차(standard deviation)을 구해보자! <br/>


## 전체 소스 코드

~~~c++
std::vector<int> v = {1, 2, 3, 4, 5};

double sum = std::accumulate(v.begin(), v.end(), 0.0);
double mean = sum / v.size();

std::vector<double> diff(v.size());
std::transform(v.begin(), v.end(), diff.begin(), [mean](double x) { return x - mean; });
double sq_sum = std::inner_product(diff.begin(), diff.end(), diff.begin(), 0.0);
double stdev = std::sqrt(sq_sum / v.size());
~~~

## Reference
* [C++의 vector로부터 표준편차와 평균 구하기](https://webnautes.tistory.com/1555)