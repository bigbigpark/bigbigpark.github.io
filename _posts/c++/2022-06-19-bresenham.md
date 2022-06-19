---
title: "[C++] Bresenham Algorithm"

toc: true
toc_sticky: true
category: cpp_useful
tags: [ros, line, bresenham, algorithm, ]
---

~~~c++
int dx =  abs(x1 - x0), sx = x0 < x1 ? 1 : -1;
int dy = -abs(y1 - y0), sy = y0 < y1 ? 1 : -1;
int err = dx + dy, e2;
int xp = x0, yp = y0;
int tx, ty;

int r0_sq = r*r, r1_sq;
while (true)
{
  r1_sq = (xp-x0)*(xp-x0) + (yp-y0)*(yp-y0);
  if ( (xp == x1 && yp == y1) || r1_sq >= r0_sq || !isInside(xp, yp) )
  {
    tx = xp;
    ty = yp;
    break;
  }
  else if (grid_map[xp][yp] == 100)
  {
    tx = xp;
    ty = yp;
    break;
  }

  // Last point in the one scan
  if (temp_count == index)
  {
    trace("(xp, yp): ({}, {})", xp, yp );
  }

  // Plot
  if (isInside(xp, yp))
  {
    // if (temp_count == index)
    {
      grid_map[xp][yp] += (sensor_model_l_free_ - sensor_model_l_prior_);
    }
  }

  e2 = 2*err;
  if (e2 >= dy)
  {
    err += dy;
    xp += sx;
  }
  if (e2 <= dx)
  {
    err += dx;
    yp += sy;
  }
}
~~~