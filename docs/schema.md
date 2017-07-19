# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
full_name       | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
languages       | array     |
city            | string    | not null
country         | string    | not null
age             | string    |
occupation      | string    |
about           | text      |
hosting         | boolean   | not null

Association: has_many tree_houses
Association: has_many bookings (via tree_houses; as host)
Association: has_many bookings (as guest)

## tree_houses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
location        | array     | not null
city            | string    | not null
country         | string    | not null
dates           | array     | not null
confirmed       | boolean   | not null

Association: belongs_to user
Association: has_many bookings

## bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
tree_house_id   | integer   | not null, foreign key (references tree_houses), indexed
dates           | array     | not null
confirmed       | boolean   | not null

Association: belongs_to user
Association: belongs_to tree_house

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
booking_id      | integer   | not null, foreign key (references booking), indexed
user_id         | integer   | not null, foreign key (references users), indexed
title           | text      | not null
comment         | text      | not null

Association: belongs_to user
Association: belongs_to spot
