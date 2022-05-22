class RoomsController < ApplicationController
    def index
        rooms = Room.all
        p "Is rooms nil? #{rooms.nil?}"
        render json:rooms
    end

    def show
        room = Room.find(params[:id])
        render json:room
    end
end