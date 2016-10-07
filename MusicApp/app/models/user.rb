class User < ActiveRecord::Base
  validates :email, :password_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many :notes,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "Note"

  attr_reader :password

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, pw)
    @user = User.find_by(email: email)
    return nil unless @user
    @user.is_password?(pw) ? @user : nil
  end

  def self.find_by_session_token(session_token)
    User.find_by(session_token: session_token)
  end

end
