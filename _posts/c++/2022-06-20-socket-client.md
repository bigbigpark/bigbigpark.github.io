---
title: "[C++] Socket client"

toc: true
toc_sticky: true
category: cpp_useful
tags: [ros, socket, server, client, communication, linux, ubuntu]
---

C++ 아니고 C로 소켓통신 작성하기! <br/>

소켓통신 클라이언트 코드 짜기 <br/>


## 문제 정의

클라이언트 역할: `write` <br/>
원하는 메세지를 write 해보자 !!

## 코드

~~~c
// C++ TCP 클라이언트 프로그램
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <sys/socket.h>

void error_handling(const char *message)
{
  fputs(message, stderr);
  fputc('\n', stderr);
  exit(1);
}
int main(int argc, char* argv[])
{
  int sock = socket(PF_INET, SOCK_STREAM, 0);
  if(sock == -1)
      error_handling("socket() error");

  // 클라이언트와 마찬가지로 주소정보를 초기화
  struct sockaddr_in serv_addr;
  memset(&serv_addr, 0, sizeof(serv_addr));
  serv_addr.sin_family=AF_INET;
  serv_addr.sin_addr.s_addr=inet_addr("192.168.0.18");
  serv_addr.sin_port=htons(atoi("23000"));
  
  // 서버의 주소정보로 클라이언트 소켓이 연결요청을 한다.
  if(connect(sock, (struct sockaddr*)&serv_addr, sizeof(serv_addr))==-1) 
  {
    error_handling("connect() error!");
  }

  // Send a message
  char msg[] = "Hello world!";
  while (1)
  {
    write(sock, msg, sizeof(msg));
    printf("Send message to server: %s \n", msg);
    sleep(1);
  }

  close(sock);
  return 0;
}
~~~

## Reference
* ["[Linux]TCP 서버/클라이언트 구현"](https://const-human.tistory.com/12)