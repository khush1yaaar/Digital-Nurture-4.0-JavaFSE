package week1.DesignPatternAndPrinciples.Exersice2.factories;
import week1.DesignPatternAndPrinciples.Exersice2.documents.Document;
import week1.DesignPatternAndPrinciples.Exersice2.documents.ExcelDocument;


public class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return (Document) new ExcelDocument();
    }
}