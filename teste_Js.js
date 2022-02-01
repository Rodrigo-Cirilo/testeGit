// $("#botao").click(()=>{
   
//   $("#botao").text("clicado");
// })


//const fetch = require('node-fetch');

fetch('http://worldtimeapi.org/api/timezone/Europe/Amsterdam')
  .then(function(response) {
    return response.json(); // converts response to json
  })
  .then(function(data) {
    // do something with data here
     console.log(data)
     console.log(dados);
     console.log(dados);
  });