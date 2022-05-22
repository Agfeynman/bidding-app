class CreateBids < ActiveRecord::Migration[7.0]
  def change
    create_table :bids do |t|
      t.string :number
      t.references :bidding, null: false, foreign_key: true

      t.timestamps
    end
  end
end
