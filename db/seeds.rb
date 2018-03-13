# User.create(
#   first: '',
#   last: '',
#   email: '',
#   password: '',
#   city: '',
#   state: '',
#   country: '',
#   occupation: '',
#   image_url: '',
#   age: ,
#   about: '',
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
#   description: '',
#   rating: '',
#   bed: ,
#   water: ,
#   electricity: ,
#   check_in: '',
#   check_out: '',
#   cancellation_policy: '',
#   on_arrival: '',
#   minimum_nights: '',
#   accepts_bookings: '',
#   toilets: ,
#   showers: ,
#   picnic_table: ,
#   trash: ,
#   wifi:
#   biking: ,
#   boating: ,
#   fishing: ,
#   hiking: ,
#   horseback: ,
#   paddling: ,
#   swimming: ,
#   wildlife_watching: ,
#   climbing: ,
#   price: ,
#   max_guests:
# )



User.destroy_all
TreeHouse.destroy_all

ActiveRecord::Base.transaction do
  user1 = User.create!(
    first: 'Ryan',
    last: 'Rolfes',
    email: 'RyanMRolfes@gmail.com',
    password: 'password',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    occupation: 'Software Developer',
    image_url: 'http://s3-us-west-2.amazonaws.com/aa-progress-tracker/students/avatars/000/002/119/medium/Ryan_Rolfes.jpg',
    age: 26,
    about: 'Tree house aficionado!'
  )

  user2 = User.create!(
    first: 'Guest',
    last: 'Guest',
    email: 'Guest@TreeSurfing.com',
    password: 'password',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    occupation: 'Software Development',
    image_url: 'https://s-media-cache-ak0.pinimg.com/236x/21/75/f8/2175f8c734a566dbb151c2a0325cdc57--free-monkey-monkey-monkey.jpg',
    age: 30,
    about: 'A welcome guest!'
  )

  user3 = User.create!(
    first: 'John',
    last: 'Eagleton',
    email: 'JEagleton@me.com',
    password: 'password',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    occupation: 'Optometrist',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoqqXROdHAlPh3acGl815N0XGZnRrVGskMgoIz_1zW_2jwKC8',
    age: 50,
    about: 'Proud owner of the Eagle Nest tree house!'
  )

  # 1
  treeHouse1 = TreeHouse.create!(
    user_id: user3.id,
    lng: -123.006,
    lat: 38.354,
    name: 'Eagle\'s Nest Tree House',
    city: 'San Francisco',
    state: 'California',
    country: 'United States',
    image_url: 'https://img.hipcamp.com/image/upload/c_limit,f_auto,h_1200,q_60,w_1920/v1476482092/campground-photos/abvqx8gl26smow3uxgk8.jpg',
    description: 'The Eagle\'s Nest Treehouse Farm Stay combines a wilderness experience, sumptuous old growth redwoods, but the comforts of a guest house, with complete privacy and tranquility, yet is within easy driving distance of some of the best that California has to offer. This farm stay and wilderness experience is located on a working ranch on the Sonoma coast. We are less than 90 minutes north of San Francisco and half that from California\'s premier wine-growing regions of the Napa-Sonoma Valleys. We are also smack dab in the middle of some of California\'s most breathtaking coast. You are near enough to civilization, but it feels like you are in the most remote and peaceful spot on earth. During the day you can explore the ranch operations including our ducks, cows, goats and livestock guardian dogs, learn about sustainable organic farming practices and where your (best) food comes from, hike the forest trails and enjoy nature at its best. At night you can see all the stars since SF is over 60 miles away and does not significantly pollute our night sky.',
    rating: '98%',
    bed: true,
    water: true,
    electricity: true,
    check_in: '2pm',
    check_out: '12pm',
    cancellation_policy: 'Moderate',
    on_arrival: 'Meet and greet',
    minimum_nights: 'None',
    accepts_bookings: '1 month out',
    toilets: true,
    showers: true,
    picnic_table: true,
    trash: false,
    wifi: false,
    biking: true,
    boating: true,
    fishing: true,
    hiking: true,
    horseback: true,
    paddling: true,
    swimming: true,
    wildlife_watching: true,
    climbing: false,
    price: 360,
    max_guests: 4
  )

  # 2
  TreeHouse.create!(
  user_id: user1.id,
  lat: 36.362,
  lng: -121.856,
  name: 'Big Sur Luxery Tree House',
  city: 'Big Sur',
  state: 'California',
  country: 'United States',
  image_url: 'http://www.postranchinn.com/wp-content/themes/post_ranch_inn/images/bg-tree-xl.jpg',
  description: 'Big Sur luxery tree house!'
  )

  # 3
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

  # 4
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

  # 5
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

  # 6
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

  # 7
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

  # 4
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

  # 8
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


  #10
  TreeHouse.create!(
    user_id: user1.id,
    lat: 47.538,
    lng: -121.911,
    name: 'Tree House Point',
    city: 'Issaquah',
    state: 'Washington',
    country: 'United States',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Treehouse-Point-c-940x1404.jpg',
    description: 'Just outside Seattle in Issaquah, Washington, is the treehouse B&B named TreeHouse Point.'
  )

  #11
  TreeHouse.create!(
    user_id: user1.id,
    lat: -16.470,
    lng: 145.345,
    name: 'Silky Oaks Lodge',
    city: 'Queensland',
    state: 'Queensland',
    country: 'Australia',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Silky-Oaks-b-940x630.jpg',
    description: 'Silky Oaks Lodge is a luxury tree house in the jungle around Queensland, Australia’s Mossman Gorge River.'
  )

  #12
  TreeHouse.create!(
    user_id: user1.id,
    lat: -36.848,
    lng: 174.754,
    name: 'Yellow Tree House',
    city: 'Aukland',
    state: 'Aukland',
    country: 'New Zeland',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Yellow-Treehouse-Restaurant-a.jpg',
    description: 'The Yellow Tree House is built around a 40-meter-tall redwood tree.'
  )

  #13
  TreeHouse.create!(
    user_id: user1.id,
    lat: 8.777,
    lng: -83.222,
    name: 'Finca Bellavista',
    city: 'Puntarenas',
    state: 'Puntarenas',
    country: 'Costa Rica',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Finca-Bellavista-c.jpg',
    description: 'Finca Bellavista is a sustainable treehouse community in Costa Rica’s rainforest canopies. It’s quite possibly the coolest place on earth.'
  )

  #14
  TreeHouse.create!(
    user_id: user1.id,
    lat: 66.071,
    lng: 20.987,
    name: 'TreeHotel',
    city: 'Harads',
    state: '',
    country: 'Sweden',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Treehotel-f-940x627.jpg',
    description: 'The second-to-none Treehotel in Harads, Sweden, is absolutely incredible.'
  )

  #15
  TreeHouse.create!(
    user_id: user1.id,
    lat: 19.472,
    lng: 109.885,
    name: 'Nanshan Tree House',
    city: 'Hainan',
    state: '',
    country: 'China',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Nanshan-b.jpg',
    description: 'On the island of Hainan in the South China Sea, the Nanshan Treehouse can house up to 20 people. The tree house is also near a Buddhist “theme park,” with a number of pagodas and temples.'
  )

  #16
  TreeHouse.create!(
    user_id: user1.id,
    lat: 35.826,
    lng: 138.333,
    name: 'Teahouse Tetsu',
    city: 'Hokuto City',
    state: '',
    country: 'Japan',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Teahouse-a.jpg',
    description: 'The Teahouse Tetsu is exactly what it sounds like: a teahouse in a tree. It was designed by architect Terunobu Fujimori and sits among the cherry blossoms in Hokuto City, Japan.'
  )

  #17
  TreeHouse.create!(
    user_id: user1.id,
    lat: 11.696,
    lng: 102.531,
    name: 'Soneva Kiri Treepod',
    city: 'Sovena Kiri',
    state: '',
    country: 'Thailand',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Soneva-Kiri-a-940x529.jpg',
    description: 'The Soneva Kiri Resort on Koh Kood, Thailand, has a one-of-a-kind feature: “treepod” dining. Basically, you enter the pod from the jungle floor, then it’s hoisted into the canopy, where you can camp and relax on the deck. Oh, and you can be served a meal by a waiter on a zipline.'
  )

  #18
  TreeHouse.create!(
    user_id: user1.id,
    lat: -39.873,
    lng: -71.913,
    name: 'Nothofagus Spiral',
    city: 'Patagonia',
    state: '',
    country: 'Chile',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Nothofagus-b-940x625.jpg',
    description: 'The Nothofagus Hotel is among the treetops of the Huilo Huilo Biological Reserve in Chilean Patagonia.

'
  )

  #19
  TreeHouse.create!(
    user_id: user1.id,
    lat: 45.0345,
    lng: -79.437,
    name: 'Muskoka Treehouse',
    city: 'Lake Muskoka',
    state: 'Ontario',
    country: 'Canada',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Muskoka-a.jpg',
    description: 'Designer Lukasz Kos’s treehouse in Lake Muskoka, Ontario, is named the 4Treehouse. It was designed to minimize its impact on the surrounding trees. There are three levels to this treehouse, which looks like a Japanese lantern when lit up at night.'
  )

  #20
  TreeHouse.create!(
    user_id: user1.id,
    lat: 35.9856,
    lng: -84.994,
    name: 'The Minister’s Treehouse',
    city: 'Crossville',
    state: 'Tennessee',
    country: 'United States',
    image_url: 'https://d36tnp772eyphs.cloudfront.net/blogs/1/2014/10/Minister%E2%80%99s-Treehouse-a.jpg',
    description: 'The Minister’s Treehouse in Crossville, Tennessee, is possibly the world’s largest treehouse, standing 97 feet tall with over 80 rooms, and also serves as a church. Minister Horace Burgess started building it in 1993 and hasn’t stopped. The house is built around a massive oak with six other oaks used for support.'
  )
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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
  #
  # #10
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

  Review.create!(
    tree_house_id: treeHouse1.id,
    user_id: user1.id,
    title: "Awesome stay!",
    comment: "My girlfriend and I stayed the weekend here and had a blast!"
  )

  Review.create!(
    tree_house_id: treeHouse1.id,
    user_id: user2.id,
    title: "Cool Spot!",
    comment: "Loved the tree house design and all the ammeneties up there!"
  )

  Review.create!(
    tree_house_id: treeHouse1.id,
    user_id: user3.id,
    title: "Lovely Place!",
    comment: "This is my favorite place in the world - hope you love it to!"
  )

  Booking.create!(
    tree_house_id: treeHouse1.id,
    user_id: user1.id,
    start_date: '2017-08-08',
    end_date: '2017-08-11',
    confirmed: true
  )


end
