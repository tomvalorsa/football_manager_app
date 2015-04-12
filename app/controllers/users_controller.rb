class UsersController < ApplicationController
  require 'mandrill'

  def index
    @users = User.all
    render :json => @users
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create user_params
    if @user.save
      session[:user_id] = @user.id

      # Send user an email upon sign up.
      m = Mandrill::API.new(ENV['MANDRILL_API_KEY'])
      message = {
      :subject=> "Welcome to OFM",
      :from_name=> "The Scout - Online Football Manager",
      :text=>"Hi #{@user.username},

      Welcome to Online Football Manager. Remember to set your team up tactically every day before your scheduled match.

      Best of luck,

      The Scout",
      :to=>[
      {
      :email=> @user.email,
      :name=> @user.username
      }
      ],
      :from_email=>"thescout@ofm.com"
      }
      sending = m.messages.send message


      redirect_to '/pick-league'
    else
      render :new
    end
  end

  def show
    @user = User.find params[:id]
  end

  def edit
    @user = User.find params[:id]
  end

  def update
    @user = User.find params[:id]
    @user.update(
      :profile_image => params["profile_image"]
    )
    render :json => @user
  end

  def destroy
    @user = User.find params[:id]
    @user.destroy
    redirect_to '/manage-users'
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :profile_image)
  end
end
