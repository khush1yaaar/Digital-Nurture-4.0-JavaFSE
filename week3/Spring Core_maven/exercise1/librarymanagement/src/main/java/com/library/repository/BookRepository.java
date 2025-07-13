package week3.exercise1.librarymanagement.src.main.java.com.library.repository;

import java.util.ArrayList;
import java.util.List;

import com.library.model.Book;

public class BookRepository {
    // In-memory book storage (replace with database later)
    private final List<Book> books = new ArrayList<>();

    // Add a new book
    public void addBook(Book book) {
        books.add(book);
    }

    // Find book by ID
    public Book findById(String id) {
        return books.stream()
                .filter(book -> book.getId().equals(id))
                .findFirst()
                .orElse(null);
    }

    // Get all books
    public List<Book> getAllBooks() {
        return new ArrayList<>(books); // Return copy to prevent external modification
    }

    // Remove a book
    public boolean removeBook(String id) {
        return books.removeIf(book -> book.getId().equals(id));
    }

    // Update book details
    public void updateBook(Book updatedBook) {
        books.replaceAll(book -> 
            book.getId().equals(updatedBook.getId()) ? updatedBook : book);
    }
}