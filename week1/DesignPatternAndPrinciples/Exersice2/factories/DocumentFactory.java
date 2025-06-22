package week1.DesignPatternAndPrinciples.Exersice2.factories;

public abstract class DocumentFactory {
    public interface Document {
        void open();
        void save();
        void close();
    }

    public abstract Document createDocument();
    
    public void processDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        doc.close();
    }
}