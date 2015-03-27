require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET to index' do
    before do
      User.create(:username => 'test', :email => 'test@test.com', :password => 'test', :password_confirmation => 'test')
    end

    describe 'as JSON' do
      before do
        get :index, :format => :json
      end

      it 'should respond with a status 200' do
        expect(response).to be_success
        expect(response.status).to eq(200)
      end

      it 'should give content type JSON' do
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe 'user creation' do
    describe 'successful' do
      before do
        User.create(:username => 'test', :email => 'test@test.com', :password => 'test', :password_confirmation => 'test')
      end

      it 'should create a new user in the database' do
        expect(User.all.count).to eq(1)
      end
    end

    describe 'unsuccessful' do
      before do
        User.create(:username => 'test', :email => 'test@test.com')
      end

      it 'should not add a user to the database' do
        expect(User.all.count).to eq(0)
      end
    end
  end
end
