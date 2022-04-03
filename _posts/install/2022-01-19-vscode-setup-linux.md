---
title: vscode 빌드 셋업

toc: true
toc_sticky: true
category: install
tags: [install, vscode, linux, ubuntu, 리눅스, IDE, 편집기, 코드]
---

<br/>

Ref. https://sikaleo.tistory.com/101

Ubuntu 18.04에서 C++을 사용하기 위한 셋업 정리

<br/>

## 1. 컴파일러 설치

~~~bash
$ sudo apt install build-essential g++ gcc
~~~

<br/>

## 2. 프로젝트 생성 및 폴더의 구성

프로젝트 파일은 아래 구조로 생성

* ${projectName}
  * /bin
  * /src
    * main.cpp

/src안에 있는 main.cpp를 컴파일 하여 실행가능한 objective 파일이 /bin에 저장되는 방식

아래 사진과 같이 **환경구축**을 해준다

![01](/assets/img/blog/ubuntu/2022-01-19/01.png)

<br/>

## 3. 컴파일러 설정

vscode 상단 바에서 [Terminal] - [Configure Default Build Task]를 누르면 현재 작성중인 언어(c++)에 맞춰 tasks.json의 기본 템플릿 선택 가능

![02](/assets/img/blog/ubuntu/2022-01-19/02.png)

<br/>

**C/C++: g++ build active file** 을 선택하자!

![03](/assets/img/blog/ubuntu/2022-01-19/03.png)

<br/>

다 설정하면 왼쪽과 같이 폴더가 구성됨

![04](/assets/img/blog/ubuntu/2022-01-19/04.png)

<br/>

만들어진 **tasks.json** 파일을 아래와 같이 수정하자

복붙 고고

~~~json
{
	"version": "2.0.0",
	"runner": "terminal",
	"type": "shell",
	"echoCommand": true,
	"presentation": {
		"echo": true,
		"reveal": "always",
		"focus": false,
		"panel": "shared",
		"showReuseMessage": true,
		"clear": false
	},
	"tasks": [
		{
			"type": "shell",
			"label": "C/C++: g++ build active file",
			"command": "/usr/bin/g++",
			"args": [
				// "-fdiagnostics-color=always",
				"-g3",
				"${file}",
				"-o",
				"${workspaceFolder}/bin/${fileBasenameNoExtension}"
			],
			"problemMatcher": {
				"fileLocation": [
					"relative",
					"${workspaceFoler}"
				],
				"pattern": {
					"regexp": "^(.*):(\\d+):(\\d+):\\s+(warning|error):\\s+(.*)$",
					"file": 1,
					"line": 2,
					"column": 3,
					"severity": 4,
					"message": 5
				}
			},
			"group": {
				"kind": "build",
				"isDefault": true
			}
		},
		{
			"type": "shell",
			"label": "execute",
			"command": "cd ${workspaceFolder}/bin && ./${fileBasenameNoExtension}",
			"group": {
				"kind": "test",
				"isDefault": true
			}
		},
	]
}
~~~

세세한 내용은 json을 공부해야 알겠지만 내가 아는 json 파일 포맷은 이렇다

json 포맷 안에 모든 내용들은 **key:value**의 쌍으로 이루어져있음

<br/>

보통 위와 같은 쌍으로 이루어진 녀석들을 **object**라고 부르고, 얘네들을 호출하기전 **중괄호 {}**가 나온다

가끔 **대괄호 []**가 보이는 경우가 있는데 이는 뒤에 **배열(array)**가 나옴을 명시한다

<br/>

## 3. 단축키 설정

[File] - [Preferences] - [Keyboard Shortcuts] 메뉴로 들어가서 단축키를 설정해준다

![05](/assets/img/blog/ubuntu/2022-01-19/05.png)

<br/>

이 역시 json으로 해보자

오른쪽 위에 마우스를 가져다 대면 **Open Keyboard Shortcuts(JSON)** 이라는 버튼을 누르자

![06](/assets/img/blog/ubuntu/2022-01-19/06.png)

<br/>

열리는 keybindings.json 파일 안에 아래 내용을 복 붙 해준다

~~~json
// Place your key bindings in this file to override the defaults
[
  // build
  {
    "key": "ctrl+b",
    "command": "workbench.action.tasks.build",
  },
  // run
  {
    "key": "ctrl+r",
    "command": "workbench.action.tasks.test"
  },
  // replace keys for overlapping tasks
  {
    "key": "ctrl+shift+b",
    "command": "workbench.action.toggleSidebarVisibility"
  },
  //
  {
    "key": "ctrl+shift+r",
    "command": "workbench.action.openRecent"
  },
]
~~~

![07](/assets/img/blog/ubuntu/2022-01-19/07.png)

<br/>

## 4. 확인

다시 main.cpp로 돌아와서

**Ctrl+b : 빌드**

**Ctrl+r : 실행**

아래와 같은 명령어가 잘 되는지 확인한다

<br/>

**Ctrl+B**를 눌렀을 때, /bin 파일에 objective파일이 생기면서 빌드한다

![08](/assets/img/blog/ubuntu/2022-01-19/08.png)

<br/>

**Ctrl+R**을 눌렀을 때, vscode 아래 쪽에 위치한 터미널 창에 코드 내용이 출력된다

![09](/assets/img/blog/ubuntu/2022-01-19/09.png)