class AddEventVenueRefToEvent < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :event_venue, null: false, foreign_key: true
  end
end
