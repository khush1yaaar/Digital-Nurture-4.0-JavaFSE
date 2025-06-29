package org.example;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class AssertionTest {
    @Test
   public  void testAssertion(){
        //Assert equals
        assertEquals(5,2+3);

        //AssertTrue
        assertTrue(6 > 4);

        //AssertFalse
        assertFalse(6 < 4);

        //AssertNull
        assertNull(null);

        //Assert not null
        assertNotNull(new Object());
    }

}