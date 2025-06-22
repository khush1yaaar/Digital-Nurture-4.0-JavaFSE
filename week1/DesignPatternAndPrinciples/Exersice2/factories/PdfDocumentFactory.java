package week1.DesignPatternAndPrinciples.Exersice2.factories;
import week1.DesignPatternAndPrinciples.Exersice2.documents.PdfDocument;

public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return (Document) new PdfDocument();
    }
}