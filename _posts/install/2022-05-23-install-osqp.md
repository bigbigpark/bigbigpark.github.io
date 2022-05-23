---
title: "OSQP : C, Python 버전 설치하기"

toc: true
toc_sticky: true
category: install
tags: [install, mpc, osqp, c, python]
---

OSQP C버전, Python버전을 설치해보자 ! <br/>

## Python 버전

~~~bash
$ git clone --recurse-submodules https://github.com/osqp/osqp-python
$ cd osqp-python
$ python setup.py install
~~~

## C 버전 (Binary)

두 가지 패키지를 다운받아준다

### 1. Download OSQP-cpp

Git에서 패키지를 다운로드 해준다 <br/>

~~~bash
$ git clone https://github.com/google/osqp-cpp.git
~~~

빌드 & 설치 해준다 <br/>

~~~bash
$ mkdir build; cd build
$ cmake ..
$ make
$ sudo make install
~~~

### 2. Download abseil-cpp

Git에서 패키지를 다운로드 해준다 <br/>

~~~bash
$ git clone https://github.com/abseil/abseil-cpp.git
~~~

<br/>

빌드 & 설치 해준다 <br/>

~~~bash
$ mkdir build; cd build
$ cmake ..
$ make
$ sudo make install
~~~

## CMakeLists.txt 수정

파이썬은 그냥 import 해서 사용하면 된다<br/> 

~~~python
import osqp
~~~

<br/>

CMakeLists.txt를 수정해주자

~~~cmake
# Find OSQP library and headers
find_package(osqp REQUIRED)

# Link the OSQP shared library
target_link_libraries(yourTarget PRIVATE osqp::osqp)

# or...

# Link the OSQP static library
target_link_libraries(yourTarget PRIVATE osqp::osqpstatic)
~~~

<br/>

## 테스트 코드

### Python

~~~python
import osqp
import numpy as np
from scipy import sparse

# Define problem data
P = sparse.csc_matrix([[4, 1], [1, 2]])
q = np.array([1, 1])
A = sparse.csc_matrix([[1, 1], [1, 0], [0, 1]])
l = np.array([1, 0, 0])
u = np.array([1, 0.7, 0.7])

# Create an OSQP object
prob = osqp.OSQP()

# Setup workspace and change alpha parameter
prob.setup(P, q, A, l, u, alpha=1.0)

# Solve problem
res = prob.solve()
~~~

### C

~~~c++
#include <osqp/osqp.h>

int main(int argc, char **argv)
{
  // Load problem data
  c_float P_x[3] = {4.0, 1.0, 2.0, };
  c_int P_nnz = 3;
  c_int P_i[3] = {0, 0, 1, };
  c_int P_p[3] = {0, 1, 3, };
  c_float q[2] = {1.0, 1.0, };
  c_float A_x[4] = {1.0, 1.0, 1.0, 1.0, };
  c_int A_nnz = 4;
  c_int A_i[4] = {0, 1, 0, 2, };
  c_int A_p[3] = {0, 2, 4, };
  c_float l[3] = {1.0, 0.0, 0.0, };
  c_float u[3] = {1.0, 0.7, 0.7, };
  c_int n = 2;
  c_int m = 3;

  // Exitflag
  c_int exitflag = 0;

  // Workspace structures
  OSQPWorkspace *work;
  OSQPSettings  *settings = (OSQPSettings *)c_malloc(sizeof(OSQPSettings));
  OSQPData      *data     = (OSQPData *)c_malloc(sizeof(OSQPData));

  // Populate data
  if (data)
  {
    data->n = n;
    data->m = m;
    data->P = csc_matrix(data->n, data->n, P_nnz, P_x, P_i, P_p);
    data->q = q;
    data->A = csc_matrix(data->m, data->n, A_nnz, A_x, A_i, A_p);
    data->l = l;
    data->u = u;
  }

  // Define solver settings as default
  if (settings)
  {
    osqp_set_default_settings(settings);
    settings->alpha = 1.0; // Change alpha parameter
  }

  // Setup workspace
  exitflag = osqp_setup(&work, data, settings);

  // Solve Problem
  osqp_solve(work);

  // Cleanup
  osqp_cleanup(work);
  if (data)
  {
    if (data->A) c_free(data->A);
    if (data->P) c_free(data->P);
    c_free(data);
  }
  if (settings) c_free(settings);

  return exitflag;
};
~~~

## Reference
* ["Get started : OSQP"](https://osqp.org/docs/index.html)