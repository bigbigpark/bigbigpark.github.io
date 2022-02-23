---
layout: post
title: 깃 블로그 로컬 테스트
tags: [install]
---

<br/>

tags: ruby, gem, bundle, git pages, local, test

ref. https://jekyllrb.com/docs/

<br/>

로컬 저장소에서 commit, push를 하면 실제 사이트 반영까지 시간이 좀 걸린다

하지만 우리는 블로그 세세한 내용을 수정하면서 실시간으로 보고 싶은데,

위와 같은 방법은 정말 **시간낭비**!

따라서 로컬에서 테스트하는 방법을 알아보자

<br/>

## Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

첫 번째 루비는 2.6 ~ 2.9 를 추천한다. 왜냐하면 Jekyll 3.X 버전과 Ruby 3.0 버전은 호환이 안된다

-> 이거를 몰라서 많이 고생했다

<br/>

설치는 다음 경로를 참고하자

https://jekyllrb.com/docs/installation/#requirements

<br/>

## Instructions

### 1. Install all prerequisites
1. ruby 설치
2. rubygem 설치
3. gcc g++ make 설치

<br/>

### 2. Install the jekyll and bundler gems

~~~bash
$ gem install jekyll bundler github-pages
~~~

<br/>

### 3. Change directory at your repo.

~~~bash
$ cd ${YOUR_LOCAL_REPOSITORY}
~~~
여기서 GemFile 안에 필요한 gem 파일을 설치 가능함 <br/>

이 경로에서 **bundle install** 입력!


<br/>

### 4. Build the site and make it available on a local server

~~~bash
$ bundle exec jekyll serve
~~~

<br/>

### 5. Browse to http://127.0.0.1:4000 or localhost

<br/>