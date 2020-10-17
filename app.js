const $btn = document.querySelector("#btn");
const $inputSearch = document.querySelector("#inputSearch");


$btn.addEventListener('click', function (e) {
  e.preventDefault();
  const $userInput = $inputSearch.value.trim().toLowerCase();
  //  clears search field
  document.querySelector('#inputSearch').value = '';


  // API CALL
  const baseUrl = (`https://pokeapi.co/api/v2/pokemon/${$userInput}/`);

  $.ajax({
    url: baseUrl,
    method: 'GET',
  }).then(function (response) {
    const image = response.sprites.front_default;
    const name = response.name;
    console.log(image);
    console.log(name);

  }).then(function (error) {
    if (error) {
      console.log(error);
    }

  });

})




