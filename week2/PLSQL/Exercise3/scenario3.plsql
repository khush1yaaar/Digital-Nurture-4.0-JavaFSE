
SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE fundTransfer(
from_account IN NUMBER,
to_account   IN NUMBER,
amount       IN NUMBER
) IS
  v_balance NUMBER;
BEGIN

  SELECT Balance INTO v_balance
  FROM Accounts
  WHERE AccountID = from_account
  FOR UPDATE;


  IF v_balance < amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance');
  END IF;

  UPDATE Accounts
  SET Balance = Balance - amount,
  LastModified = SYSDATE
  WHERE AccountID = from_account;

  UPDATE Accounts
  SET Balance = Balance + amount,
  LastModified = SYSDATE
  WHERE AccountID = to_account;

  DBMS_OUTPUT.PUT_LINE('Transfer successful.');

  EXCEPTION
    WHEN NO_DATA_FOUND THEN
      DBMS_OUTPUT.PUT_LINE('One of the accounts does not exist.');
    WHEN OTHERS THEN
      DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);
END;
/

BEGIN
fundTransfer(1, 2, 10000);
END;
/