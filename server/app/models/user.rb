class User < ApplicationRecord
    has_many :bids
    has_many :rooms, through: :bids
    has_one_attached :avatar
    has_secure_password
    validates :username, uniqueness: true, presence: true
end