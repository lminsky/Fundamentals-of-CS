void setup() {
  size(357, 356);
  background(255);

  strokeWeight(3);

  //Left Part
  int left_left = 40;
  int left_right = left_left + 90;
  int left_top = 130;
  int left_spacing = 7;
  line(left_left, left_top, left_left, 312);
  line(left_right, 130, left_right, 312);
  line(left_left, left_top, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);
  line(left_left, left_top+=left_spacing, left_right, left_top);

  //Center Part
  int center_left = left_right;
  int center_top = 130;
  int center_right = center_left + 144;
  int center_spacing = 7;
  line(center_right, center_top-47, center_right, 266);
  line(center_left, center_top, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);
  line(center_left, center_top += center_spacing, center_right, center_top-47);

  //Right Part
  int right_left = center_right;
  int right_right = center_right + 43;
  int right_top = 83;
  int right_bottom = right_top + 182;
  int right_spacing = 9;
  line(right_left, right_top, right_right, right_top-45);
  line(right_left, right_bottom+1, right_right, right_bottom-44);
  line(right_left += right_spacing, right_top -= right_spacing, right_left, right_bottom -= right_spacing);
  line(right_left += right_spacing, right_top -= right_spacing, right_left, right_bottom -= right_spacing);
  line(right_left += right_spacing, right_top -= right_spacing, right_left, right_bottom -= right_spacing);
  line(right_left += right_spacing, right_top -= right_spacing, right_left, right_bottom -= right_spacing);
  line(right_left += right_spacing, right_top -= right_spacing, right_left, right_bottom -= right_spacing);

  //Top Part
  line(85, 82, 225, 38);
  line(225, 38, 317, 38);

  line(40, 130, 85, 82);
  line(50, 130, 100, 79);
  line(60, 130, 116, 74);
  line(70, 130, 131, 69);
  line(80, 130, 147, 64);
  line(90, 130, 163, 59);
  line(100, 130, 178, 54);
  line(110, 130, 194, 49);
  line(120, 130, 210, 44);
  line(130, 130, 225, 39);
  line(147, 124, 235, 40);
  line(166, 118, 245, 40);
  line(182, 112, 255, 40);
  line(198, 106, 265, 40);
  line(215, 100, 275, 40);
  line(230, 95, 286, 40);
  line(247, 90, 295, 40);
  line(262, 85, 307, 40);
}