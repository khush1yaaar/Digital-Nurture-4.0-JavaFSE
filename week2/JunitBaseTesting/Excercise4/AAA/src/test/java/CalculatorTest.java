import org.example.Calculator;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp(){
        calculator = new Calculator();
        System.out.println("Set up Completed");
    }


    @Test
    public void testAdd(){
        int res = calculator.add(1,2);
        assertEquals(3, res);
    }

    @After
    public void tearDown(){
        calculator = null;
        System.out.println("Tear down Completed");
    }
}
