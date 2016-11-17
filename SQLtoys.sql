-- SQL Basics: Simple WHERE and ORDER BY

SELECT * FROM people WHERE age > 50 ORDER BY age desc;

-- SQL Basics: Simple DISTINCT

SELECT DISTINCT age FROM people;

-- SQL Basics: Simple MIN / MAX

SELECT Min(age) as age_min, Max(age) as age_max FROM people;

-- SQL Basics: Simple SUM

SELECT sum(age) as age_sum from people;

-- 1. Find all active students

SELECT * FROM students WHERE isActive=1;

-- Hello SQL World!

SELECT 'hello world!' AS 'Greeting';

-- SQL Basics: Simple HAVING (OLD)

SELECT * FROM people GROUP BY id HAVING(age > 42);

-- SQL Basics: Simple HAVING

SELECT age, count(age) as total_people FROM people GROUP BY age HAVING count(age) >= 10;

-- SQL Basics: Simple GROUP BY

SELECT age, count(*) as people_count from people group by age;

-- SQL Basics: Create a FUNCTION

CREATE FUNCTION increment (age integer)
  RETURNS integer
  AS 'select age + 1'
  LANGUAGE SQL;

-- SQL Basics: Simple JOIN with COUNT

SELECT people.*, count(toys.id) as toy_count FROM people JOIN toys on toys.people_id = people.id GROUP BY people.id;

-- SQL Basics: Simple JOIN

SELECT products.*, companies.name as company_name FROM products JOIN companies on companies.id = products.company_id;

-- SQL Bug Fixing: Fix the JOIN

SELECT
  j.job_title,
  ROUND(SUM(j.salary)/COUNT(p)::numeric,2)::float as average_salary,
  COUNT(p.id) as total_people,
  ROUND(SUM(j.salary)::numeric,2)::float as total_salary
  FROM people p
  JOIN job j on p.id=j.people_id
  GROUP BY j.job_title
  ORDER BY average_salary desc;
