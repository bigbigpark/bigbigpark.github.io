---
layout: post
title: "[문자열] 공백을 기준으로 자르기"
tags: c++
---

공백을 기준으로 문자열을 잘라보자 <br/>

~~~c++

  #include <sstream>
  #include <vector>
  #include <string>

  int main()
  {
    string name = "alpha bravo charile delta";
    istringstream ss(name);
    
    vector<string> words;
    string word;

    while ( getline(ss, word, ' ') )
      words.push_back(word);
  }

~~~