---
title: "wgs84 to utm 변환"

category: cpp_useful
tags: [UTM, NMEA, LLA, 위도, 경도, 변환, converter, cpp, c++]
---

(양방향) NMEA to UTM 변환을 알아보자 <br/>

## 전체코드
~~~c++
// Example of using the GeographicLib::UTMUPS class
 
#include <iostream>
#include <iomanip>
#include <exception>
#include <string>
#include <GeographicLib/UTMUPS.hpp>
 
using namespace std;
using namespace GeographicLib;
 
int main() {
  try {
    // See also example-GeoCoords.cpp
    {
      // Sample forward calculation
      double lat = 33.3, lon = 44.4; // Baghdad
      int zone;
      bool northp;
      double x, y;
      UTMUPS::Forward(lat, lon, zone, northp, x, y);
      string zonestr = UTMUPS::EncodeZone(zone, northp);
      cout << fixed << setprecision(2)
           << zonestr << " " << x << " " << y << "\n";
    }
    {
      // Sample reverse calculation
      string zonestr = "38n";
      int zone;
      bool northp;
      UTMUPS::DecodeZone(zonestr, zone, northp);
      double x = 444e3, y = 3688e3;
      double lat, lon;
      UTMUPS::Reverse(zone, northp, x, y, lat, lon);
      cout << lat << " " << lon << "\n";
    }
  }
  catch (const exception& e) {
    cerr << "Caught exception: " << e.what() << "\n";
    return 1;
  }
}
~~~

## Reference
- [GeographicLib](https://geographiclib.sourceforge.io/html/classGeographicLib_1_1UTMUPS.html)