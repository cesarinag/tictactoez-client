curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{

  }'

# {"game":
# {
#   "cells":["","","","","","","","",""],
#   "over":false,
#   "_id":"5fd166223c69250017c49737",
#   "owner":"5fd0e2ae3c69250017c4938e",
#   "createdAt":"2020-12-10T00:04:50.693Z",
#   "updatedAt":"2020-12-10T00:04:50.693Z",
#   "__v":0
# }
# }
  echo
