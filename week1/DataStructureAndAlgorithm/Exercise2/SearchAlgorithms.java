public class SearchAlgorithms {
    
    // Linear search - O(n) time complexity
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary search - O(log n) time complexity
    public static Product binarySearch(Product[] sortedProducts, int targetId) {
        int low = 0;
        int high = sortedProducts.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            Product currentProduct = sortedProducts[mid];

            if (currentProduct.getProductId() == targetId) {
                return currentProduct;
            } else if (currentProduct.getProductId() < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }
}