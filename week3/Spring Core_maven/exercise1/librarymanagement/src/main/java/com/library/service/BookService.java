package week3.exercise1.librarymanagement.src.main.java.com.library.service;

import com.library.model.Book;
import com.library.repository.BookRepository;
import java.util.List;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Service methods
    public void addBook(Book book) {
        bookRepository.addBook(book);
    }

    public Book findBookById(String id) {
        return bookRepository.findById(id);
    }

    public List<Book> getAllBooks() {
        return bookRepository.getAllBooks();
    }

    public boolean removeBook(String id) {
        return bookRepository.removeBook(id);
    }

    public void updateBook(Book book) {
        bookRepository.updateBook(book);
    }
}