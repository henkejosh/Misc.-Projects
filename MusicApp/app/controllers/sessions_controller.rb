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
    @user = User.find_by_session_token(session[:session_token])
    @user.reset_session_token!
    redirect_to new_session_url
  end
end
