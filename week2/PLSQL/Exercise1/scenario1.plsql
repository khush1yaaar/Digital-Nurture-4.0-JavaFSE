SET SERVEROUTPUT ON;


BEGIN
  FOR res IN (
    SELECT 
      c.CustomerID,
      l.LoanID,
      l.InterestRate,
      TRUNC(MONTHS_BETWEEN(SYSDATE, c.DOB) / 12) AS age
    FROM 
      Customers c
    JOIN 
      Loans l ON c.CustomerID = l.CustomerID
  )
  LOOP
    IF res.age > 60 THEN
      UPDATE Loans
      SET InterestRate = res.InterestRate - 1
      WHERE LoanID = res.LoanID;

      DBMS_OUTPUT.PUT_LINE('Discount applied to Loan ID ' || res.LoanID || ' (Customer Age: ' || res.age || ')');
    END IF;
  END LOOP;
END;