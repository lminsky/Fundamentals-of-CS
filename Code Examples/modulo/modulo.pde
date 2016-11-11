void setup() {
  
  /*
   * Modulo is represented by the % symbol
   * It is used to figure out the remaineder of a division.
   *
   * This ends up looping from 0 to one less 
   * than whatever you're doing the modulo by
   * i.e If you have x % 5, the output with always
   * be between 0 and 4. If you have x % 50, the
   * output will always be between 0 and 49.
   *
   * This is used all the time, but is probably most used to
   * check if a number is even or odd by performing x % 2.
  */
  
  println(10 % 3);    //Prints out 1 because 10/3 = 3 with 1 remainder
  println(11 % 3);    //Prints out 2 because 11/3 = 3 with 2 remainder
  println(12 % 3);    //Prints out 0 because 12/3 = 4 with 0 remainder
  println(13 % 3);    //Prints out 1 because 13/3 = 4 with 1 remainder
  println(14 % 3);    //Prints out 2 because 14/3 = 3 with 2 remainder
  

}