import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ProductDatabase {
    private List<Product> productsUnsorted;
    private List<Product> productsSorted;

    public ProductDatabase() {
        productsUnsorted = new ArrayList<>();
        productsSorted = new ArrayList<>();
    }

    public void addProduct(Product product) {
        productsUnsorted.add(product);
        productsSorted.add(product);
        Collections.sort(productsSorted);
    }

    public Product linearSearch(int productId) {
        Product[] productsArray = productsUnsorted.toArray(new Product[0]);
        return SearchAlgorithms.linearSearch(productsArray, productId);
    }

    public Product binarySearch(int productId) {
        Product[] sortedArray = productsSorted.toArray(new Product[0]);
        return SearchAlgorithms.binarySearch(sortedArray, productId);
    }

    public void displayProducts() {
        System.out.println("Unsorted Products:");
        for (Product product : productsUnsorted) {
            System.out.println(product);
        }

        System.out.println("\nSorted Products:");
        for (Product product : productsSorted) {
            System.out.println(product);
        }
    }
}