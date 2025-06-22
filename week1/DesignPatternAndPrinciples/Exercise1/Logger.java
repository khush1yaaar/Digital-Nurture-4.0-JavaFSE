package week1.DesignPatternAndPrinciples.Exercise1;

public class Logger {
    // Private static instance of the class
    private static Logger instance;
    
    // Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger instance created");
    }
    
    // Public static method to get the instance
    public static Logger getInstance() {
        if (instance == null) {
            // Synchronized block for thread safety
            synchronized (Logger.class) {
                if (instance == null) {
                    instance = new Logger();
                }
            }
        }
        return instance;
    }
    
    // Logging methods
    public void logInfo(String message) {
        System.out.println("[INFO] " + message);
    }
    
    public void logError(String message) {
        System.out.println("[ERROR] " + message);
    }
    
    public void logWarning(String message) {
        System.out.println("[WARNING] " + message);
    }
}