---
title: "[Python] LiDAR test code"

toc: true
toc_sticky: true
category: python_useful
tags: [lidar, LIDAR, ros, python, py, test]
---

Basic code for the LiDAR test <br/>

## Code

~~~python
#! /usr/bin/env python

import rospy
from sensor_msgs.msg import PointCloud2
from tf.transformations import euler_from_quaternion, quaternion_from_euler
import math

def callback(msg):
  print('---\n[Header]')
  print(' sequence   : {}'.format(msg.header.seq))
  print(' stamp      : {}'.format(msg.header.stamp))
  print(' width      : {}'.format(msg.width))
  print(' height     : {}'.format(msg.height))
  print(' point_step : {}'.format(msg.point_step))
  print(' row_step   : {}'.format(msg.row_step))
  print(' Actual size: {}'.format(msg.row_step*msg.height))
  
  print(' num fields : {}'.format(len(msg.fields)))
  for i in range(len(msg.fields)):
    print('  - {} / {}'.format(msg.fields[i].name, msg.fields[i].offset))
  if msg.is_dense:
    print('Dense')
  else:
    print('Not dense')



if __name__ == "__main__":
  rospy.init_node('lidar_node', anonymous=True)
    
  rospy.Subscriber('/os_cloud_node/points', PointCloud2, callback)

  rospy.spin()
~~~