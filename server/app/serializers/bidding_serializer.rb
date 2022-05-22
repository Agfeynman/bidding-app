class  < ActiveModel::Serializer
  attributes :id, :title
  has_many :bids
end
