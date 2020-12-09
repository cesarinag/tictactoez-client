curl "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --include \
  --request DELETE \
  --header "Content-Type: application/jason" \
  --header "Authorization: Bearer ${TOKEN}"

echo
