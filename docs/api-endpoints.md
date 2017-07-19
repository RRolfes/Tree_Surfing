# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Session

- `POST /api/session`
- `DELETE /api/session`

### Users

- `GET /api/users/:id`
- `POST /api/users`
- `PATCH /api/users/:id`
- `DELETE /api/users/:id`
- `GET /api/users/:id/tree-houses`

### Tree Houses (References the users table)

- `GET /api/tree-houses`
- `GET /api/tree-houses/:id`
- `POST /api/tree-houses`
- `PATCH /api/tree-houses/:id`
- `DELETE /api/tree-houses/:id`
- ``

### Bookings (Reference the users table)

- `POST /api/bookings`
- `DELETE /api/bookings/:id`
- `Get /api/tree-houses/:id`


### Reviews (References the users and tree_houses tables)

- `GET /api/tree_houses/:id/reviews`
- `POST /api/references`
- `PATCH /api/references/:id`
- `DELETE /api/references/:id`
