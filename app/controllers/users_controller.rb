class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create user_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to dashboard_path
    else
      render :new
    end

  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation)
  end
end
