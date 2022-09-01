---
title: Axis-angle to Quaternion 변환

category: cpp_useful
tags: [transform, axis-angle, quaternion, cpp, c++]
---

Axis angle을 Quaternion으로 변환해보자 ! <br/>

## 수식

$$
\begin{align}
& qx = ax \; sin(\frac{angle}{2}) \\
& qy = ay \; sin(\frac{angle}{2}) \\
& qz = az \; sin(\frac{angle}{2}) \\
& qw = con(\frac{angle}{2}) \\
\end{align}
$$

<br/><br/>

$$ where, \\ $$ <br/>
  1) the axis is normalized:  $$ ax^2 + ay^2 + az^2 = 1  \\ $$ <br/>
  2) the quaternion is also normalized : $$ qw^2 + qx^2 + qy^2+qz^2=1 \\ cos(\frac{angle}{2})^2 + ax^2 \; sin(\frac{angle}{2})^2 + ay^2 \; sin(\frac{angle}{2})^2+ az^2 \; sin(\frac{angle}{2})^2 = 1 \\ $$ <br/>


<br/>

