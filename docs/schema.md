# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
full_name       | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
city            | string    | not null
country         | string    | not null
languages       | array     | 
occupation      | string    |
image_url       | string    |
age             | integer   |
about           | text      |
host            | boolean   | not null

Association: has_many tree_houses
Association: has_many bookings (via tree_houses; as host)
Association: has_many bookings (as guest)

## tree_houses
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
lng             | float     | not null
lat             | float     | not null
city            | string    | not null
country         | string    | not null
image_url       | string    |

Association: belongs_to user
Association: has_many bookings

## bookings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users), indexed
tree_house_id   | integer   | not null, foreign key (references tree_houses), indexed
start_date      | date      | not null
end_date        | date      | not null
confirmed       | boolean   | not null

Association: belongs_to user
Association: belongs_to tree_house

## reviews
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
tree_house_id   | integer   | not null, foreign key (references booking), indexed
user_id         | integer   | not null, foreign key (references users), indexed
title           | string    | not null
comment         | text      | not null

Association: belongs_to user
Association: belongs_to tree_house
