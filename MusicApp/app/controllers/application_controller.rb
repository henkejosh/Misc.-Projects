class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def login!(user)
    user.reset_session_token!
    @current_user = user
    session[:session_token] = user.session_token
  end

  def require_login
    unless logged_in?
      redirect_to new_session_url
    end
  end

  def logged_in?
    current_user
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logout!(user)
    raise "You're not signed in!" unless @current_user
    @current_user.reset_session_token!
    # session[:session_token] = nil
    redirect_to new_session_url
  end
end
