## Overview
This Java application demonstrates different approaches to financial forecasting using recursive algorithms, with optimizations for performance. The tool calculates future values based on initial amounts and growth rates over specified periods.

## Table of Contents
1. [Algorithms Implemented](#algorithms-implemented)
2. [Time Complexity Analysis](#time-complexity-analysis)
3. [Optimization Techniques](#optimization-techniques)
4. [How to Run](#how-to-run)
5. [File Structure](#file-structure)
6. [Choosing the Right Approach](#choosing-the-right-approach)

## Algorithms Implemented

### 1. Basic Recursive Approach
```java
public static double calculateFutureValue(double currentValue, double growthRate, int periods) {
    if (periods == 0) return currentValue;
    return calculateFutureValue(currentValue * (1 + growthRate), growthRate, periods - 1);
}
```

### 2. Memoized Recursive Approach
```java
private static Map<String, Double> cache = new HashMap<>();

public static double calculateFutureValueMemoized(double currentValue, double growthRate, int periods) {
    String key = currentValue + "|" + growthRate + "|" + periods;
    if (cache.containsKey(key)) return cache.get(key);
    
    if (periods == 0) return currentValue;
    
    double result = calculateFutureValueMemoized(currentValue * (1 + growthRate), growthRate, periods - 1);
    cache.put(key, result);
    return result;
}
```

### 3. Iterative Approach
```java
public static double calculateFutureValueIterative(double currentValue, double growthRate, int periods) {
    double result = currentValue;
    for (int i = 0; i < periods; i++) {
        result *= (1 + growthRate);
    }
    return result;
}
```

## Time Complexity Analysis

| Approach          | Time Complexity | Space Complexity | Stack Overflow Risk |
|-------------------|-----------------|------------------|---------------------|
| Basic Recursive   | O(n)            | O(n)             | High                |
| Memoized          | O(n)            | O(n)             | Medium              |
| Iterative         | O(n)            | O(1)             | None                |

## Optimization Techniques

1. **Memoization**: Caches previously computed results to avoid redundant calculations
2. **Tail Recursion**: Converts recursive calls to iterative processing (though not optimized in Java)
3. **Iterative Approach**: Eliminates recursion completely for better performance
4. **Matrix Exponentiation**: Advanced O(log n) approach (in ForecastOptimizer.java)

## How to Run

1. Compile all Java files:
```bash
javac src/*.java -d bin/
```

2. Run the main application:
```bash
java -cp bin/ Main
```

Example output:
```
Basic recursive forecast: $1628.89 after 10 periods
Memoized forecast: $1628.89 after 10 periods
Iterative forecast: $1628.89 after 10 periods
```

## File Structure

```
financial-forecasting/
└── src/
    ├── Main.java                 # Demo application
    ├── FinancialForecaster.java  # Core forecasting methods
    └── ForecastOptimizer.java    # Advanced optimizations
```

## Choosing the Right Approach

1. **For small datasets (n < 1000)**: Any approach works
2. **For medium datasets (1000 < n < 10,000)**: Memoized or iterative
3. **For large datasets (n > 10,000)**: Always use iterative
4. **For production systems**: Consider:
   - Matrix exponentiation (O(log n) time)
   - Pre-computed growth tables
   - Specialized financial libraries

## Advanced Features

The `ForecastOptimizer.java` includes:
- Variable growth rate calculations
- Matrix exponentiation for logarithmic time complexity
- Seasonal adjustment capabilities

## Performance Tips

1. For repeated calculations with same parameters, use memoization
2. For very large periods, always prefer iterative approach
3. Consider warm-up runs before benchmarking
4. Clear cache between unrelated calculations when using memoization