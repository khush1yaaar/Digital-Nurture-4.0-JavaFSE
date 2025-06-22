package week1.DataStructureAndAlgorithm.Exercise7;

public class Main {
    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.05; // 5% growth per period
        int periods = 10;
        
        // Basic recursive approach
        double futureValue = FinancialForecaster.calculateFutureValue(initialValue, growthRate, periods);
        System.out.printf("Basic recursive forecast: $%.2f after %d periods%n", futureValue, periods);
        
        // Memoized approach
        futureValue = FinancialForecaster.calculateFutureValueMemoized(initialValue, growthRate, periods);
        System.out.printf("Memoized forecast: $%.2f after %d periods%n", futureValue, periods);
        
        // Iterative approach
        futureValue = FinancialForecaster.calculateFutureValueIterative(initialValue, growthRate, periods);
        System.out.printf("Iterative forecast: $%.2f after %d periods%n", futureValue, periods);
    }
}