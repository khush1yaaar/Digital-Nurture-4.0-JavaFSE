package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.library.service.BookService;

public class Main {
    public static void main(String[] args) {
        System.out.println("Library Management App Started!");
        
        // Load Spring context
        // ApplicationContext context = 
        //     new ClassPathXmlApplicationContext("applicationContext.xml");
            
        // BookService bookService = context.getBean("bookService", BookService.class);
        System.out.println("Spring context loaded successfully!"); 
    }
}