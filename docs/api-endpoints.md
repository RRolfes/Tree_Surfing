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

### Tree Houses (References the users table)

- `GET /api/tree_houses`
- `GET /api/tree_houses/:id`
- `POST /api/tree_houses/:id`
- `DELETE /api/tree_houses/:id`

### Bookings (Reference the users table)

- `GET /api/bookings`
- `GET /api/bookings/:id`
- `POST /api/bookings/:id`

### References (References the users and tree_houses tables)

- `GET /api/references`
- `POST /api/references`
- `DELETE /api/references/:id`
