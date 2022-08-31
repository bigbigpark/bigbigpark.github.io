---
title: "[Error] No rule to make target 'arch/x86/entry/syscalls/syscall_32.tbl', needed by 'arch/x86/include/generated/uapi/asm/unistd_32.h'. Stop."

toc: true
toc_sticky: true
category: error
tags: [ros, ros2, PX2, autopilot, SITL, gazebo, control, offboard]
---

`No rule to make target 'arch/x86/entry/syscalls/syscall_32.tbl', needed by 'arch/x86/include/generated/uapi/asm/unistd_32.h'. Stop.`가 뜬다면???? <br/>

<br/>

## ROS2를 이용해서 PX4 SITL 돌려보기

3가지 터미널에서 아래 명령어를 각각 입력해보자 <br/>
~~~bash
$ make px4_sitl_rtps gazebo
~~~
~~~bash
$ micrortps_agent -t UDP
~~~
~~~bash
$ ros2 run px4_ros_com offboard_control
~~~

<br/>

## 에러 발생

다음과 같은 에러가 발생하는 경우가 있다 <br/>
~~~bash
make[2]: *** No rule to make target 'arch/x86/entry/syscalls/syscall_32.tbl', needed by 'arch/x86/include/generated/uapi/asm/unistd_32.h'.  Stop.
make[1]: *** [arch/x86/Makefile:217: archheaders] Error 2
make[1]: Leaving directory '/usr/src/linux-headers-5.15.0-46-generic'
make: *** [Makefile:7: default] Error 2

~~~

쉽게 해결하자. ${PWD} 경로가 꼬여서 그런거다 <br/>

<br/>

## 해결!

첫 번째 터미널에 다음을 입력해준다 <br/>
다음과 같이 수정해주자 <br/>

~~~bash
# Before
$(MAKE) -C $(KDIR) M=$(PWD) modules
# After
$(MAKE) -C $(KDIR) M=$(shell pwd) modules
~~~

## Reference
* [No rule to make target `arch/x86/entry/syscalls/syscall_32.tbl’, needed by `arch/x86/entry/syscalls/../../include/generated/asm/](https://itecnote.com/tecnote/no-rule-to-make-target-arch-x86-entry-syscalls-syscall_32-tbl-needed-by-arch-x86-entry-syscalls-include-generated-asm-syscalls_32-h/)
