# [C++] Quaternion to Euler

많이 쓴다...

하지만 잘 안 외워져서 일단 블로그에 남긴다

<br/>

## [C++] quat to euler

~~~c++
#include <tf/tf.h>

tf::Quaternion q(
        msg->pose.pose.orientation.x,
        msg->pose.pose.orientation.y,
        msg->pose.pose.orientation.z,
        msg->pose.pose.orientation.w);
tf::Matrix3x3 m(q);
double roll, pitch, yaw;
m.getRPY(roll, pitch, yaw);
~~~

