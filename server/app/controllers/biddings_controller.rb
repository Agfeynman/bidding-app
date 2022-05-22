class BiddingsController < ApplicationController
    def index
        biddings = Bidding.all
        render json:biddings
    end

    def create
        bidding = Bidding.new(bidding_params)
        if bidding.save
            serialized_data = ActiveModeSerializers::Adapter::Json.new(
                BiddingSerializer.new(bidding)
            ).serializable_hash
            ActionCable.server.broadcast 'biddings_channel', serialized_data
            head :ok
        end
    end

    private

    def bidding_params
        params.require(:bidding).permit(:title)
    end
end
