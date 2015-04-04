class UsersController < ApplicationController
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
