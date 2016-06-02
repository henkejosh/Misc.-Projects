class SessionsController < ApplicationController

  def create
    # fail
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      redirect_to user_url(@user.id)
    else
      raise "Invalid username or password!"
      render :new
    end
  end

  def new
    # @user = User.new
    render :new
  end

  def destroy
    current_user.session_token = nil
    session[:session_token] = nil
    redirect_to new_user_url
  end
end
