package week1.DesignPatternAndPrinciples.Exercise1;

public class LoggerTest {
    public static void main(String[] args) {
        // Get logger instances
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();
        
        // Test if both references point to the same object
        System.out.println("Are logger1 and logger2 the same instance? " + (logger1 == logger2));
        
        // Test logging functionality
        logger1.logInfo("Application started");
        logger2.logWarning("Low memory detected");
        logger1.logError("Failed to connect to database");
        
        // Test in multi-threaded environment
        Runnable task = () -> {
            Logger logger = Logger.getInstance();
            logger.logInfo("Logging from thread: " + Thread.currentThread().getId());
        };
        
        // Create multiple threads
        Thread thread1 = new Thread(task);
        Thread thread2 = new Thread(task);
        Thread thread3 = new Thread(task);
        
        thread1.start();
        thread2.start();
        thread3.start();
    }
}
