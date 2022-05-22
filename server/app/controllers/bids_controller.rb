class BidsController < ApplicationController
    def create
        bid = Bid.new(bid_params)
        bidding = Bidding.find(bid_params[:bid_id])
        if bid.save
            serialized_data = ActiveModelSerializers::Adapter::Json.new(
                BidSerializer.new(bid)
            ).serializable_hash
            BidsChannel.broadcast_to bidding, serialized_data
            head :ok
        end
    end

    private

        def bid_params
            params.require(:bid).permit(:number, :bidding_id)
        end
end
