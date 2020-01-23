//let socket = io();

// ROOTS DE LAS SECCIONES
let root = document.getElementById('root');
let intro = document.getElementById('introcontainer');
let contact = document.getElementById('contact');


let menuContainer = document.getElementById('menuContainer');
let navbar = document.getElementById('nav-menu-container');


// SECTIONS VIEW
function getNavbar(logged){
  let getMenu = {
    menucliente: ()=>{
      return `<div class="row">

                <div class="col-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Opcion 1</h5>
                    </div>
                    <div class="card-body">
                      Descripción de la opción
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-info">Seleccionar</button>
                    </div>
                  </div>
                </div>

                <div class="col-6">
                  <div class="card">
                    <div class="card-header">
                      <h5>Opcion 1</h5>
                    </div>
                    <div class="card-body">
                      Descripción de la opción
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-info">Seleccionar</button>
                    </div>
                  </div>
                </div>

              </div>`
    }
  };

 
};

function getSectionIntro(show){
  if(show==true){
    let sectionIntro = `
  <section id="intro">
    <div class="intro-text">
        <h2>Bienvenido !!</h2>
        <p>Qué bueno tenerte aquí !!</p>
    </div>

    <div class="product-screens">

        <div class="product-screen-0 wow fadeInUp" data-wow-duration="0.9s">
            <img src="img/product-screen-3.png" alt="">
        </div>
        <div class="product-screen-1 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.9s">
            <img src="img/product-screen-1.png" alt="">
        </div>

        <div class="product-screen-2 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.9s">
            <img src="img/product-screen-2.png" alt="">
        </div>

        <div class="product-screen-3 wow fadeInUp" data-wow-duration="0.9s">
            <img src="img/product-screen-3.png" alt="">
        </div>

        
    </div>
  </section>
    `;

    intro.innerHTML = sectionIntro;
  }else{
    intro.innerHTML = '';
  }  

    
};

function getSectionRoot(view){
  
  switch (view) {
    case 'VALORES':
      let strRoot = `
      <section id="valores">
        <div class="container">
  
          <div class="row">
  
            <div class="col-lg-8 offset-lg-4">
              <div class="section-header wow fadeIn" data-wow-duration="1s">
                <h3 class="section-title">Nuestros Valores</h3>
                <span class="section-divider"></span>
              </div>
            </div>
  
            <div class="col-lg-4 col-md-5 features-img">
              <img src="img/product-features.png" alt="" class="wow fadeInLeft">
            </div>
  
            <div class="col-lg-8 col-md-7 ">
  
              <div class="row">
  
                <div class="col-lg-6 col-md-6 box wow fadeInRight">
                  <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                  <h4 class="title"><a href="">Ética y Confiabilidad</a></h4>
                  <p class="description">
                  Valoramos la honestidad, la lealtad, el respeto, la integridad y la transparencia.
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.1s">
                  <div class="icon"><i class="ion-ios-flask-outline"></i></div>
                  <h4 class="title"><a href="">Servicio Integrado</a></h4>
                  <p class="description">
                  Actuamos con sentido común y de urgencia brindando asistencia por medio del trabajo en equipo.
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.2s">
                  <div class="icon"><i class="ion-social-buffer-outline"></i></div>
                  <h4 class="title"><a href="">Innovación</a></h4>
                  <p class="description">
                  Mantener una mejora continúa resolviendo nuestras oportunidades y alternativas con creatividad, innovación e iniciativa.
                  </p>
                </div>
                <div class="col-lg-6 col-md-6 box wow fadeInRight" data-wow-delay="0.3s">
                  <div class="icon"><i class="ion-ios-analytics-outline"></i></div>
                  <h4 class="title"><a href="">Responsabilidad, Disciplina y Consistencia</a></h4>
                  <p class="description">
                  Comprometidos a trabajar ordenadamente y proactivamente todos los días exigiendo la excelencia por medio de la disciplina, perseverancia y consistencia.
                  </p>
                </div>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
      `
      root.innerHTML = strRoot;      
      break;

      case "":

        break;
  
    default:
      break;
  }
  
};

function getSectionContacto(show){
  if(show==true){
    let str = `
    <div class="container" id="contacto">
      <div class="row wow fadeInUp">

        <div class="col-lg-4 col-md-4">
          <div class="contact-about">
            <h3>Mercados Efectivos</h3>
            <p>Distribución, Logística y Negocios</p>
            <div class="social-links">
              <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>  
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-4">
          <div class="info">
            <div>
              <i class="ion-ios-location-outline"></i>
              <p>Calzada Alvaro Arzú, a un costado de la zona militar de Zacapa
              <br>Guatemala</p>
            </div>

            <div>
              <i class="ion-ios-email-outline"></i>
              <p>info@mercadosefectivos.com
              </p>
            </div>

            <div>
              <i class="ion-ios-telephone-outline"></i>
              <p>+502 4937-8162</p>
            </div>

          </div>
        </div>

        <div class="col-lg-5 col-md-8">
          <div class="form">
            <div id="sendmessage">
              Tu mensaje ha sido enviado!!
            </div>
            <div id="errormessage"></div>
            <form role="form" class="contactForm" id="frmContacto">
              <div class="form-row">
                <div class="form-group col-lg-6">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Su nombre" data-rule="minlen:4" data-msg="Por favor ingrese su nombre" />
                  <div class="validation"></div>
                </div>
                <div class="form-group col-lg-6">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Su Email" data-rule="email" data-msg="Por favor ingrese su Email" />
                  <div class="validation"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" value="Información" id="subject" placeholder="Motivo" data-rule="minlen:4" data-msg="Por favor escríbanos sus dudas" />
                <div class="validation"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Por favor escríbanos su mensaje" placeholder="Escríbanos un mensaje..."></textarea>
                <div class="validation"></div>
              </div>
              <div class="text-center"><button type="submit" title="Enviar Mensaje">Enviar Mensaje</button></div>
            </form>
          </div>
        </div>

      </div>

    </div>
`
contact.innerHTML = str;
  }else{
    contact.innerHTML = '';
  }

};


// SECTION LISTENERS
function getIndexListeners(){
    
    // CONTACTO
    let frmContacto = document.getElementById('frmContacto');
    frmContacto.addEventListener('submit',(e)=>{
      e.preventDefault();
      sendContactMsn(frmContacto)
    });
};



// FUNCIONES
function sendContactMsn(data){
  axios.post('/clientes/contacto', {
      nombre:data.name.value,
      email:data.email.value,
      motivo:data.subject.value,
      mensaje:data.message.value
  })
  .then(async(response) => {
      const data = response.data;
      $("#sendmessage").addClass("show");
      $("#errormessage").removeClass("show");
      $('.contactForm').find("input, textarea").val("");  

      setInterval(() => {
        $("#sendmessage").removeClass("show");
      }, 2000);

    }, (error) => {
      $("#sendmessage").removeClass("show");
      $("#errormessage").addClass("show");
      $('#errormessage').html(msg);
  });

}




getNavbar(true);

getSectionIntro(true);
getSectionRoot('VALORES');
getSectionContacto(true);


getIndexListeners();

//inicia el service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
 navigator.serviceWorker.register('./sw.js')
  .then(registration => console.log('Service Worker registered'))
  .catch(err => 'SW registration failed'));
};