document.getElementById("jsonBtn").addEventListener("click", cargarJSON);


function cargarJSON() {

    fetch("./productosOferta.json")
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      let html = "";
      data.forEach(function(articulo){
         html += `
          <li><strong class="strongFetch">${articulo.articulo}</strong> ${articulo.detalles} / - <strong class="precioStrong">${articulo.precio}</strong> - <button class="btn btn-success">Comprar</button></li>
          
          <hr>
         `; 
      })
      document.getElementById("resultado2").innerHTML = html;      
    })
}

