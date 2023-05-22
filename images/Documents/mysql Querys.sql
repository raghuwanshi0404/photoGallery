create database CustomerData;
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

insert into Customer(customer_id,Firstname,Lastname,Middlename,Customer_city,Customer_contact_no,Occupation,Customer_date_of_birth)
            values('1','ram','Kapoor','sing','Indore','12345678910','student','1990-08-06');
                  
            
            
            select * from Customer;


