---
title: "[C++] 코딩테스트 때 자주 사용하는 STL 및 알고리즘 정리"

category: cpp_useful
tags: [cpp, c++, 자료 구조, STL, codility, vector, string, map, algorithm]
---

코딩 테스트 문제를 풀다보면 STL을 많이 사용하게 된다. <br/>

자주 사용하는 것들을 까먹지 않게 좀 정리해보았다. <br/>

대부분의 경우 `std`라는 `namespace` 안에 속하는 녀석들인데, 앞으로 정리할 내용은 바로 밑의 선언이 되어 있다고 가정한다. <br/>

~~~c++
using namespace std;
~~~

## 1. vector

아래와 같이 선언되어 있다고 가정하자.

~~~c++
#include <vector> // 이렇게 선언한다.

using namespace std;

int main()
{
  vector<int> v;

  return 0;
}
~~~

<br/>

대부분의 자료 구조의 경우 4가지의 기본 연산이 있다. <br/>

따라서 각 STL별 아래의 기준으로 정리한다. <br/>

* 읽기(read)
* 탐색(search)
* 삽입(insert)
* 삭제(delete)

### A. 탐색

vector 탐색을 위해서 `std::find`를 이용하며 두 가지 방법이 존재한다

~~~c++
// 1. 반복자(iterator) 찾기
auto iter = std::find(v.begin(), v.end(), 178);

// 2. 인덱스(index) 찾기
auto idx = std::find(v.begin(), v.end(), 178) - v.begin();

// 만약에 없으면?
if ( std::find(v.begin(), v.end, 178()) == v.end() );
~~~

`std::find` 함수를 이용해서 찾게 되며, 해당 요소가 vector에 존재하지 않으면 `v.end()`를 반환한다. <br/>

이 함수의 반환값은 **반복자**이며, 해당 반복자에 해당하는 **인덱스**를 얻고 싶다면 첫 번째 반복자인 `v.begin()`를 빼주면 된다. <br/>

<br/>

iterator를 이용하여 인덱스를 얻는 방법이 하나 더 있다. <br/>

바로 `distance()` 함수를 이용하여 아래와 같이 사용할 수 있다.

~~~c++
#include <algorithm>

auto index = std::distance(v.begin(), iter);
~~~

### B. 삽입

삽입은 `insert()`를 이용하며 아래와 같이 삽입할 수 있다.

~~~c++
v.insert( v.begin(), 100 ); // 100을 제일 처음에 추가
v.insert( v.begin()+5, 5 ); // 5를 (처음+5)에 추가
v.insert( v.end(), 9 ); // 9를 제일 마지막에 추가
~~~

### C. 삭제

삭제는 `erase()`를 이용하며 아래와 같이 삭제할 수 있다.

~~~c++
v.erase( v.begin() ); // 제일 첫 번째 원소 제거
v.erase( v.end()-1 ); // 마지막에서 한 칸 앞에 원소 제거
~~~


## 2. map

`<map>` 정말 많이 사용한다. <br/>

전화번호부, 메뉴판과 같이 **이름-전화번호** 혹은 **메뉴-가격** 이렇게 **key-value**로 표현할 수 있을 때.

또한 투표소에서 누가 투표를 안 했는가?에 대한 문제도 손쉽게 풀 수 있다. <br/>

그 기본 자료 구조는 해시 테이블(hash table) 또는 트리(tree)인데 조금더 자세히 보고 싶다면 [여기](https://bigbigpark.github.io/data_structure/hash_table/)를 참고하자.

<br/>

선언은 아래와 같이 해준다. 설명은 주석을 참고하자. <br/>

~~~c++
#include <map>

// 또는

#include <unordered_map> // 필자는 이걸 더 선호한다.

/*
  사용하는 곳 안에서 (대게 main문)
  key-value의 쌍(pair)로 선언해야 하므로 2가지를 <> 안에 넣어줘야 한다.
*/
unordered_map<string, int> um;
um["bigbigpark"] = 1234;   // 문자열 bigbigpark이라는 key에 저장된 value는 정수형 1234이다.
~~~

### A. 탐색

탐색은 `find` 메소드를 이용해준다. <br/>

위에 vector는 `std::find`를 이용해주었다. 차이점을 주의하자. <br/>

~~~c++
if ( um.find("bigbigpark") != um.end() ) // 찾지 못한다면 end()를 반환

// 만약 찾았으면?
/*
  앞서 말했다시피 map 자료구조는 key-value 두 가지로 구성되어 있다.
  따라서 찾았을 때 두 가지 모두 접근이 가능하다.
*/
auto iter = um.find("bigbigpark");

auto key   = iter->first;  // key에 접근한다. -> 문자열 bigbigpark 반환.
auto value = iter->second; // value에 접근한다. -> 정수형 1234 반환.
~~~

### B. 삽입

여러 방법이 있지만 나는 아래와 같이 그냥 넣는다.

~~~c++
um["Eric"] = 9999;
~~~

### C. 삭제

key를 기준으로 삭제한다. <br/>

~~~c++
um.erase["Amanda"]; // 없으면 um.end()를 반환한다.
~~~

### D. 반복문 순회

예를 들어보자. <br/>

~~~c++
// vector의 경우 아래와 같이 반복문을 순회하며 값에 접근이 가능하다.
vector<int> v = {1, 2, 3, 4, 5};
for(auto n: v)
{
  std::cout << n << std::endl;
}

// map의 경우 어떨까?
unordered_map<string, int> um;
um["A"] = 1111;
um["B"] = 2222;

for(auto it: um)
{
  // key-value의 특성에 따라 접근하면 된다.
  std::cout << "key  : " << it->first << std::endl; // 문자열 A, B 출력
  std::cout << "value: " << it->second << std::endl; // 정수형 1111, 2222 출력
}
~~~

## 3. 문자열(string)

C++.. 문자열 정말 많이 나오는 것 같다. <br/>

정수 입력을 받을 때 99999999999999999같은 숫자도 string으로 입력 받으면 큰 수도 효율적으로 처리 가능하다.

<br/>

보통 아래와 같이 선언한다.

~~~c++
#include <string>

string s = "bigbigpark";
~~~

### A. 찾기

`find`메소드를 사용하긴 하지만 찾지 못하였을 때 **반환값이 다름**에 주의하자. <br/>

~~~c++
if ( s.find("big") != std::string::npos )
~~~

`find` 메소드에는 다음과 같은 특성들이 있다.

* 못 찾았을 시 반환값은 `std::string::npos`이다.
* 찾았을 때 반환값은 해당 **인덱스**이다.
* 중복되는 문자의 경우 **제일 먼저 등장**한 인덱스를 반환해준다.

<br/>

### B. 교체

`replace()` 메소드를 사용한다. 쉽다.

~~~c++
int pos = 3;
int length = 5;
string 문자열 = "name";

/*
  pos위치에서 length길이만큼 문자열로 채우게 된다.
  pos위치와 length와 문자열 길이의 차이로 인한 에러는.. 각자 센스로 해결하자.
*/
s.replace(pos, length, 문자열);
~~~

### C. 삭제

삭제에는 3가지 방법이 있다.

~~~c++
// 1.
s.erase(pos, len); // pos위치에서 len길이만큼 삭제한다.

// 2.
s.erase(s.begin()+2); // 처음 위치+2 에 있는 녀석을 삭제한다.

// 3.
s.erase(s.begin()+1, s.end()-3) // 첫 번째 위치 ~ 두 번째 위치까지의 요소들을 삭제한다.
~~~

<br/>

여기서 **특정 문자만 제거하기**를 알아보자. <br/>

~~~c++
/*
  A는 문자열이 아닌 char 형으로 들어감에 주의하자.
  문자열 s에서 'A'가 들어간 부분을 모조리 지워준다.
*/
s.erase( std::remove(s.begin(), s.end(), 'A'), s.end() )
~~~

### D. 문자열 부분 추출

삽입, 삭제 말고 있는 문자열에서 조금만 떼 올 수는 없을까? <br/>

있다. <br/>

~~~c++
// 1. 전체 가져오기
string new_string = s.substr();

// 2. 5번 인덱스부터 끝까지 가져오기
string new_string = s.substr(5);

// 3. 5번 인덱스부터 1길이만큼 가져오기
string new_string = s.substr(5, 1);
~~~

### E. 문자열 형변환

정말 많이 나온다. <br/>

자주 사용하면 거의 외울 수 있다. <br/>

~~~c++
// char -> string, 문자열 객체 선언후 그냥 더하기.
char ch = 'A';
string temp = "";
temp += ch;

// string -> char, 그냥 인덱싱 하자.
string str = "bigbigpark";
char c = str[0];

// int -> string
int num = 5;
string str = to_string(num);

// string -> int 또는 double
string n_str = "1122";
int n1 = stoi(n_str);
double n2 = stod(n_str);

// char -> int
// 자릿수 연산에 많이 등장한다.
char ch = '9';
int n = ch - '0'; // '0'를 빼게 되면 보이는 그대로 숫자가 저장되게 된다.
~~~

<br/>

추가적으로 **ASCII 숫자**를 알아보자.

* 'A'~'Z': 65~90
* 'a'~'z': 97~122

## E. 문자열 공백으로 분리

공백 말고 다른 **구분자(delimeter)**으로도 분리 가능하다. <br/>

~~~c++
#include <sstream>
#include <string>

// 공백이 포함된 문자열이 있다고 가정하자.
string str = "hello world this is park";
istringstream ss(str);

string word;

// getline() 3번째 인자에 구분자를 설정해주자. 아래 예시는 공백.
while ( getline(ss, word, ' ') )
{
  std::cout << word << std::endl;
}
~~~

## 4. 정렬

숫자를 오름차순, 내림차순으로 정렬해보자. <br/>

~~~c++
#include <algorithm>
#include <vector>

using namespace std;

vector<int> v = {4, 2, 3, 5, 1};

// 오름차순
sort( v.begin(), v.end() );

// 내림차순
sort( v.begin(), v.end(), greater<>() );
~~~

## 5. 합

벡터의 모든 요소의 합을 구해보자. <br/>

물론 반복문 선언 후 그냥 더할 수도 있음. <br/>

~~~c++
#include <numeric>

// 합
auto sum = accumulate( v.begin(), v.end(), 0);

// 평균
auto avg = sum / n.size();
~~~

## 6. 이진수 연산

이진수를 위한 라이브러리가 있는 지 최근에 알았다. <br/>

정말 편리한데.. 알고나서 충격을 금치 못했다. <br/>

~~~c++
#include <bitset>
~~~

### A. 선언 및 사용

~~~c++
/*
  1) 이진수 형태의 문자열을 바로 사용 가능.
  2) 십진수를 이진수로 바로 사용 가능.

  이진수 형태의 덧셈 뺄셈 가능
*/
int n1 = 544132;
string n2 = "01110111011";

bitset<16> bit; // 모든 16자리 비트가 0으로 초기화됨.
bitset<16> bit (n1); // 정수형을 바로 비트연산 가능
bitset<16> bit (n2); // 문자열을 바로 비트연산 가능
~~~

### B. 이진수를 다시 문자열/정수형으로 변환

~~~c++
auto i_num = bit.u_long();    // 이진수를 정수형으로 변환
auto s_num = bit.to_string(); // 이진수를 문자열로 변환
~~~

### C. 메소드들

* flip(n) : n번째 비트 반전 시키기
* test(n) : n번째 비트가 1인지 검사 (맞으면 true, 다르면 false) 반환