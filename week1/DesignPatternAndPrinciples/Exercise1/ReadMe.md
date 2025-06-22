# Singleton Pattern Logger Utility - README

## Overview
This Java project demonstrates the implementation of the Singleton design pattern for a logging utility class. The pattern ensures that only one instance of the Logger exists throughout the application lifecycle, providing consistent logging behavior.

## Table of Contents
1. [Implementation Details](#implementation-details)
2. [Project Structure](#project-structure)
3. [How to Run](#how-to-run)
4. [Verification Tests](#verification-tests)
5. [Thread Safety](#thread-safety)
6. [Alternative Implementations](#alternative-implementations)

## Implementation Details

### Key Features
- **Single Instance Guarantee**: Only one Logger instance exists
- **Thread Safety**: Uses double-checked locking for safe multi-threaded access
- **Lazy Initialization**: Instance created only when first needed
- **Global Access**: Provides a static method to access the instance

### Core Components
```java
public class Logger {
    private static Logger instance;
    
    private Logger() {
        System.out.println("Logger instance created");
    }
    
    public static Logger getInstance() {
        if (instance == null) {
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }
    
    // Logging methods...
}
```

## Project Structure

```
SingletonPatternExample/
└── src/
    ├── Logger.java            # Singleton Logger implementation
    └── LoggerTest.java        # Test class for verification
```

## How to Run

1. Compile the project:
```bash
javac src/*.java -d bin/
```

2. Execute the test:
```bash
java -cp bin/ LoggerTest
```

## Verification Tests

The test class verifies:
1. Single instance creation
2. Thread safety under concurrent access
3. Proper logging functionality

**Sample Output:**
```
Logger instance created
Are logger1 and logger2 the same instance? true
[INFO] Application started
[WARNING] Low memory detected
[ERROR] Failed to connect to database
[INFO] Logging from thread: 12
[INFO] Logging from thread: 13
[INFO] Logging from thread: 14
```

## Thread Safety

The implementation ensures thread safety through:
1. **Double-checked locking** pattern
2. **Synchronized block** during instance creation
3. **Lazy initialization** that works correctly in multi-threaded environments

## Alternative Implementations

### 1. Eager Initialization
```java
public class Logger {
    private static final Logger instance = new Logger();
    private Logger() {}
    public static Logger getInstance() { return instance; }
}
```

### 2. Bill Pugh Singleton
```java
public class Logger {
    private Logger() {}
    private static class SingletonHelper {
        private static final Logger INSTANCE = new Logger();
    }
    public static Logger getInstance() {
        return SingletonHelper.INSTANCE;
    }
}
```

### Comparison Table

| Implementation         | Thread Safety | Lazy Loading | Complexity |
|-----------------------|--------------|-------------|------------|
| Double-checked Locking | Yes          | Yes         | Medium     |
| Eager Initialization  | Yes          | No          | Low        |
| Bill Pugh Singleton   | Yes          | Yes         | Low        |

## Best Practices

1. Use the double-checked locking pattern when:
   - You need lazy initialization
   - The singleton is resource-intensive
   - The application is multi-threaded

2. Consider simpler alternatives when:
   - The singleton is lightweight (eager initialization)
   - You're using Java 5+ (Bill Pugh pattern)

3. Always:
   - Make the constructor private
   - Prevent cloning and serialization if needed
   - Document the singleton nature of the class