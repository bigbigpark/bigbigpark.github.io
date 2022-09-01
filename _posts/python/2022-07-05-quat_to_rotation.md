---
title: "[Python] 쿼터니언 to 회전 행렬"

category: python_useful
tags: [python, robotics, quaternion, matrix, rotation, se3]
---

쿼터니언을 회전행렬도 바꿔보자 ! <br/>

수식으로 구해보자 <br/>

## 수식 

$$
R(Q) = 
\begin{bmatrix}
2(q_0^2+q_1^2)-1 & 2(q_1 q_2 - q_0 q_3) & 2(q_1 q_3 + q_0 q_2)\\
2(q_1 q_2 + q_0 q_3) & 2(q_0^2 + q_2^2)-1 & 2(q_2 q_3 - q_0 q_1) \\
2(q_1 q_3 - q_0 q_2) & 2(q_2 q_3 + q_0 q_1) & 2(q_0^2 + q_3^2) -1
\end{bmatrix}
$$

## 코드

~~~python
import numpy as np
 
def quaternion_rotation_matrix(Q):
"""
Covert a quaternion into a full three-dimensional rotation matrix.

Input
:param Q: A 4 element array representing the quaternion (q0,q1,q2,q3) 

Output
:return: A 3x3 element matrix representing the full 3D rotation matrix. 
          This rotation matrix converts a point in the local reference 
          frame to a point in the global reference frame.
"""
# Extract the values from Q
q0 = Q[0]
q1 = Q[1]
q2 = Q[2]
q3 = Q[3]
  
# First row of the rotation matrix
r00 = 2 * (q0 * q0 + q1 * q1) - 1
r01 = 2 * (q1 * q2 - q0 * q3)
r02 = 2 * (q1 * q3 + q0 * q2)
  
# Second row of the rotation matrix
r10 = 2 * (q1 * q2 + q0 * q3)
r11 = 2 * (q0 * q0 + q2 * q2) - 1
r12 = 2 * (q2 * q3 - q0 * q1)
  
# Third row of the rotation matrix
r20 = 2 * (q1 * q3 - q0 * q2)
r21 = 2 * (q2 * q3 + q0 * q1)
r22 = 2 * (q0 * q0 + q3 * q3) - 1
  
# 3x3 rotation matrix
rot_matrix = np.array([[r00, r01, r02],
                        [r10, r11, r12],
                        [r20, r21, r22]])
                        
return rot_matrix
~~~

## Reference
* [How to Convert a Quaternion to a Rotation Matrix](https://automaticaddison.com/how-to-convert-a-quaternion-to-a-rotation-matrix/)