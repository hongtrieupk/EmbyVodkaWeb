aws dynamodb create-table --cli-input-json file://create-products-dynamodb-table.json --endpoint-url http://localhost:8000

aws dynamodb list-tables --endpoint-url http://localhost:8000

aws dynamodb put-item --table-name Products --item "{ \"sizes\": { \"L\": [ { \"S\": \"XS\" }, { \"S\": \"L\" } ] }, \"salePrice\": { \"N\": \"75\" }, \"price\": { \"N\": \"90\" }, \"imageUrls\": { \"L\": [] }, \"name\": { \"S\": \"T-Shirt Com Tam VN\" }, \"rating\": { \"N\": \"4\" }, \"description\": { \"S\": \"There is no description for now\" }, \"id\": { \"N\": \"999\" }, \"colors\": { \"L\": [ { \"S\": \"red\" }, { \"S\": \"#ccc\" }, { \"S\": \"#7d5a3c\" } ] } }" --endpoint-url http://localhost:8000