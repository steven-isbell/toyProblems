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
