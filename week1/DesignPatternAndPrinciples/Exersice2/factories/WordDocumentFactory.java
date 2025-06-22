package week1.DesignPatternAndPrinciples.Exersice2.factories;

import week1.DesignPatternAndPrinciples.Exersice2.documents.WordDocument;

public class WordDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument() {
        return (Document) new WordDocument();
    }
}