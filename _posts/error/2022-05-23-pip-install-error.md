---
title: "[pip] egg_info failed with error code 1"

category: error
tags: [python, pip, install, error]
---

pip install할 때 가끔 생기는 오류를 해결하자

## Error

pip install을 하면 아래와 같은 에러가 생길 때가 있다 <br/>

~~~bash
Collecting osqp
  Using cached https://files.pythonhosted.org/packages/b5/1c/cc191ce88cb3f0d1aa6eee99553df0b1cc3659e3c01ca6414c3675add8ad/osqp-0.6.2.post5.tar.gz
    Complete output from command python setup.py egg_info:
    Traceback (most recent call last):
      File "<string>", line 1, in <module>
      File "/tmp/pip-build-Cj8H3c/osqp/setup.py", line 9, in <module>
        from setuptools import setup, find_namespace_packages, Extension
    ImportError: cannot import name find_namespace_packages
    
    ----------------------------------------
Command "python setup.py egg_info" failed with error code 1 in /tmp/pip-build-Cj8H3c/osqp/
~~~

![01](/assets/img/error/2022-05-23/01.png)

## 해결방법

밑의 명령어로 해결해주자! <br/>

~~~bash
$ sudo -H pip3 install --upgrade --ignore-installed pip setuptools
~~~

만약 `pip3`이 설치되어 있지 않다면, <br/>

~~~bash
$ sudo apt install python3-pip
~~~

## Reference
* ["[Python pip 설치 시 egg_info failed with error code 1 오류 해결]"](https://musclebear.tistory.com/131)
