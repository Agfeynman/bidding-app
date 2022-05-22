class BidSerializer < ActiveModel::Serializer
  attributes :id, :bidding_id, :number, :created_at
end
