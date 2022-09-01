---
title: "[듀얼부팅]부팅시 바로 윈도우로 부팅된다면?"

category: error
tags: [듀얼부팅, 리눅스, 리눅스 부팅, 윈도우 부팅, 그럽 복구, boot-repair, bootloader, repair, grub]
---

듀얼 부팅시 리눅스 선택 화면 말고 바로 윈도우로 부팅될 때 해결! <br/>

<br/>

우분투 설치했던 USB로 부팅 <br/>
`Try Ubuntu without installing` <br/>

~~~bash
 $ sudo add-apt-repository ppa:yannubuntu/boot-repair
 $ sudo apt-get update
 $ sudo apt install boot-repair
~~~

이후 recommend 적힌거 ㄱㄱ <br/>
