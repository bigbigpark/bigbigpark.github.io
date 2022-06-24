---
title: "[C++] Socket server"

toc: true
toc_sticky: true
category: cpp_useful
tags: [ros, socket, server, client, communication, linux, ubuntu]
---

C++ 아니고 C로 소켓통신 작성하기! <br/>

## 문제 정의

서버 역할: `read` <br/>
원하는 메세지를 read 해보자

## 코드

~~~C

void error_handling(const char *message)
{
  fputs(message, stderr);
  fputc('\n', stderr);
  exit(1);
}

int serv_sock = -1;

// 소켓 FD 생성
serv_sock = socket(PF_INET, SOCK_STREAM, 0);

if (serv_sock == -1)
{
  error_handling("socket() error");
}

// 주소 정보 초기화
struct sockaddr_in serv_addr, clnt_addr;
memset(&serv_addr, 0, sizeof(serv_addr));
serv_addr.sin_family = AF_INET;
serv_addr.sin_addr.s_addr = inet_addr(ip);
serv_addr.sin_port = htons(port);


// 소켓에 위에서 생성한 주소 정보를 할당
if (bind(serv_sock, (struct sockaddr*) &serv_addr, sizeof(serv_addr)) == -1)
{
  error_handling("bind() error");
}

// 클라이언트가 연결 요청이 가능하도록 5크기의 대기실 생성
if (listen(serv_sock, 2) == -1)
{
  error_handling("listen() error");
}

// accept() 함수 호출을 해서 실제 데이터를 보낼 수 있는 소켓을 생성
socklen_t clnt_addr_size = sizeof(clnt_addr);
int clnt_sock = accept(serv_sock, (struct sockaddr*)& clnt_addr, &clnt_addr_size);
if (clnt_sock == -1)
{
  error_handling("accept() error");
}    

// 성공적으로 서버에게서 메시지를 받아오면
// 0을 반환하고 실패하면 -1을 반환한다.
char message[30];
int str_len;
while(0)
{
  str_len = read(clnt_sock, message, sizeof(message)-1);
  printf("Send message to server: %s \n", message);
}
~~~

## Reference
* ["[Linux]TCP 서버/클라이언트 구현"](https://const-human.tistory.com/12)