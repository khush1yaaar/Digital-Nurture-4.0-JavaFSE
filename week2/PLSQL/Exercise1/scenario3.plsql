SET SERVEROUTPUT ON;

BEGIN
  FOR res IN (
    SELECT 
      c.Name,
      c.CustomerID,
      l.LoanID,
      l.EndDate
    FROM 
      Loans l
    JOIN 
      Customers c ON l.CustomerID = c.CustomerID
    WHERE 
      l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE(' Reminder: Dear ' || res.Name || 
                         ' (Customer ID: ' || res.CustomerID || 
                         '), your loan (Loan ID: ' || res.LoanID || 
                         ') is due on ' || TO_CHAR(res.EndDate, 'DD-Mon-YYYY') || 
                         '. Please make necessary arrangements.');
  END LOOP;
END;
/