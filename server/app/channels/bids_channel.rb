class BidsChannel < ApplicationCable::Channel
  def subscribed
    bidding = Bidding.find(params[:bidding])
    stream_for bidding
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
