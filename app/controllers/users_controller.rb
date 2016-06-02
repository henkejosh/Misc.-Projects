class UsersController < ApplicationController

  def new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save
      render :show
    else
      flash.now[:signup_error] = user.error.message
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end
