use customerdata;
create table Customer(
Customer_id varchar(6),
Firstname varchar(15),
Lastname varchar(15),
Middlename varchar(15),
Customer_city varchar(20),
Customer_contact_no varchar(10),
Occupation varchar(20),
Customer_date_of_birth date
);
insert into Customer(customer_id,Firstname,Lastname,Middlename,Customer_city,Occupation,Customer_date_of_birth)
            values('1','ram','Kapoor','chandra','surat','businessman','1991-09-30'),
                   ('2','anil','gupta','kumar','delhi','doctor','1984-02-28'),
                   ('3','shrey','shah','','lucknow','engineer','1987-08-26'),
                   ('4','mohan','singh','jone','pune','former','1995-07-19'),
                   ('5','rohan','rajput','prakash','katni','student','2000-09-06'),
                   ('6','sita','kesharwani','kumar','patna','nurse','1995-08-14'),
                   ('7','priya','mishra','kumar','panna','singer','1997-11-16'),
                   ('8','ishu','patel','hille','satna','teacher','1996-12-09'),
                   ('9','naman','somvanshi','william','bhopal','engineer','1992-08-07'),
                   ('10','sunita','tiwari','noatika','Indore','businessman','1990-05-12');
                   
                   UPDATE customer SET `Customer_city` = 'mumbai' 
                   WHERE customer_id ='1';
                   
				   DELETE FROM customer 
                   WHERE customer_id = '3';
                   
                   select * from customer;