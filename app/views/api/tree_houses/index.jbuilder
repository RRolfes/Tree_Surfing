@tree_houses.each do |tree_house|
  json.set! tree_house.id do
    json.partial! 'tree_house', tree_house: tree_house
  end
end
