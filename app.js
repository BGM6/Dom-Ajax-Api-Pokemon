const $btn = document.querySelector("#btn");
const $inputSearch = document.querySelector("#inputSearch");
const $container = document.querySelector("#container");
const $h1 = document.createElement("h1");
const $img = document.createElement("img");


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
    $h1.innerText = name.toUpperCase();
    $img.src = image;

    $container.append($h1);
    $container.append($img);

  }).then(function (error) {
    if (error) {
      console.log(error);
    }

  });

})





