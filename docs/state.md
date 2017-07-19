{
  session: {
    current_user: {
      id: 1,
      name: 'Ryan'
    }
    errors: []
  }

  users: {
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
      about: "I am..."
      hosting: true
    }
    errors: []
  }

  current_user: {
    id: 1
  }

  tree_houses: {
    1: {
      id: 1,
      name: 'Eagle Nest',
      location: [37.774, -122.431],
      image_url: 'image_url',
      reviews: [3, 7, 9],
      user_id: 5
    }
    errors: []
  }

  current_tree_house: {
    id: 1
  }

  bookings: {
    1: {
      id: 1
      tree_house_id: 2,
      user_id: 4,
      dates: ['08/19/2017', '08/22/2017'],
      confirmed: true
    }
    errors: []
  }

  current_booking: {
    id: 1
  }

  reviews: {
    1: {
      id: 1,
      user_id: 3,
      tree_house_id: 4,
      text: "This tree house..."
    }
  }

  current_review: {
    id: 1
  }
}
