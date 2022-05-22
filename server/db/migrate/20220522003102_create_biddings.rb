class CreateBiddings < ActiveRecord::Migration[7.0]
  def change
    create_table :biddings do |t|
      t.string :title

      t.timestamps
    end
  end
end
