    const btnComprar = document.querySelector('#btnComprar')
    const btnCancelar = document.querySelector("#btnCancelarCompra")
    const btnVisualizar = document.querySelectorAll(".btnVisualizar")
    
    btnComprar.addEventListener('click', () => {
       
    Swal.fire({
        title: 'Felicitaciones!',
        icon: "success",
        text: "Su compra fue realizada con exito!",
        confirmButtonText: 'Seguir comprando',
        timer: 3500,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    })
    
    
    
    btnCancelar.addEventListener("click", () => {
    
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
      
      swalWithBootstrapButtons.fire({
        title: 'Esta seguro que desea cancelar su compra?',
        text: "Sus productos seran eliminados",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, quiero cancelar',
        cancelButtonText: 'No, cancelar esta accion',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Sus productos fueron removidos.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Accion cancelada',
            'Sus productos siguen guardados',
            'error'
          )
        }
      })
    })
    
    
    Toastify({
        text: "Bienvenido, no te olvides de revisar nuestras ofertas!",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "left", 
        stopOnFocus: true, 
        style: {
          color: "white",  
          background: "linear-gradient(to right, #ff6600, #ff704d)",
        },
        onClick: function(){}
      }).showToast();
    
    
    btnVisualizar.forEach(e => {
      e.addEventListener("click", () => {

        Toastify({
          text: "Esta seccion se encuentra en mantenimiento (haga click AQUI para redireccionar la pagina.)",
          duration: 4000,
          destination: "file:///C:/Users/Pc/Desktop/Javascript/librerias_javierMoravcik/index.html",
          newWindow: true,
          close: true,
          gravity: "bottom",
          position: "center",
          stopOnFocus: true,
          style: {
              color: "white",
              background: "linear-gradient(to right, #ff0000, #800000)",
          },
          onclick: function(){}
        }).showToast();
      })
    })