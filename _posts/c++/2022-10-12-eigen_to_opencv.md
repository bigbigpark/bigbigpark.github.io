---
title: "[C++] Eigen to OpenCV conversion 변환"
category: cpp_useful
tags: [c++, cpp, eigen, vector, opencv, mat, image, conversion]
---

Eigen::MatrixXf을 cv::Mat으로 변환해보자<br/>


## Eigen to CV

~~~c++
#include <opencv2/core/eigen.hpp>

int num_rows = 100;
int num_cols = 100;
Eigen::MatrixXf mat(num_cols, num_rows);

cv::Mat image(num_cols, num_rows, CV_32FC1);
cv::eigen2cv(mat, image);
~~~

## CV to Eigen
~~~c++
void cv2eigen(const Mat& src, Eigen::Matrix<_Tp, _rows, _cols, _options, _maxRows, _maxCols>& dst)
~~~

## Reference
* [Eigen support](https://docs.opencv.org/3.4/d0/daf/group__core__eigen.html)
* [OpenCV CV::Mat and Eigen::Matrix](https://stackoverflow.com/questions/14783329/opencv-cvmat-and-eigenmatrix)