package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class Main {
    public static void main(String[] args) {
        System.out.println("Library Management App Started!");
        
        try {
            ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
            BookService bookService = context.getBean("bookService", BookService.class);
            bookService.someServiceMethod();

            System.out.println("Dependency injection working successfully!");
        } catch (Exception e) {
            System.err.println("Error starting application: " + e.getMessage());
            e.printStackTrace();
        }
    }
}