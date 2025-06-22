# Document Management System - Factory Method Pattern Implementation

## Overview
This Java project demonstrates the implementation of the Factory Method design pattern for creating different types of documents (Word, PDF, Excel) in a document management system. The pattern encapsulates document creation logic while allowing flexibility for adding new document types.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Implementation Details](#implementation-details)
3. [How to Compile and Run](#how-to-compile-and-run)
4. [Design Pattern Benefits](#design-pattern-benefits)
5. [Extending the System](#extending-the-system)

## Project Structure

```
FactoryMethodPatternExample/
└── src/
    ├── week1/
    │   ├── DesignPatternAndPrinciples/
    │   │   ├── Exercise2/
    │   │   │   ├── documents/            # Document interfaces and implementations
    │   │   │   │   ├── Document.java
    │   │   │   │   ├── WordDocument.java
    │   │   │   │   ├── PdfDocument.java
    │   │   │   │   └── ExcelDocument.java
    │   │   │   ├── factories/            # Factory classes
    │   │   │   │   ├── DocumentFactory.java
    │   │   │   │   ├── WordDocumentFactory.java
    │   │   │   │   ├── PdfDocumentFactory.java
    │   │   │   │   └── ExcelDocumentFactory.java
    │   │   │   └── Main.java             # Demonstration class
```

## Implementation Details

### Document Interface
```java
public interface Document {
    void open();
    void save();
    void close();
}
```

### Concrete Document Implementations
- `WordDocument.java`: Implements Word document operations
- `PdfDocument.java`: Implements PDF document operations
- `ExcelDocument.java`: Implements Excel document operations

### Factory Classes
- `DocumentFactory.java`: Abstract factory class with template method
- Concrete factories (`WordDocumentFactory`, `PdfDocumentFactory`, `ExcelDocumentFactory`) implement the creation logic

## How to Compile and Run

1. **Compile all Java files**:
```bash
javac -d bin/ src/week1/DesignPatternAndPrinciples/Exercise2/documents/*.java 
javac -d bin/ src/week1/DesignPatternAndPrinciples/Exercise2/factories/*.java 
javac -d bin/ src/week1/DesignPatternAndPrinciples/Exercise2/Main.java
```

2. **Run the program**:
```bash
java -cp bin/ week1.DesignPatternAndPrinciples.Exercise2.Main
```

3. **Expected Output**:
```
Processing Word Document:
Opening Word document
Saving Word document
Closing Word document
```

## Design Pattern Benefits

1. **Loose Coupling**: Client code depends on abstractions (interfaces) rather than concrete implementations
2. **Single Responsibility**: Each class has one clear responsibility
3. **Open/Closed Principle**: Easy to add new document types without modifying existing code
4. **Centralized Creation Logic**: Document creation is encapsulated in factory classes
5. **Consistent Interface**: All documents follow the same interface

## Extending the System

To add a new document type (e.g., `TextDocument`):

1. Create new document class:
```java
public class TextDocument implements Document {
    // implement methods
}
```

2. Create corresponding factory:
```java
public class TextDocumentFactory extends DocumentFactory {
    public Document createDocument() {
        return new TextDocument();
    }
}
```

3. Use the new factory in client code:
```java
DocumentFactory textFactory = new TextDocumentFactory();
textFactory.processDocument();
```

No existing code needs to be modified to add this new document type.