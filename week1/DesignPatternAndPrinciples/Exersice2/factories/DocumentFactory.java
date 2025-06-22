package week1.DesignPatternAndPrinciples.Exersice2.factories;

import week1.DesignPatternAndPrinciples.Exersice2.documents.Document;

public abstract class DocumentFactory {
    public abstract Document createDocument();
    
    public void processDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        doc.close();
    }
}