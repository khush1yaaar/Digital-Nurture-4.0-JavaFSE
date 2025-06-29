create or REPLACE PROCEDURE UpdateEmployeeBonus(
bonus in integer,department_name in varchar
) IS

BEGIN
UPDATE Employees
SET Salary = Salary + (Salary * (bonus/100))
where Department = department_name;

End;
/

DECLARE
BEGIN
UpdateEmployeeBonus(10, 'HR');
end;
/