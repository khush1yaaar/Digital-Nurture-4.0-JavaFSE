public class Main {
    public static void main(String[] args) {
        // Create product database
        ProductDatabase db = new ProductDatabase();

        // Add some products (IDs are intentionally out of order)
        db.addProduct(new Product(1003, "Wireless Mouse", "Electronics", 24.99));
        db.addProduct(new Product(1001, "Bluetooth Headphones", "Electronics", 59.99));
        db.addProduct(new Product(1005, "Mechanical Keyboard", "Electronics", 89.99));
        db.addProduct(new Product(1002, "USB-C Cable", "Accessories", 12.99));
        db.addProduct(new Product(1004, "Laptop Stand", "Accessories", 29.99));

        // Display all products
        System.out.println("All Products in Database:");
        db.displayProducts();

        // Perform searches
        System.out.println("\nSearch Results:");

        // Linear search
        System.out.println("\nLinear Search:");
        System.out.println("Search for ID 1001: " + db.linearSearch(1001));
        System.out.println("Search for ID 1005: " + db.linearSearch(1005));
        System.out.println("Search for ID 9999: " + db.linearSearch(9999)); // Not exists

        // Binary search
        System.out.println("\nBinary Search:");
        System.out.println("Search for ID 1001: " + db.binarySearch(1001));
        System.out.println("Search for ID 1005: " + db.binarySearch(1005));
        System.out.println("Search for ID 9999: " + db.binarySearch(9999)); // Not exists
    }
}