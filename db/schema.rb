# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150327014405) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "leagues", force: :cascade do |t|
    t.string   "name"
    t.string   "nation"
    t.integer  "size"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "matches", force: :cascade do |t|
    t.integer  "league_id"
    t.string   "home_team"
    t.string   "away_team"
    t.integer  "home_goals"
    t.integer  "away_goals"
    t.string   "home_result"
    t.string   "away_result"
    t.integer  "home_fouls"
    t.integer  "away_fouls"
    t.integer  "home_possession"
    t.integer  "away_possession"
    t.string   "man_of_match"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "players", force: :cascade do |t|
    t.integer  "team_id"
    t.string   "first_name"
    t.string   "last_name"
    t.integer  "age"
    t.string   "nationality"
    t.integer  "attack_rating"
    t.integer  "defence_rating"
    t.integer  "value"
    t.string   "position"
    t.integer  "goals"
    t.integer  "assists"
    t.integer  "yellow_cards"
    t.integer  "red_cards"
    t.integer  "mom_count"
    t.boolean  "injured",        default: false
    t.datetime "created_at",                     null: false
    t.datetime "updated_at",                     null: false
  end

  create_table "tactics", force: :cascade do |t|
    t.integer  "team_id"
    t.string   "formation"
    t.string   "tempo"
    t.string   "playing_style"
    t.string   "passing"
    t.string   "tackling"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "teams", force: :cascade do |t|
    t.integer  "league_id"
    t.integer  "user_id"
    t.string   "name"
    t.integer  "overall_rating"
    t.integer  "league_position"
    t.integer  "total_value"
    t.integer  "bank_balance"
    t.integer  "form_rating"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "email"
    t.text     "password_digest"
    t.boolean  "is_admin",        default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

end