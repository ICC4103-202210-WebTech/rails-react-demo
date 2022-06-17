json.extract! event, :id, :name, :description, :start_date, :created_at, :updated_at
json.url api_v1_event_url(event, format: :json)
