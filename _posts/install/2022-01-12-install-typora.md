---
title: 마크다운 에디터 (Typora)

category: install
tags: [install, markdown, editor, free, 마크다운, 에디터, 리눅스, 무료]
---

<br/>

ref.https://typora.io/#linux

<br/>

유명한 markdown editor인 Typora를 설치해보자!

```bash
$ wget -qO - https://typora.io/linux/public-key.asc | sudo apt-key add -

# add Typora's repository
$ sudo add-apt-repository 'deb https://typora.io/linux ./'
$ sudo apt update

# install typora
$ sudo apt install typora
```

<br/>