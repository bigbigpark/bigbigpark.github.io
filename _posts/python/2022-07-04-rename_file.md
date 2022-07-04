---
title: "[Python] 폴더 이름 한번에 변경하기"

toc: true
toc_sticky: true
category: python_useful
tags: [python, file, directory, rename, change, title]
---

파이썬으로 폴더 내 파일 이름을 일괄 변경 해보자 <br/>

## 코드

~~~python
#! /usr/bin/env python3

import os

file_path = '${폴더 경로}'
file_names = os.listdir(file_path)
i = 0
file_names.sort()

for name in file_names:
  src = os.path.join(file_path, name)
  dst = str('frame_' + str(i).zfill(4) + '.ply')
  dst = os.path.join(file_path, dst)
  os.rename(src, dst)
  
  i += 1
~~~

단순한 파일 같은 경우는 변환이 되지만... 잘못하면 속성을 잃을 수도 있다 ㅠㅠ