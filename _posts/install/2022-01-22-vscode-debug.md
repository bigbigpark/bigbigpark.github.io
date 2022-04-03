---
title: vscode 디버그 모드 설정

toc: true
toc_sticky: true
category: install
tags: [install, vscode, debug, mode, 리눅스, 디버깅모드, breakpoint]
---

<br/>

C++ 디버그 모드를 한번 구성해보자

<br/>

## 1. JSON 파일 추가를 위한 과정

**Ctrl + Shift + D** 눌러서 왼쪽에 보이는 **Run and Debug** 를 누르자

![01](/assets/img/blog/ubuntu/2022-01-22/01.png)

<br/>

## 2. GDB/LLDB 설정

사진에 나와 있는 **C++(GDB/LLDB)**를 클릭

![02](/assets/img/blog/ubuntu/2022-01-22/02.png)

## 3. Default Setting

맨 밑에 **Default Configuration** 을 누른다

![03](/assets/img/blog/ubuntu/2022-01-22/03.png)

<br/>

## 4. JSON 파일 설정

다시 workspace로 돌아오면 **.vscode** 파일 안에 launch.json 이 추가되었다

![04](/assets/img/blog/ubuntu/2022-01-22/04.png)

<br/>

아래와 같이 수정해주자

~~~json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "(gdb) Launch",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/bin/${fileBasenameNoExtension}",
      "args": [],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": false,
      "MIMode": "gdb",
      "setupCommands": [
        {
          "description": "Enable pretty-printing for gdb",
          "text": "-enable-pretty-printing",
          "ignoreFailures": true
        },
        {
          "description": "Set Disassembly Flavor to Intel",
          "text": "-gdb-set disassembly-flavor intel",
          "ignoreFailures": true
        }
      ]
    }
  ]
}
~~~

 <br/>

## 5. 사용법

원하는 시점에 **BP**(breakpoint, 브레이크포인트)를 걸고,

Ctrl + B를 이용해 **빌드**를 먼저 하고 **F5**를 눌러서 디버그 모드에 진입한다

![05](/assets/img/blog/ubuntu/2022-01-22/05.png)

<br/>

