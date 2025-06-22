package week1.DesignPatternAndPrinciples.Exersice2;

import java.io.PrintStream;

// import javax.swing.text.Document; // Remove this import if your Document is custom
import week1.DesignPatternAndPrinciples.Exersice2.documents.Document;

import week1.DesignPatternAndPrinciples.Exersice2.factories.DocumentFactory;
import week1.DesignPatternAndPrinciples.Exersice2.factories.ExcelDocumentFactory;
import week1.DesignPatternAndPrinciples.Exersice2.factories.PdfDocumentFactory;
import week1.DesignPatternAndPrinciples.Exersice2.factories.WordDocumentFactory;

public class Main {
    public static void main(String[] args) {
        // Create factories
        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        // Create and process documents
        System.out.println("Processing Word Document:");
        wordFactory.processDocument();

        System.out.println("\nProcessing PDF Document:");
        pdfFactory.processDocument();

        System.out.println("\nProcessing Excel Document:");
        excelFactory.processDocument();

        // Alternatively, create documents directly
        Document wordDoc = (Document) wordFactory.createDocument();
        wordDoc.open();
        wordDoc.save();
        // wordDoc.close(); // Uncomment if your Document interface/class has a close() method
        ((PrintStream) wordDoc).close();
    }
}