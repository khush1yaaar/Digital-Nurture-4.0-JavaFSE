package week1.DataStructureAndAlgorithm.Exercise7;

import java.util.HashMap;
import java.util.Map;

public class FinancialForecaster {
    private static Map<String, Double> cache = new HashMap<>();
    
    // Basic recursive implementation
    public static double calculateFutureValue(double currentValue, double growthRate, int periods) {
        if (periods == 0) {
            return currentValue;
        }
        double nextValue = currentValue * (1 + growthRate);
        return calculateFutureValue(nextValue, growthRate, periods - 1);
    }
    
    // Memoized version
    public static double calculateFutureValueMemoized(double currentValue, double growthRate, int periods) {
        String key = currentValue + "|" + growthRate + "|" + periods;
        
        if (cache.containsKey(key)) {
            return cache.get(key);
        }
        
        if (periods == 0) {
            return currentValue;
        }
        
        double result = calculateFutureValueMemoized(
            currentValue * (1 + growthRate), 
            growthRate, 
            periods - 1
        );
        
        cache.put(key, result);
        return result;
    }
    
    // Iterative version
    public static double calculateFutureValueIterative(double currentValue, double growthRate, int periods) {
        double result = currentValue;
        for (int i = 0; i < periods; i++) {
            result *= (1 + growthRate);
        }
        return result;
    }
    
    // Tail recursive version (not optimized in Java but shown for completeness)
    public static double calculateFutureValueTailRec(double currentValue, double growthRate, int periods) {
        return tailRecHelper(currentValue, growthRate, periods, currentValue);
    }
    
    private static double tailRecHelper(double initial, double rate, int remaining, double accumulator) {
        if (remaining == 0) {
            return accumulator;
        }
        return tailRecHelper(initial, rate, remaining - 1, accumulator * (1 + rate));
    }
}