class BidsController < ApplicationController
    def index
        bids = Bid.all
        render json: bids
    end

    def create
        bid = Bid.new(bid_params)
        room = Room.find(bid_params["room_id"])
        if bid.save
            puts "successfully saved a bid!"
            RoomsChannel.broadcast_to(room, {
                room: RoomSerializer.new(room),
                users: UserSerializer.new(room.users),
                bids: BidSerializer.new(room.bids)
            })
        end
        render json: BidSerializer.new(bid)
    end

    private

    def bid_params
        params.require(:bid).permit(:content, :user_id, :room_id)
    end
end