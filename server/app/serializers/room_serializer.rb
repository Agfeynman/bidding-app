class RoomSerializer < ActiveModel::Serializer
  attributes :name, :description
  attribute :users do |room|
    UserSerializer.new(room.users.uniq)
  end
end
