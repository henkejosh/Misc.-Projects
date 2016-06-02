class User < ActiveRecord::Base
  validates :email, :password_digest, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    session_token = User.generate_session_token
    self.save!
    session_token
  end

  def ensure_session_token
    session_token ||= reset_session_token!
  end

  def password=(pw)
    @password = pw
    password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    BCrypt::Password.new(password_digest).is_password?(pw)
  end

  def self.find_by_credentials(email, pw)
    User.find(email: email, password_digest: BCrypt::Password.create(pw))
  end

end
