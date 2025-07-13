package com.cognizant.spring_learn;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

	public static void main(String[] args) {
		System.out.println("SpringLearnApplication started...");
		displayDate();
    	SpringApplication.run(SpringLearnApplication.class, args);
	}

	public static void displayDate() {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		try {
			Date date = format.parse("31/12/2018");
			System.out.println(date);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
