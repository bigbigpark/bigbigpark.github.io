# How to install typora on Ubuntu 18.04

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