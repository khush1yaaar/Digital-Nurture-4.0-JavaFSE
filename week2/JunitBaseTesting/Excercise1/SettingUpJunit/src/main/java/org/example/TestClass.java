package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestClass {
    @Test
   public  void isCorrect(){
       int res = 2+3;
       assertEquals(res,5);
   }

}