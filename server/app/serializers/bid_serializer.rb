class BidSerializer < ActiveModel::Serializer
  attributes :user_id, :room_id, :ammount
end
