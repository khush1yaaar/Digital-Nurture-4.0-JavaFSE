package week1.DataStructureAndAlgorithm.Exercise7;

public class ForecastOptimizer {
    // Matrix exponentiation approach for O(log n) time complexity
    public static double calculateFutureValueOptimized(double currentValue, double growthRate, int periods) {
        if (periods == 0) return currentValue;
        
        double result = currentValue;
        double growthFactor = 1 + growthRate;
        double power = growthFactor;
        
        for (int i = periods; i > 0; i /= 2) {
            if (i % 2 == 1) {
                result *= power;
            }
            power *= power;
        }
        
        return result;
    }
    
    // Method with variable growth rates
    public static double calculateWithVariableRates(double currentValue, double[] growthRates, int currentPeriod) {
        if (currentPeriod >= growthRates.length) {
            return currentValue;
        }
        double nextValue = currentValue * (1 + growthRates[currentPeriod]);
        return calculateWithVariableRates(nextValue, growthRates, currentPeriod + 1);
    }
}