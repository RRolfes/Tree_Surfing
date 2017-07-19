```js
{
  session: {
    current_user: 1
    errors: []
  }

  users: {
    byId: {
      1: {
        id: 1,
        full_name: "Ryan Rolfes",
        email: "RyanMRolfes@gmail.com",
        password_digest: "alsdkjfalkj34223"
        session_token: "akasdhfakj807q36"
        languages: ["English", "Spanish"],
        city: "San Francisco",
        country: "United States",
        age: 25,
        occupation: "Software Developer",
        image_url: "image_url.com"
        about: "I am..."
        host: true,
        bookings: [1, 5, 8],
        tree_houses: [1, 2]
      }
    }
    user_detail: 1
  }



  tree_houses: {
    byId: {
      1: {
        id: 1,
        name: 'Eagle Nest',
        lng: 37.774,
        lat: -122.431,
        image_url: 'image_url',
        reviews: [3, 7, 9],
        user_id: 5
      }
      tree_house_detail: 1
    }
  }


  bookings: {
    byId: {
      1: {
        id: 1
        tree_house_id: 2,
        user_id: 4,
        start_date: 08/19/2017,
        end_date: 08/22/2017
        confirmed: true
      }
    }
  }

  reviews: {
    byId: {
      1: {
        id: 1,
        user_id: 3,
        tree_house_id: 4,
        text: "This tree house..."
      }
    }
  }
}
```
