---
title: "[자료 구조 #5] 연결 리스트(linked list)"

category: data_structure
tags: [data_structure, 자료 구조, 코딩테스트, 연결리스트, 링크드리스트, linkedlist]
---

기회는 준비된 자에게 온다 ! 

 

## 연결 리스트의 정의

연결 리스트(Linked List)란 말 그대로 리스트가 연결되어 있는 것을 뜻한다.

그림으로 표현하면 아래와 같으며, 여러 개의 Node가 서로 연결되어 있는 형태이다.

배열과 달리 실제로 메모리 공간서 서로서로 떨어져 있는 데이터를 링크(포인터)를 이용하여 연결 시켜 리스트 형태로 구현한 것이다.



### 단순 연결 리스트 예시

여기서 리스트의 가장 첫 번째에 위치한 노드를 **Head**, 끝에 위치한 노드를 **Tail**이라고 부른다.

각 노드는 데이터(data)와 링크(link)라는 2가지 속성을 가진다.

* data: 노드에 저장된 데이터 값 (ex. 아래 그림에서 9, 17, 11)
* link: 연결된 다음 노드 주소 (ex. 아래 그림에서 화살표)

여기서 Tail 노드의 다음 노드는 Nullptr을 가리키고 있다.

![](/assets/img/data_structure/2022-12-08/Selection_001.png)

<br/>

단순 연결리스트 말고 아래의 두 가지 연결 리스트가 존재한다.

### 원형 연결 리스트(Circular Linked List)

원형 연결 리스트의 경우 tail 노드의 다음 노드가 제일 첫 번째 리스트를 가리키게 하여 순환되는 구조를 갖고 있다.

![](/assets/img/data_structure/2022-12-08/Selection_002.png)



### 이중 연결 리스트 (Doulbe Linked List)

노드의 방향성을 없애고 한 노드에서 언제든 직전 노드로 이동이 가능하며, 위의 원형 연결 리스트와 통합할 수 있다.

![](/assets/img/data_structure/2022-12-08/Selection_003.png)



## 배열과 비교

* 읽기(reading) 속도는 배열이 리스트보다 빠르다. 왜냐하면 배열은 인덱스만 있으면 O(1)에 가능하지만, 리스트는 최소 한번 순회를 거쳐야 하기 때문에 O(n)이 걸린다.
* 삽입(insertion)과 삭제(delete) 속도는 리스트가 배열보다 빠르다.
  * 리스트는 중간에 데이터를 삽입하게 되면 양옆 노드의 링크 정보만 변경하면 된다. 

따라서 표로 비교하면 아래와 같다.

|                      | 배열   | 연결리스트                                      |
| -------------------- | ------ | ----------------------------------------------- |
| Reading              | O(1)   | O(n)                                            |
| Insertion & Delete   | O(n)   | O(1), <br/>단 해당 원소의 위치를 알고 있는 경우 |
| 단 ,메모리 상의 배치 | 연속적 | 불연속적                                        |



## 연결 리스트의 장점

* 링크로써 구현되기 때문에, 자료의 삽입 및 삭제가 용이하다.
* 필요할때만 삽입과 삭제를 할 수 있기 때문에 배열처럼 최대 원소 개수 지정이 필요없다.



## 연결 리스트의 단점

* 원하는 원소를 찾는 과정 (searching)에서 포인터로 모든 노드를 순회해야 하기 때문에 탐색 비용이 높다.
* 구현이 어렵다.



## 연결 리스트 구현(C++)

표준 라이브러리 STL을 활용하여 작성해보자.

~~~c++
#include <iostream>
#include <list>

int main()
{
  std::list<int> num_list(5, 1);
  std::list<int>::iterator iter = num_list.begin();

  for (const auto& num: num_list)
  {
    std::cout << num << std::endl;
  }
  return 0;
}
~~~

출력은 아래와 같다.

~~~Bash
1
1
1
1
1
~~~

<br/>

여기서 리스트의 제일 앞, 중간, 뒤 쪽에 값을 추가해보자.

<br/>

### 1) 제일 앞

~~~c++
num_list.push_front(3);
~~~

### 2) 제일 뒤

~~~c++
num_list.push_back(9);
~~~

출력은 아래와 같다.

~~~bash
3
1
1
1
1
1
9
~~~

<br/>

### 3) 가운데

가운데는 iterator를 이용해서 수행해야 한다.

~~~c++
// Iterator 선언
std::list<int>::iterator iter = num_list.begin();

// iter는 현재 리스트의 제일 앞엔 숫자 3을 가리키고 있다.
// 따라서 3뒤에 숫자 6이 추가가 된다.
num_list.insert(iter, 6);

// 안에 operator가 ++ 밖에 지원하지 않는다. => 즉, iter += 5 불가능 !
// for문을 하던지 아니면 아래와 같이 ++로 iter를 변경한다.
iter++;
iter++;
num_list.insert(iter, 7);
~~~

출력은 아래와 같다.

~~~bash
3
6
1
1
7
1
1
1
9
~~~



## Reference

* [[자료구조] 연결 리스트(Linked List) 개념과 구현](https://leejinseop.tistory.com/4)
* [연결 리스트(Linked list) 개념정리](https://lamarr.dev/datastructure/2020/04/02/01-linked-list.html)
* [[자료구조] 배열 리스트와 연결 리스트의 차이 (장단점)](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=tjsrudv&logNo=221055137174)

* [[Data Structure] C++ / 자료구조 / Linked list](https://velog.io/@kon6443/Data-Structure-C-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Linked-list)
* [[C++ STL] list(연결리스트)](https://sanghyu.tistory.com/84)