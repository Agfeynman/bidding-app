class BiddingsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "biddings_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
