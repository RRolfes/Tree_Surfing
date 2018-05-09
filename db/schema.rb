# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180509013327) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "tree_house_id", null: false
    t.date     "start_date",    null: false
    t.date     "end_date",      null: false
    t.boolean  "confirmed",     null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["tree_house_id"], name: "index_bookings_on_tree_house_id", using: :btree
    t.index ["user_id"], name: "index_bookings_on_user_id", using: :btree
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "tree_house_id", null: false
    t.integer  "user_id",       null: false
    t.string   "title",         null: false
    t.text     "comment",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "img_url"
    t.string   "date"
    t.string   "reviewer_name"
    t.integer  "helpfuls"
    t.index ["tree_house_id"], name: "index_reviews_on_tree_house_id", using: :btree
    t.index ["user_id"], name: "index_reviews_on_user_id", using: :btree
  end

  create_table "tree_houses", force: :cascade do |t|
    t.integer  "user_id",             null: false
    t.float    "lat",                 null: false
    t.float    "lng",                 null: false
    t.string   "city",                null: false
    t.string   "country",             null: false
    t.string   "image_url"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.text     "description"
    t.string   "name",                null: false
    t.string   "state"
    t.string   "rating"
    t.boolean  "bed"
    t.boolean  "water"
    t.boolean  "electricity"
    t.string   "check_in"
    t.string   "check_out"
    t.string   "cancellation_policy"
    t.string   "on_arrival"
    t.string   "minimum_nights"
    t.string   "accepts_bookings"
    t.boolean  "toilets"
    t.boolean  "showers"
    t.boolean  "picnic_table"
    t.boolean  "trash"
    t.boolean  "wifi"
    t.boolean  "biking"
    t.boolean  "boating"
    t.boolean  "fishing"
    t.boolean  "hiking"
    t.boolean  "horseback"
    t.boolean  "paddling"
    t.boolean  "swimming"
    t.boolean  "wildlife_watching"
    t.boolean  "climbing"
    t.integer  "price"
    t.integer  "max_guests"
    t.index ["user_id"], name: "index_tree_houses_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "city",            null: false
    t.string   "country",         null: false
    t.string   "occupation"
    t.string   "image_url"
    t.integer  "age"
    t.text     "about"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "state"
    t.string   "first",           null: false
    t.string   "last",            null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  end

end
