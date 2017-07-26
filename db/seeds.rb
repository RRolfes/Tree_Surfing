# User.create(
#   full_name: '',
#   email: '',
#   password: '',
#   city: '',
#   state: '',
#   country: '',
#   occupation: '',
#   image_url: '',
#   age: ,
#   gender: 'Male',
#   about: '',
#   host:
# )

# TreeHouse.create!(
#   user_id: user1.id,
#   lat: ,
#   lng: ,
#   name: '',
#   city: '',
#   state: '',
#   country: '',
#   image_url: '',
#   description: ''
# )

User.destroy_all
TreeHouse.destroy_all

ActiveRecord::Base.transaction do
  user1 = User.create!(
    full_name: 'Ryan Rolfes',
    email: 'RyanMRolfes@gmail.com',
    password: 'password',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    occupation: 'Software Developer',
    image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/119/medium/Ryan_Rolfes.jpg',
    age: 25,
    gender: 'Male',
    about: 'Tree house aficionado!',
    host: true
  )

  user2 = User.create!(
    full_name: 'Guest',
    email: 'Guest@TreeSurfing.com',
    password: 'password',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    occupation: 'Software Development',
    image_url: 'https://s-media-cache-ak0.pinimg.com/236x/21/75/f8/2175f8c734a566dbb151c2a0325cdc57--free-monkey-monkey-monkey.jpg',
    age: 30,
    gender: 'Male',
    about: 'A welcome guest!',
    host: true
  )

  user3 = User.create!(
    full_name: 'John Eagleton',
    email: 'JEagleton@me.com',
    password: 'password',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    occupation: 'Optometrist',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoqqXROdHAlPh3acGl815N0XGZnRrVGskMgoIz_1zW_2jwKC8',
    age: 50,
    gender: 'Male',
    about: 'Proud owner of the Eagle Nest tree house!',
    host: true
  )

  TreeHouse.create!(
    user_id: user3.id,
    lng: -123.006,
    lat: 38.354,
    name: 'Eagles Nest Tree House',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    image_url: 'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg',
    description: 'Coolest place ever!'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lng: -84.388,
    lat: 33.749,
    name: 'Secluded Intown Tree House',
    city: 'Atlanta',
    state: 'Georgia',
    country: 'United States',
    image_url: 'https://a0.muscache.com/im/pictures/21162888/5a0f1151_original.jpg',
    description: 'Awesome TreeHouse in Georgia with lots of windows and a light up bridge!'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lng: -83.029,
    lat: 34.722,
    name: 'Bolt Farm Tree House',
    city: 'Walhalla',
    state: 'South Carolina',
    country: 'United States',
    image_url: 'https://a0.muscache.com/im/pictures/6ef18b6d-d14a-47dc-8e0d-1f2d2b2955a3.jpg',
    description: 'Huge, romantic luxery tree house!'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lat: 37.116,
    lng: -121.917,
    name: 'Vinyard View Tree House',
    city: 'Los Gatos',
    state: 'California',
    country: 'United States',
    image_url: 'https://a0.muscache.com/im/pictures/15661a7c-bfb2-421d-ac06-332e5d28f623.jpg',
    description: 'Treehouse in Vineyard Overlooking Monterey Bay'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lat: -22.863,
    lng: -46.035,
    name: 'Jungle House',
    city: 'Monte Verde',
    state: '',
    country: 'Brazil',
    image_url: 'https://a0.muscache.com/im/pictures/69769498/8b565228_original.jpg',
    description: 'Cozy Tree House in Monte Verde'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lat: 19.431,
    lng: -155.225,
    name: 'Surf Tree',
    city: 'Volcano',
    state: 'Hawaii',
    country: 'United States',
    image_url: 'https://a0.muscache.com/im/pictures/291713/b19c5c33_original.jpg',
    description: 'Treehouse at Kilauea Volcano'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lat: 38.206,
    lng: -122.682,
    name: 'Treehouse at Swallowtail Studio',
    city: 'Peteluma',
    state: 'California',
    country: 'United States',
    image_url: 'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1485986996/campground-photos/e4tahv9qnivihw52ohjv.jpg',
    description: 'Magical, Romantic Treehouse'
  )

  TreeHouse.create!(
    user_id: user1.id,
    lat: 37.794,
    lng: -120.243,
    name: 'Wondernut Farm',
    city: 'Yosemite',
    state: 'California',
    country: 'United States',
    image_url: 'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1465450461/campground-photos/xmuu84zvdnepkzpuucq5.jpg',
    description: 'Nestled into a small cluster of the dominant trees in our landscape our tree platform is built on a multi-trunked interior live oak'
  )

end
