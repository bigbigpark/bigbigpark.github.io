---
title: "[Linux]Matlab /usr/local/MATLAB/R2021b 접근 불가 에러"

category: error
tags: [matlob, error, linux, binary, previlege, access, ubuntu]
---

매트랩 설치는 superuser로 설치하면 되는데,,, <br/>
그 후에 adds-on 설치할 때 `/usr/local/MATLAB/R2021b` 폴더에 write할 수 없다고 에러가 뜰 경우가 있다 <br/>

말 그대로 권한이 없어서 그런거니 권한을 주자 <br/>

~~~bash
 // 사람마다 다른데 /usr/local/{$매트랩경로} 입력하면 된다.
 // 만약 없다고 뜰 경우 본인이 설치한 매트랩 경로를 넣어주자!
 $ sudo chown -R $USER:$USER /usr/local/MATLAB/R2021b

~~~
