class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(session[:username], session[:password])
    if user
      session[:session_token] = user.session_token
      redirect_to user_url(user.id)
    else
      raise "Invalid username or password!"
      render :new
    end
  end

  def new
    render :new
  end

  def destroy
  end
end
