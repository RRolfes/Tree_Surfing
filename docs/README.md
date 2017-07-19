# TreeSurfing

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://www.herokuapp.com
[trello]: trello

## Minimum Viable Product

TreeSurfing is a web application inspired by CouchSurfing built using Ruby on Rails and React/Redux. Users can book stays in tree houses in cities all over the world. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, (and guest/demo login)
- [ ] Tree Houses
- [ ] Bookings
- [ ] Tree House search (by location & availability) & Google Maps on search
- [ ] Reviews
- [ ] [Production README] **Note:** Add link to production README

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md
[sample-state]: sample-state.md

## Implementation Timeline

### Phase 1: Backend setup and front end user authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication.

### Phase 2: Tree houses and users models, APIs, and components (2 days)

**Objective:** Tree houses and Users can be created, read, and destroyed through the API.

### Phase 3: Map model, API, and components (2 days)

**Objective:**  The map displays listings and can be updated for different cities. Tree Houses can be filtered by date availability and selected through the GoogleMaps API.

### Phase 4: Tree House Page and Requests model, API, and components  (2 days)

**Objective:** Tree Houses can be clicked on and have a page showing host details, tree house reviews, and a request to book form.

### Phase 5: Reviews (1 day)

**Objective:** Hosts can have reviews left on them and persisted to the DB.

### Phase 6: - Fix issues, finish styling (1 day)

**Objective:** Finish all pending tasks.

### Bonus Features (TBD)
- [ ] Landing Page
- [ ] Host Profiles
- [ ] User Profiles
- [ ] World Map/Explore All
- [ ] Guest Login/Page
