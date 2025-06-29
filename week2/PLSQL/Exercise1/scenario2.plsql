SET SERVEROUTPUT ON;


ALTER TABLE Customers ADD IsVIP VARCHAR2(10);

BEGIN
  FOR res IN (
    SELECT CustomerID, Name, Balance FROM Customers
  ) LOOP
    IF res.Balance > 10000 THEN
      UPDATE Customers
      SET IsVIP = 'TRUE',
          LastModified = SYSDATE
      WHERE CustomerID = res.CustomerID;

      DBMS_OUTPUT.PUT_LINE(res.Name || ' (CustomerID: ' || res.CustomerID || ') is now marked as VIP.');
    ELSE
      UPDATE Customers
      SET IsVIP = 'FALSE',
          LastModified = SYSDATE
      WHERE CustomerID = res.CustomerID;

      DBMS_OUTPUT.PUT_LINE(res.Name || ' (CustomerID: ' || res.CustomerID || ') is not eligible for VIP.');
    END IF;
  END LOOP;
END;
/