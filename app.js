const $btn = document.querySelector("#btn");
const $inputSearch = document.querySelector("#inputSearch");




$btn.addEventListener('click', function (e) {
  e.preventDefault();
  const $userInput = $inputSearch.value.trim().toLowerCase();
  console.log($userInput);
  // API CALL
  const baseUrl = (`https://pokeapi.co/api/v2/pokemon/${$userInput}/`);
  $.ajax({
    url: baseUrl,
    method: 'GET',
  }).then(function (response) {
    const image = response.sprites.front_default;
    const name = response.name;

  }).then(function (error) {
    console.log(error);
  });

})




