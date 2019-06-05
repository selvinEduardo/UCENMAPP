// Dom7
var $$ = Dom7;
var lat=0;
var lng=0;
// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device',
  cols: [
    {
      textAlign: 'center',
      values: ['Maestría en Gerencia Empresarial', 'Licenciatura en Administracion de Empresas', 'Licenciatura en Derecho', 'Ingeniería en Sistemas', 'Licenciatura en Salud Comunitaria', 'Licenciatura en Teología', 'Licenciatura en Psicología', 'Licenciatura en Nutrición', 'Licenciatura en Mercadotecnia', 'Técnico en Laboratorio Clínico', 'Técnico en Producción Ávicola', 'Gestión Portuaria y Transporte Marítimo','Producción en Televisión','Técnico Universitario en Logística']
    }
  ]
});
var pickerDevice = app.picker.create({
  inputEl: '#demo-picker-device2',
  cols: [
    {
      textAlign: 'center',
      values: ['San Pedro Sula', 'Catacamas', 'Tegucigalpa', 'Tocoa', 'La Esperanza', 'Peña Blanca']
    }
  ]
});
// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  //var username = $$('#my-login-screen [name="username"]').val();
 // var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  //app.loginScreen.close('#my-login-screen');

  // Alert username and password
 // app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

  function login(){
      var usuario=$("#username").val();
      var pass=$("#contra").val();
      var cadena="'"+usuario+"','"+pass+"'";
      eliminarTodo();
      if($("#recordar").is(':checked')){
          insertar(cadena);
      }
      jQuery.ajax({
      url: "https://ucenmapp.congresoproyectos.com/Login2.php",
      data:"txtu="+usuario+"&txtp="+pass,
      type: "POST",
      dataType: 'jsonp',
      success: function (result) {
            if(result.valor==1){
                  app.loginScreen.close('#my-login-screen');
            }else{
              alert("Error al intentar ingresar, este error puede deberse a que su contraseña o usuario son incorrectos o también puede deberse a que usa una conexion insegura, asegurese de que en la barra de navegación el icono del candado esta cerrado o la direccion comienza con https://");
            }
      },
      error : function(jqXHR, textStatus, errorThrown) {
           alert("El error es "+jqXHR.status);
      }
     }); 
    }

  function recomendar(){
      var nombre=$("#nombre").val();
      var apellidos=$("#apellidos").val();
      var cel=$("#tel").val();
      var correo=$("#correo").val();
      var carrera=$("#demo-picker-device").val();
      var centro=$("#demo-picker-device2").val();      
      getLocation();
      jQuery.ajax({
      url: "https://ucenmapp.congresoproyectos.com/registrar.php",
      data:"nom="+nombre+"&apell="+apellidos+"&cel="+cel+"&acorreo="+correo+"&carrera="+carrera+"&centro="+centro+"&lat="+lat+"&lng="+lng,
      type: "POST",
      dataType: 'jsonp',
      success: function (result) {
            if(result.valor==1){
                  alert("Gracias en caso de lograr en este periodo la matricula se te asignará el bono de referido");
                  limpiar();
            }else{
              alert("Es probable que alguien ya haya referido a esta persona");
            }
      },
      error : function(jqXHR, textStatus, errorThrown) {
           alert("El error es "+jqXHR.status);
      }
     }); 
    }