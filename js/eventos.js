/*--TIMERS--*/
var timer; //Se va a utilizar para todos los setTimeout()
var timer_texto; //Se va a utilizar para los setInterval() para el texto del tutorial
var contador_texto = 0; //Para escribir letra a letra en el tutorial
var texto; //Va a ser el texto que se vaya mostrando por pantalla en el tutorial

/*--INICIO--*/
var _inicio; //Pantalla de INICIO
var _video; //Vídeo de la pantalla INICIO
var _bmenu; //Botón 'menú' dentro de INICIO


/*--MENU--*/
var _menu; //Pantalla de MENU
var _bJugar; //Botón 'jugar' dentro de MENU
var _bTutorial; //Botón 'tutorial' dentro de MENU
var _bSalir; //Botón 'salir' dentro de MENU
var _musica_menu; //Música de fondo de MENU, TUTORIAL y SELECCION


/*--TUTORIAL--*/
var _tutorial; //Pantalla TUTORIAL
var _texto_explicacion; //Texto completo del tutorial cada vez que continúas
var _flecha; //Botón para continuar el texto
var contador_parrafo = 0; //Contador que indica por qué párrafo vas
var _canvas_explicacion; //Canvas con el que pintamos el triángulo del bocadillo
var contexto3; //Contexto de '_canvas_explicacion'
var primertutorial = true; //Va a decidir cuándo se pinta el 'contexto3'
var _ilustracion; //Ilustración que se va cambiando dependiendo del 'contador_parrafo'
var _oak; //Imagen del profesor Oak

//Todo el texto del tutorial está contenido en esta variable
var texto_explicativo = ["¡Bienvenido al mundo Pokemon!",
                        "Soy el profesor Oak, y estoy aquí\n\npara enseñarte lo que son los Pokemon.",
                        "Estas criaturas son grandísimos compañeros\n\npero, aunque no lo parezca, también les gusta combatir\n\nentre ellos al lado de su entrenador.",
                        "¿Así que tú eres un entrenador? ¿A qué estamos esperando?\n\nVoy a explicarte cómo funciona todo esto.",
                        "En primer lugar puedes formar un equipo con tres Pokemon\n\nde los que aquí se muestran. Simplemente selecciónalos y\n\npasaran a formar parte de tu equipo.",
                        "Tranquilo si te equivocas al esccoger sólo tienes\n\nque hacer click en la pokeball y ésta se vaciará\n\ndejando hueco a otro Pokemon de tu elección.",
                        "¿Ya tienes tu equipo? Pues pulsa en listo y...\n\n¡vamos a combatir!", 
                        "Muy bien entrenador, supongo que ya sabrás cómo funciona esto,\n\npero mi deber como profesor Pokemon es explicártelo.",
                        "Como ves abajo tienes dos botones, uno para atacar\n\n y otro para cambiar de Pokemon. Empecemos por el de atacar.",
                        "Este botón sirve para atacar, como habrás podido deducir.\n\nCada Pokemon tiene dos ataques, tú puedes elegir el que quieras.",
                        "¡Pero cuidado!\n\nSi tu oponente es mas rápido te atacará primero.",
                        "Después de cada turno sólo tienes que pulsar en la flecha\n\ny el combate irá sucediéndose con normalidad",
                        "Ahora hablemos del botón cambiar, si lo pulsas podrás elegir\n\na otro integrante de tu equipo, el cuál irá al área de combate.",
                        "No escatimes en gastos y cambia de Pokemon\n\nsiempre que lo necesites.",
                        "Si no quieres hacer ningún cambio, solo tienes que\n\npulsar en volver y tu pokemon seguirá en el combate.",
                        "Según vaya evolucionando el combate\n\nla vida de los Pokemon irá bajando.",
                        "¡Pero si esquivas un ataque no sufrirás ningun daño!",
                        "Supongo que lo sabrás, pero el combate termina cuando\n\na ti o a tu oponente se os debilitan todos los pokemon.",
                        "Bueno, creo que eso es todo, ahora\n\nte toca demostrar lo que vales.",
                        "¡HORA DE LUCHAR, ENTRENADOR!"];


/*--SELECCION--*/
var _seleccion; //Pantalla de SELECCION
var _blisto; //Botón 'Listo'
var _pokeball1; //Imagen primera pokeball
var _pokeball2; //Imagen segunda pokeball
var _pokeball3; //Imagen tercera pokeball

/* 'contador_pokemon'
 * Registra la cantidad de pokemons elegidos en Selección
 * false = pokeball vacía = falta por elegir el pokemon
 * true = pokeball cerrada = este pokemon ya está seleccionado
 */
var contador_pokemon = [false, false, false]; 

var _acero; // Botón de pokemon tipo acero
var _agua; // Botón de pokemon tipo agua
var _bicho; // Botón de pokemon tipo bicho
var _dragon; // Botón de pokemon tipo dragón
var _electrico; // Botón de pokemon tipo eléctrico
var _fantasma; // Botón de pokemon tipo fantasma
var _fuego; // Botón de pokemon tipo fuego
var _hada; // Botón de pokemon tipo hada
var _hielo; // Botón de pokemon tipo hielo
var _lucha; // Botón de pokemon tipo lucha
var _normal; // Botón de pokemon tipo normal
var _planta; // Botón de pokemon tipo planta
var _psiquico; // Botón de pokemon tipo psíquico
var _roca; // Botón de pokemon tipo roca
var _siniestro; // Botón de pokemon tipo siniestro
var _tierra; // Botón de pokemon tipo tierra
var _veneno; // Botón de pokemon tipo veneno
var _volador; // Botón de pokemon tipo volador

//Esta variable nos da las id que tienen los botones en el HTML y nos van a servir para relacionarlas con los propios botones
var tipos = ["acero", "agua", "bicho", "dragon", "electrico", "fantasma", "fuego", "hada", "hielo", "lucha", "normal", "planta", "psiquico", "roca", "siniestro", "tierra", "veneno", "volador"];

//Esta variable nos va a permitir utilizar un 'for' para cargar todos los botones de los pokemons a partir de las etiquetas de la variable 'tipos'
var seleccion = [_acero, _agua, _bicho, _dragon, _electrico, _fantasma, _fuego, _hada, _hielo, _lucha, _normal, _planta, _psiquico, _roca, _siniestro, _tierra, _veneno, _volador];


/*--EQUIPO DEL USUARIO--*/
var pok1; //Primer pokemon del usuario
var pok2; //Segundo pokemon del usuario
var pok3; //Tercer pokemon del usuario
var actual; //Pokemon del usuario que está combatiendo en el momento
var vidas_pokemon; //Registran la vida inicial de los tres pokemons que utiliza el usuario


/*--EQUIPO MAQUINA--*/
var maq1; //Primer pokemon de la máquina
var maq2; //Segundo pokemon de la máquina
var maq3; //Tercer pokemon de la máquina
var maqactual; //Pokemon de la máquina que está combatiendo en el momento
var vidas_maq; //Registran la vida inicial de los tres pokemons que utiliza la máquina
/* 'muertosmaq'
 * Esta variable nos dice cuáles de los pokemons de la máquina siguen vivos
 * true = pokemon vivo
 * false = pokemon muerto
 */
var muertosmaq;

/*--COMBATE--*/
var _combate; //Pantalla de COMBATE
var _musica_combate; //Música de fondo de COMBATE
var _flecha2; //Botón para continuar el combate
var _escenario; //Cuadro del escenario
/*-Imágenes de los 4 posibles escenarios que pueden aparecer en el combate-*/
var im = "img/fondos/";
var escenarios = [im+"escenario1_SF.gif", im+"escenario2_SF.gif", im+"escenario_SM4.jpg", im+"fondo_combate.gif"];
/*----*/

var _vida_actual; //Canvas de la barra de vida del pokemon actual del usuario
var contexto1; // Contexto del canvas '_vida_actual'
var _num_actual; //Canvas del nombre y la vida del pokemon actual del usuario
var ctx1; //Contexto del canvas '_num_actual'

var _vidamaq; //Canvas de la barra de vida del pokemon actual de la máquina
var contexto2; // Contexto del canvas '_vidamaq'
var _num_maq; //Canvas del nombre y la vida del pokemon actual de la máquina
var ctx2; //Contexto del canvas '_num_maq'

var _pokemon1; //Imagen dentro del escenario del pokemon actual del usuario
var _pokemon2; //Imagen dentro del escenario del pokemon actual de la máquina
var _miniature; //Imagen situada en el lateral izquierdo del pokemon actual del usuario

var _texto; //Texto que aparece en el combate
var _batacar; //Botón Atacar
var _bcambiar; // Botón Cambiar
var _tabla_ppal; //Tabla que contiene los botones '_batacar' y '_bcambiar'

var _ataq1; //Botón del ataque de la izquierda (primer ataque)
var _ataq2; //Botón del ataque de la derecha (segundo ataque)
var _tabla_ataques; //Tabla que contiene los botones '_ataq1' y '_ataq2'
var numeroataque; //Representa cuál de los dos ataques se ha utilizado (5->_ataq1, 6->_ataq2)

var _equipo; //Pantalla que sustituye al escenario para cambiar de pokemon
var _primero; //Botón del primer pokemon en la pantalla de cambio
var _segundo; //Botón del segundo pokemon en la pantalla de cambio
var _tercero; //Botón del tercer pokemon en la pantalla de cambio
var _volver; //Botón volver en la pantalla de cambio
/*------------------------*/

/*----------ATAQUES----------*/
/* Todos los ataques del juego dispuestos de la siguiente manera:
 * var ataque = ["nombre", potencia, precision];
 * fuente: http://www.pokexperto.net (algunos han sido modificados)
 */
var desenrollar = ["Desenrollar", 30, 90];
var terremoto = ["Terremoto", 100, 100];
var hidrobomba = ["Hidrobomba", 110, 80];
var enfado = ["Enfado", 120, 100];
var picotazo = ["Picotazo", 35, 100];
var zumbido = ["Zumbido",90, 100];
var cola_dragon = ["Cola dragón", 60, 90];
var carga_dragon = ["Carga dragón", 100, 75];
var trueno = ["Trueno", 110, 70];
var placaje_electrico = ["Placaje eléctrico", 110, 100];
var garra_umbria = ["Garra umbría", 70, 100];
var come_suenos = ["Come sueños", 100, 100];
var llamarada = ["Llamarada", 110, 85];
var doble_bofeton = ["Doble bofetón", 75, 85];
var voz_cautivadora = ["Voz cautivadora", 120, 90];
var rayo_hielo = ["Rayo hielo", 110, 70];
var poder_oculto = ["Poder oculto", 70, 100];
var patada_salto = ["Pat. salto", 130, 90];
var patada_giro = ["Patada giro", 60, 85];
var lenguetazo = ["Lengüetazo", 30, 100];
var giga_impacto = ["Giga impacto", 150, 90];
var latigo_cepa = ["Látigo cepa", 120, 85];
var gigadrenado = ["Gigadrenado", 75, 100];
var confusion = ["Confusión", 50, 100];
var premonicion = ["Premonición", 120, 100];
var aire_afilado = ["Aire afilado", 60, 95];
var pulso_umbrio = ["Pulso umbrío", 80, 100];
var alarido = ["Alarido", 55, 95];
var avalancha = ["Avalancha", 75, 90];
var terratemblor = ["Terratemblor", 60, 100];
var bomba_lodo = ["Bomba lodo", 90, 100];
var carga_toxica = ["Carga tóxica", 65, 100];
var ataque_aereo = ["Ataque aéreo", 140, 90];
var pajaro_osado = ["Pájaro osado", 120, 100];
/*---------------------------*/

/*--------------POKEMONS--------------*/
/* Todos los pokemon del juego dispuestos de la siguiente manera:
 * var pokemon = [nombre, tipo, vida, defensa, velocidad, ataque1, ataque2, tiempo1, tiempo2];
 * tiempo 1. Tiempo de animación del primer ataque
 * tiempo 2. Tiempo de animación del segundo ataque
 * fuente: http://www.pokexperto.net (algunos han sido modificados)
 */
var aggron = ["Aggron", "acero", 313, 428, 168, desenrollar, terremoto, 2500, 2300];
var blastoise = ["Blastoise", "agua", 331, 268, 224, hidrobomba, enfado, 1800, 1800];
var combee = ["Combee", "bicho", 233, 152, 208, picotazo, zumbido, 1650, 1700];
var salamence = ["Salamence", "dragon", 363, 228, 270, cola_dragon, carga_dragon, 2500, 2500];
var pikachu = ["Pikachu", "electrico", 243, 148, 248, trueno, placaje_electrico, 1650, 1700];
var gengar = ["Gengar", "fantasma", 293, 188, 288, garra_umbria, come_suenos, 1500, 1660];
var charizard = ["Charizard", "fuego", 329, 224, 268, cola_dragon, llamarada, 2100, 1900];
var jigglypuff = ["Jigglypuff", "hada", 403, 108, 108, doble_bofeton, voz_cautivadora, 2500, 4700];
var glaceon = ["Glaceon", "hielo", 303, 288, 198, rayo_hielo, poder_oculto, 2100, 2200];
var hitmontop = ["Hitmontop", "lucha", 273, 258, 209, patada_salto, patada_giro, 2100, 1700];
var lickitung = ["Lickitung", "normal", 353, 218, 128, lenguetazo, giga_impacto, 1500, 1800];
var bulbasaur = ["Bulbasaur", "planta", 263, 166, 158, latigo_cepa, gigadrenado, 1500, 2000];
var mrmime = ["Mrmime", "psiquico", 253, 198, 248, confusion, premonicion, 1870, 2400];
var aerodactyl = ["Aerodactyl", "roca", 333, 198, 328, aire_afilado, terremoto, 2190, 1900];
var zoroark = ["Zoroark", "siniestro", 293, 188, 278, pulso_umbrio, alarido, 1850, 1900];
var garchomp = ["Garchomp", "tierra", 389, 258, 272, avalancha ,terratemblor, 1900, 1860];
var amoonguss = ["Amoonguss", "veneno", 401, 208, 129, bomba_lodo, carga_toxica, 2100, 1900];
var pidgeot = ["Pidgeot", "volador", 339, 218, 280, ataque_aereo, pajaro_osado, 1800, 1900];
/*------------------------------------*/

/*Variable que contiene todos los pokemons. Utilizada para generar los pokemon de la máquina de forma aleatoria*/
var pokemons = [aggron, blastoise, combee, salamence, pikachu, gengar, charizard, jigglypuff, glaceon, hitmontop, lickitung, bulbasaur, mrmime, aerodactyl, zoroark, garchomp, amoonguss, pidgeot];

/*CARGAR PAGINA*/
/** Función que carga la mayoría de las variables a partir de las etiquetas 
 * del html. También se incluyen algunos escuchadores.*/
window.onload = function(){
    /*INICIO*/
    _inicio = document.getElementById("inicio");
    _video = document.getElementById("video_introduccion");
    _bmenu = document.getElementById("bmenu");
    
    /*TUTORIAL*/
    _tutorial = document.getElementById("tutorial");
    _bTutorial = document.getElementById("bTutorial");
    _texto_explicacion = document.getElementById("texto_explicacion");
    _flecha = document.getElementById("flecha");
    _canvas_explicacion  = document.getElementById("canvas_explicacion");
    _ilustracion = document.getElementById("ilustracion");
    _oak = document.getElementById("oak");
    
    /*MENU*/
    _menu = document.getElementById("menu");
    _musica_menu = document.getElementById("musica_menu");
    _bJugar = document.getElementById("bJugar");
    _bTutorial = document.getElementById("bTutorial");
    _bSalir = document.getElementById("bSalir");
    
    /*SELECCION*/
    _seleccion = document.getElementById("seleccion");
    _blisto = document.getElementById("blisto");
    
    _pokeball1 = document.getElementById("pokeball1");
    _pokeball2 = document.getElementById("pokeball2");
    _pokeball3 = document.getElementById("pokeball3");
    
    /*COMBATE*/
    _combate = document.getElementById("combate");
    _musica_combate = document.getElementById("musica_combate");
    
    /*ESCENARIO*/
    _escenario = document.getElementById("escenario");
    
    _pokemon1 = document.getElementById("pokemon1");
    _vida_actual = document.getElementById("vida_actual");
    _num_actual = document.getElementById("num_actual");
    
    _pokemon2 = document.getElementById("pokemon2");
    _vidamaq = document.getElementById("vidamaq");
    _num_maq = document.getElementById("num_maq");

    /*LAYOUT INFERIOR*/
    _miniature = document.getElementById("miniature");
    
    _flecha2 = document.getElementById("flecha2");
    
    _texto = document.getElementById("texto");
    
    _tabla_ppal = document.getElementById("tabla_ppal");
    _batacar = document.getElementById("batacar");
    _bcambiar = document.getElementById("bcambiar");
    
    _tabla_ataques = document.getElementById("tabla_ataques");
    _ataq1 = document.getElementById("ataq1");
    _ataq2 = document.getElementById("ataq2");
    
    /*EQUIPO PARA CAMBIAR*/    
    _equipo = document.getElementById("equipo");
    
    _primero = document.getElementById("primero");
    _segundo = document.getElementById("segundo");
    _tercero = document.getElementById("tercero");
    _volver = document.getElementById("volver");
    
    /*-----Escuchadores-----*/
    _bmenu.addEventListener("click", botonmenu);
    _bJugar.addEventListener("click", botonjugar);
    _bSalir.addEventListener("click", botonsalir);
    _bTutorial.addEventListener("click", botontutorial);
    
    _blisto.addEventListener("click", combate);
    
    _batacar.addEventListener("click", atacar);
    _ataq1.addEventListener("click", damage1);
    _ataq2.addEventListener("click", damage2);
    
    _bcambiar.addEventListener("click", cambiar);
    _primero.addEventListener("click", cambio_pok1);
    _segundo.addEventListener("click", cambio_pok2);
    _tercero.addEventListener("click", cambio_pok3);
    _volver.addEventListener("click", cambio_escenario);
};


/*INICIO*/
/** Función llamada al pulsar el botón 'Menú'.
 * Activamos la pantalla de MENU y activa la música de fondo.*/
function botonmenu(){
    _inicio.style.display = "none";
    _menu.style.display = "block";
    _video.pause();
    _musica_menu.volume = 0.1;
    _musica_menu.play();
}


/*MENU*/
/** Función llamada al pulsar el botón 'Jugar'.
 * Activamos la pantalla de SELECCION, y carga todos los botones según las
 * etiquetas que tienen en el HTML.*/
function botonjugar(){
    _menu.style.display = "none";
    _seleccion.style.display = "block";
    /*Botones Pokemon*/
    for(var i = 0; i<seleccion.length; i++){
        seleccion[i] = document.getElementById(tipos[i]);
    }
    for(var i = 0; i<seleccion.length; i++){
        seleccion[i].addEventListener("click", seleccion_pokemons);
    }
}

/** Función llamada al pulsar el botón 'Salir'
 * Paramos la música de la pantalla MENU y volvemos a la pantalla de INICIO.*/
function botonsalir(){
    _menu.style.display = "none";
    _inicio.style.display = "block";
    _musica_menu.pause();
}

/** Función llamada al pulsar el botón 'Tutorial'
 * Activamos la pantalla de TUTORIAL, y si es la primera vez que accedemos,
 * pintamos con canvas el triángulo del bocadillo.*/
function botontutorial(){
    _menu.style.display = "none";
    document.getElementById("tutorial").style.display = "block";
    if(primertutorial == true){
        contexto3 = _canvas_explicacion.getContext("2d");
        contexto3.fillStyle = "#ffffff";
        contexto3.moveTo(300, 10);
        contexto3.rotate(20);
        contexto3.lineTo(105,25);
        contexto3.lineTo(25,105);
        contexto3.fill();
    }
    mostartexto();
}


/*TUTORIAL*/
/** Función llamada desde 'botontutorial()'
 * Mostramos el primer párrafo del texto y activamos el escuchador para poder
 * continuar el texto al pulsar la flecha.*/
function mostartexto(){
    _texto_explicacion.style.display = "block";
    _texto_explicacion.innerHTML = texto_explicativo[contador_parrafo];
    _flecha.addEventListener("click", continuartexto);
}

/** Función llamada desde 'mostartexto()'
 * Vamos continuando el texto a medida que se pulsa la flecha, y dependiendo
 * del párrafo vamos cambiando algunas imágenes.*/
function continuartexto(){
    contador_parrafo++;
    contador_texto = 0;
    clearInterval(timer_texto);
    if(contador_parrafo < texto_explicativo.length){
        _texto_explicacion.innerHTML = "";
        if(contador_parrafo == 4){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_seleccion1.gif')";
            _oak.src = "img/tutorial/profesor_oak2.png";
        }else if(contador_parrafo == 5){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_seleccion2.gif')";
        }else if(contador_parrafo == 6){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_seleccion3.gif')";
            _oak.src = "img/tutorial/profesor_oak.png";
        }else if(contador_parrafo == 7){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate1.gif')";
            _oak.src = "img/tutorial/profesor_oak2.png";
        }else if(contador_parrafo == 9){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate2.gif')";
        }else if(contador_parrafo == 10){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate3.gif')";
            _oak.src = "img/tutorial/profesor_oak.png";
        }else if(contador_parrafo == 12){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate4.gif')";
            _oak.src = "img/tutorial/profesor_oak2.png";
        }else if(contador_parrafo == 14){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate5.gif')";
        }else if(contador_parrafo == 15){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate6.gif')";
        }else if(contador_parrafo == 16){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate7.gif')";
        }else if(contador_parrafo == 17){
            _ilustracion.style.backgroundImage = "url('img/tutorial/tutorial_combate8.gif')";
        }else if(contador_parrafo == 18){
            _ilustracion.style.backgroundImage = "url('img/tutorial/mundo_pokemon.gif')";
            _oak.src = "img/tutorial/profesor_oak.png";
        }
        texto = texto_explicativo[contador_parrafo];
        timer_texto = setInterval(escribiendo_texto, 40);
        
    }else{
        contador_parrafo = 0;
        _tutorial.style.display = "none";
        primertutorial = false;
        botonmenu();
    }
}

/** Función llamada desde 'continuartexto()' como intervalo.
 * Progresivamente vamos escribiendo el texto letra a letra.*/
function escribiendo_texto(){
    var longitud = texto.length;
    _texto_explicacion.innerText = _texto_explicacion.innerText.substr(0,_texto_explicacion.innerText.length-1) + texto.charAt(contador_texto) + "_";

    if(contador_texto >= longitud){
        clearInterval(timer_texto);
        _texto_explicacion.innerText = _texto_explicacion.innerText.substr(0,longitud);
    } else {
        contador_texto++;
    }
}


/*SELECCION*/
/** Función llamada al pulsar cualquier botón de pokemon dentro de la pantalla
 * SELECCION.
 * Mostramos varios errores que se pueden dar en esta pantalla, para dirigir
 * al usuario hacia el combate.*/
function seleccion_pokemons(){
    
    if(contador_pokemon[0] == true && contador_pokemon[1] == true && contador_pokemon[2] == true){
        mostrar_error("¡Ya has elegido tres pokemons!\nPulsa Listo para continuar.", "100px");
        timer = setTimeout(ocultar_error, 2000);
    }else{
        var aux;
        for(var i = 0; i<pokemons.length; i++){
            if(pokemons[i][1] == this.id){
                aux = pokemons[i];
            }
        }
        if(contador_pokemon[0] == false){
            if(aux == pok2 || aux == pok3){
                mostrar_error("¡Ya has elegido este pokemon!", "100px");
                timer = setTimeout(ocultar_error, 1500);
            }else{
                pok1 = aux;
                _pokeball1.src = "img/logos/pokeball_cerrada.png";
                contador_pokemon[0] = true;
                _pokeball1.style.cursor = "pointer";
                _pokeball1.addEventListener("mouseover", mostrarnombre1);
                _pokeball1.addEventListener("click", deseleccion1);
            }
        }else if(contador_pokemon[1] == false){
            if(aux == pok1 || aux == pok3){
                mostrar_error("¡Ya has elegido este pokemon!", "100px");
                timer = setTimeout(ocultar_error, 1500);
            }else{
                pok2 = aux;
                _pokeball2.src = "img/logos/pokeball_cerrada.png";
                contador_pokemon[1] = true;
                _pokeball2.style.cursor = "pointer";
                _pokeball2.addEventListener("mouseover", mostrarnombre2);
                _pokeball2.addEventListener("click", deseleccion2);
            }
        }else if(contador_pokemon[2] == false){
            if(aux == pok1 || aux == pok2){
                clearTimeout(timer);
                mostrar_error("¡Ya has elegido este pokemon!", "100px");
                timer = setTimeout(ocultar_error, 1500);
            }else{
                pok3 = aux;
                _pokeball3.src = "img/logos/pokeball_cerrada.png";
                contador_pokemon[2] = true;
                _pokeball3.style.cursor = "pointer";
                _pokeball3.addEventListener("mouseover", mostrarnombre3);
                _pokeball3.addEventListener("click", deseleccion3);
            }
        }
    }
}

/** Función llamada al pulsar la primera pokeball dentro de la pantalla SELECCION.
 * Liberamos el primer pokemon anteriormente seleccionado y cambiamos la imagen
 * de la pokeball.*/
function deseleccion1(){
    pok1 = null;
    contador_pokemon[0] = false;
    _pokeball1.src = "img/logos/pokeball_abierta.png";
    _pokeball1.style.cursor = "default";
    _pokeball1.removeEventListener("click", deseleccion1);
}

/** Función llamada al pulsar la segunda pokeball dentro de la pantalla SELECCION.
 * Liberamos el segundo pokemon anteriormente seleccionado y cambiamos la imagen
 * de la pokeball.*/
function deseleccion2(){
    pok2 = null;
    contador_pokemon[1] = false;
    _pokeball2.src = "img/logos/pokeball_abierta.png";
    _pokeball2.style.cursor = "default";
    _pokeball2.removeEventListener("click", deseleccion2);
}

/** Función llamada al pulsar la tercera pokeball dentro de la pantalla SELECCION.
 * Liberamos el tercer pokemon anteriormente seleccionado y cambiamos la imagen
 * de la pokeball.*/
function deseleccion3(){
    pok3 = null;
    contador_pokemon[2] = false;
    _pokeball3.src = "img/logos/pokeball_abierta.png";
    _pokeball3.style.cursor = "default";
    _pokeball3.removeEventListener("click", deseleccion3);
}

/** Función a la que se accede al mantener el puntero por encima de la primera
 * pokeball dentro de la pantalla SELECCION.
 * Mostramos el nombre el primer pokemon seleccionado con anterioridad.*/
function mostrarnombre1(){
    document.getElementById("nombrepok1").innerText = pok1[0];
    document.getElementById("nombrepok1").style.display = "block";
    document.getElementById("nombrepok1").style.textAlign = "center";
    _pokeball1.addEventListener("mouseout", ocultarnombre1);
}

/** Función a la que se accede al apartar el puntero de la primera pokeball
 * dentro de la pantalla SELECCION.
 * Ocultamos el nombre del primer pokemon mostrado con anterioridad.*/
function ocultarnombre1(){
    document.getElementById("nombrepok1").style.display = "none";
    _pokeball1.removeEventListener("mouseout", ocultarnombre1);
}

/** Función a la que se accede al mantener el puntero por encima de la segunda
 * pokeball dentro de la pantalla SELECCION.
 * Mostramos el nombre el segundo pokemon seleccionado con anterioridad.*/
function mostrarnombre2(){
    document.getElementById("nombrepok2").innerText = pok2[0];
    document.getElementById("nombrepok2").style.display = "block";
    document.getElementById("nombrepok2").style.textAlign = "center";
    _pokeball2.addEventListener("mouseout", ocultarnombre2);
}

/** Función a la que se accede al apartar el puntero de la segunda pokeball
 * dentro de la pantalla SELECCION.
 * Ocultamos el nombre del segundo pokemon mostrado con anterioridad.*/
function ocultarnombre2(){
    document.getElementById("nombrepok2").style.display = "none";
    _pokeball2.removeEventListener("mouseout", ocultarnombre2);
}

/** Función a la que se accede al mantener el puntero por encima de la tercera
 * pokeball dentro de la pantalla SELECCION.
 * Mostramos el nombre el tercer pokemon seleccionado con anterioridad.*/
function mostrarnombre3(){
    document.getElementById("nombrepok3").innerText = pok3[0];
    document.getElementById("nombrepok3").style.display = "block";
    document.getElementById("nombrepok3").style.textAlign = "center";
    _pokeball3.addEventListener("mouseout", ocultarnombre3);
}

/** Función a la que se accede al apartar el puntero de la tercera pokeball
 * dentro de la pantalla SELECCION.
 * Ocultamos el nombre del tercer pokemon mostrado con anterioridad.*/
function ocultarnombre3(){
    document.getElementById("nombrepok3").style.display = "none";
    _pokeball3.removeEventListener("mouseout", ocultarnombre3);
}

/** Función llamada desde 'seleccion_pokemons()' y 'combate()'
 * Mostramos un mensaje de error en la pantalla SELECCION.*/
function mostrar_error(txt, margen){
    clearTimeout(timer);
    document.getElementById("errores_de_seleccion").style.display = "block";
    document.getElementById("texto_error").style.marginLeft = margen;
    document.getElementById("texto_error").innerText = txt;
}

/** Función llamada al pulsar cualquiera de los botones de la pantalla SELECCION.
 * Ocultamos cualquiera de los errores de selección.*/
function ocultar_error(){
    document.getElementById("errores_de_seleccion").style.display = "none";
}


/*COMBATE*/
/** Función llamada al pulsar el botón 'Listo' dentro de la pantalla SELECCION
 * Cargamos todos los pokemons seleccionados, el escenario y la miniatura,
 * las barras de vida (las pintamos con canvas), y toda la pantalla de COMBATE.*/
function combate(){
    
    if(contador_pokemon[0] == false || contador_pokemon[1] == false || contador_pokemon[2] == false){
        mostrar_error("¡Elige tres pokemon!", "160px");
        timer = setTimeout(ocultar_error, 1000);
    }else{
        _musica_menu.pause();
        _musica_combate.volume = 0.05;
        _musica_combate.play();
        
        _seleccion.style.display = "none";
        _combate.style.display = "block";
        
        vidas_pokemon = [pok1[2], pok2[2], pok3[2]];
        
        /*Escenario*/
        _escenario.style.backgroundImage = "url("+escenarios[getRandomInt(0, escenarios.length)]+")";
        
        /*--TU PRIMER POKEMON--*/
        _pokemon1.src = "img/"+pok1[1]+"/"+pok1[0].toLowerCase()+".gif";
        actual = pok1;
        /*Barra vida Pokemon*/
        contexto1 = _vida_actual.getContext("2d");
        contexto1.fillStyle = "#e6e600";
        contexto1.fillRect(0,0,1000,1000);
        
        ctx1 = _num_actual.getContext("2d");
        ctx1.fillStyle = "#ffffff";
        ctx1.font = "italic bold 15px pokefont";
        ctx1.shadowOffsetX = 3;
        ctx1.shadowBlur = 1;
        ctx1.shadowColor = "#000000";
        ctx1.fillText(actual[0]+" "+actual[2]+"PS", 30, 90);
        
        /*--PRIMER POKEMON MAQ--*/
        cargarmaq();
        _pokemon2.src = "img/"+maq1[1]+"/"+maq1[0].toLowerCase()+".gif";
        /*Barra vida Maquina*/
        contexto2 = _vidamaq.getContext("2d");
        contexto2.fillStyle = "#e6e600";
        contexto2.fillRect(0,0,1000,1000);
        
        ctx2 = _num_maq.getContext("2d");
        ctx2.fillStyle = "#ffffff";
        ctx2.font = "italic bold 15px pokefont";
        ctx2.shadowOffsetX = -3;
        ctx2.shadowBlur = 1;
        ctx2.shadowColor="#000000";
        ctx2.fillText(maq1[0]+" "+maq1[2]+"PS", 35, 90);
        
        /*--MINIATURA POKEMON--*/
        _miniature.src = "img/"+pok1[1]+"/"+pok1[0]+"_miniatura.png";
    }
}

/** Función llamada desde 'combate()'.
 * Cargamos los pokemon que va a tener la máquina, siendo diferentes a los del
 * usuario y evitando ser repetidos.*/
function cargarmaq(){
    do{
        maq1 = pokemons[getRandomInt(0, pokemons.length)];
    }while(maq1 == pok1 || maq1 == pok2 || maq1 == pok3);
    
    do{
        maq2 = pokemons[getRandomInt(0, pokemons.length)];
    }while(maq2 == maq1 || maq2 == pok1 || maq2 == pok2 || maq2 == pok3);
    
    do{
       maq3 = pokemons[getRandomInt(0, pokemons.length)];
        
    }while(maq3 == maq1 || maq3 == maq2 || maq3 == pok1 || maq3 == pok2 || maq3 == pok3);
    
    maqactual = maq1;
    
    vidas_maq = [maq1[2], maq2[2], maq3[2]];
    muertosmaq = [true, true, true];
}

/** Función llamada desde 'continuamaquina()' y 'mostrartabla()'.
 * Cambiamos de pokemon de la máquina.*/
function cambiarmaq(){
    if(maq2[2] <= 0){
        maqactual = maq3;
        muertosmaq[1] = false;
        _pokemon2.src = "img/"+maq3[1]+"/"+maq3[0].toLowerCase()+".gif";
    }else if(maq1[2] <= 0){
        maqactual = maq2;
        muertosmaq[0] = false;
        _pokemon2.src = "img/"+maq2[1]+"/"+maq2[0].toLowerCase()+".gif";
    }
    contexto2.fillRect(0,0,_vidamaq.width, 1000);
    ctx2.clearRect(0, 0, _num_actual.width, _num_actual.height);
    ctx2.fillStyle = "#ffffff";
    ctx2.font = "italic bold 15px pokefont";
    ctx2.shadowOffsetX = -3;
    ctx2.shadowBlur = 1;
    ctx2.shadowColor="#000000";
    ctx2.fillText(maqactual[0]+" "+maqactual[2]+"PS", 35, 90);
    
    mostrartabla();
}

/** Función llamada desde el botón 'Atacar'.
 * Cambiamos el cuadro de debajo del escenario, mostrando así los ataques del
 * pokemon que el usuario está utilizando en ese momento.*/
function atacar(){
    _tabla_ppal.style.display = "none";
    _tabla_ataques.style.display = "block";
    _ataq1.innerHTML = actual[5][0];
    _ataq2.innerHTML = actual[6][0];
    _flecha2.removeEventListener("click", mostrartabla);
}

/** Función llamada al pulsar el primer ataque.
 * Vamos a comenzar el combate y para ello marcamos que hemos pulsado el primer
 * ataque del pokemon que utiliza el usuario.*/
function damage1(){
    numeroataque = 5;
    quienatacaprimero();
}

/** Función llamada al pulsar el segundo ataque.
 * Vamos a comenzar el combate y para ello marcamos que hemos pulsado el segundo
 * ataque del pokemon que utiliza el usuario.*/
function damage2(){
    numeroataque = 6;
    quienatacaprimero();
}

/** Función llamada desde 'damage1()' y 'damage2()'.
 * Dependiendo de la velocidad del pokemon del usuario y el de la máquina,
 * atacará el más veloz.*/
function quienatacaprimero(){
    
    _flecha2.style.display = "block";
    if(actual[4] >= maqactual[4]){
        _pokemon1.src = "img/"+actual[1]+"/"+actual[0].toLowerCase()+"-"+numeroataque+".gif";
        
        grito_pokemon(actual[numeroataque][0].toLocaleLowerCase());
        setTimeout(actualestatica, actual[numeroataque+2]);
        dialogo(damage(actual[numeroataque][1], maqactual[3], actual[numeroataque][2], numeroataque), 1, numeroataque+2);
        
    }else{
        var numrandom = getRandomInt(5, 7);
        _pokemon2.src = "img/"+maqactual[1]+"/"+maqactual[0].toLowerCase()+"-"+numrandom+".gif";
        
        grito_pokemon(maqactual[numrandom][0].toLocaleLowerCase());
        setTimeout(maqactualestatica, maqactual[numrandom+2]);
        dialogo(damagemaq(numrandom), 0, maqactual[numrandom+2]);
    }
}

/** Función llamada desde 'continuarcombatemaquina()'.
 * El pokemon de la máquina ataca o cambia de pokemon en caso de que esté
 * debilitado.*/
function continuamaquina(){
    _flecha2.removeEventListener("click", continuamaquina);
    if(maq1[2] <= 0 && maq2[2] <= 0 && maq3[2] <= 0){
        winner();
    }else if(maqactual[2] <= 0){
       cambiarmaq();
    }else{
        var numrandom = getRandomInt(5, 7);
        _pokemon2.src = "img/"+maqactual[1]+"/"+maqactual[0].toLowerCase()+"-"+numrandom+".gif";
        
        grito_pokemon(maqactual[numrandom][0].toLocaleLowerCase());
        setTimeout(maqactualestatica, maqactual[numrandom+2]);
        dialogo(damagemaq(numrandom), 2, maqactual[numrandom+2]);
    }
}

/** Función llamada desde 'continuarcombateyo()'.
 * El pokemon del usuario ataca o cambia de pokemon en caso de que esté
 * debilitado.*/
function continuaractual(){
    _flecha2.removeEventListener("click", continuaractual);
    if(pok1[2] <= 0 && pok2[2] <= 0 && pok3[2] <= 0){
        loser();
    }else if(actual[2] <= 0){
        cambiar();
    }else{
        _pokemon1.src = "img/"+actual[1]+"/"+actual[0].toLowerCase()+"-"+numeroataque+".gif";
        
        grito_pokemon(actual[numeroataque][0].toLocaleLowerCase());
        setTimeout(actualestatica, actual[numeroataque+2]);
        dialogo(damage(actual[numeroataque][1], maqactual[3], actual[numeroataque][2], numeroataque), 2, actual[numeroataque+2]);
    }
}

/** Función llamada desde 'quienatacaprimero()'.
 * @param:
 *  #potencia -> Es la potencia del ataque
 *  #precision -> Es la precisión del ataque
 *  #numeroataque -> Es número del ataque utilizado
 * @return: texto que se va a mostrar por pantalla durante el combate
 * 
 * En esta función barajamos la posibilidad de que el ataque utilizado falle,
 * dependiendo de la precision. Y en caso de que no falle el ataque, calculamos
 * el daño que le causa el usuario al pokemon de la máquina. Y actualizamos la
 * vida de la máquina*/
function damage(potencia, defensa, precision, numeroataque){
    
    _tabla_ataques.style.display = "none";
    _tabla_ppal.style.display = "none";
    var dialogotexto;
    
    if(precision < getRandomInt(0, 101)){
        dialogotexto = maqactual[0]+" evitó el ataque.";
        
    }else{
        var danototal = Math.round(0.01*getRandomInt(100, 151)*(180*potencia/(defensa)+2));
        maqactual[2] -= danototal;
        if (maqactual[2] < 0){
            maqactual[2] = 0;
        }
        
        contexto2.clearRect(0, 0, _vidamaq.width, _vidamaq.height);
        contexto2.fillRect(0,0, maqactual[2]*_vidamaq.width/vidamaqactual(), 1000);
        ctx2.clearRect(0, 0, _num_actual.width, _num_actual.height);
        ctx2.fillStyle = "#ffffff";
        ctx2.font = "italic bold 15px pokefont";
        ctx2.shadowOffsetX = -3;
        ctx2.shadowBlur = 1;
        ctx2.shadowColor = "#000000";
        ctx2.fillText(maqactual[0]+" "+maqactual[2]+"PS", 35, 90);
        
        dialogotexto = actual[0]+" usó "+actual[numeroataque][0]+".";
    }
    return dialogotexto;
}

/** Función llamada desde 'quienatacaprimero()'.
 * @param:
 *  #rand -> Es el número del ataque utilizado por el pokemon de la máquina
 * @return: texto que se va a mostrar por pantalla durante el combate
 * 
 * En esta función barajamos la posibilidad de que el ataque utilizado por la
 * máquina falle. Y en caso de que no falle el ataque, calculamos
 * el daño que le causa el pokemon de la máquina al pokemon del usuario.
 * Y actualizamos la vida del pokemon del usuario.*/
function damagemaq(rand){
    var ataqrandom = maqactual[rand];
    var dialogotexto;
    
    if(ataqrandom[2] < getRandomInt(0, 101)){
        dialogotexto = actual[0]+" evitó el ataque."; 
    }else{
        var danototal = Math.round(0.01*getRandomInt(100, 151)*(180*ataqrandom[1]/(actual[3])+2));
        actual[2] -= danototal;
        if (actual[2] < 0){
            actual[2] = 0;
        }
        
        contexto1.clearRect(0, 0, _vida_actual.width, _vida_actual.height);
        contexto1.fillRect(0, 0, actual[2]*_vida_actual.width/vidaactual(actual), 1000);
        ctx1.clearRect(0, 0, _num_maq.width, _num_maq.height);
        ctx1.fillStyle = "#ffffff";
        ctx1.font = "italic bold 15px pokefont";
        ctx1.shadowOffsetX = 3;
        ctx1.shadowBlur = 1;
        ctx1.shadowColor="#000000";
        ctx1.fillText(actual[0]+" "+actual[2]+"PS", 30, 90);
        
        dialogotexto = maqactual[0]+" usó "+ataqrandom[0]+".";
    }
    return dialogotexto;
}

/** Función llamada desde 'quienatacaprimero()', 'continuamaquina()' y
 * 'continuaractual()'.
 * @param:
 *  #ataque -> Es el ataque realizado
 * 
 * Reproducimos el grito de cada pokemon dependiendo del ataque que haga,
 * mientras se realiza la animación.*/
function grito_pokemon(ataque){
    var _grito = document.getElementById("grito");
    _grito.pause();
    _grito.src = "media/musica/gritos/"+ataque+".mp3";
    _grito.volume = 0.3;
    _grito.play();
}

/** Función llamada desde 'quienatacaprimero()', 'continuamaquina()' y
 * 'continuaractual()'.
 * Volvemos a la imagen del pokemon del usuario sin animar (sin atacar).*/
function actualestatica(){
    _pokemon1.src = "img/"+actual[1]+"/"+actual[0].toLowerCase()+".gif";
    clearTimeout(this);
}

/** Función llamada desde 'quienatacaprimero()', 'continuamaquina()' y
 * 'continuaractual()'.
 * Volvemos a la imagen del pokemon de la máquina sin animar (sin atacar).*/
function maqactualestatica(){
    _pokemon2.src = "img/"+maqactual[1]+"/"+maqactual[0].toLowerCase()+".gif";
    clearTimeout(this);
}

/** Función llamada desde 'damagemaq()', 'cambio_pok1()', 'cambio_pok2()'
 * y 'cambio_pok3()'. Es decir, cuando cambiamos el canvas de la vida.
 * @param:
 *  #pokemon -> Pokemon del cuál queremos saber la vida.
 * @return: La vida inicial del pokemon del usuario
 * 
 * Esta función es utilizada para saber cuánta vida tenía el pokemon
 * inicialmente para poder calcular cuánto porcentaje de vida le queda al
 * pokemon y pintar ese porcentaje en el canvas de la vida.*/
function vidaactual(pokemon){
    if(pokemon[0] == pok1[0]){
        return vidas_pokemon[0];
    }else if(pokemon[0] == pok2[0]){
        return vidas_pokemon[1];
    }else if(pokemon[0] == pok3[0]){
        return vidas_pokemon[2];
    }
}

/** Función llamada desde 'damage()'. Es decir, cuando cambiamos el canvas de
 * la vida de la máquina.
 * @return: La vida inicial del pokemon de la máquina
 * 
 * Esta función es utilizada para saber cuánta vida tenía el pokemon
 * inicialmente para poder calcular cuánto porcentaje de vida le queda al
 * pokemon y pintar ese porcentaje en el canvas de la vida.*/
function vidamaqactual(){
    if(muertosmaq[0] == true){
        return vidas_maq[0];
    }else if(muertosmaq[0] == false && muertosmaq[1] == true){
        return vidas_maq[1];
    }else if(muertosmaq[0] == false && muertosmaq[1] == false && muertosmaq[2] == true){
        return vidas_maq[2];
    }
}

/** Función llamada desde 'continuaractual()' y 'mostrartabla()'.
 * Cargamos la pantalla de cambio de pokemon y cargamos también los botones
 * en función de los pokemons seleccionados en la pantalla de SELECCION.*/
function cambiar(){
    _escenario.style.display = "none";
    _texto.style.display = "none";
    _tabla_ppal.style.display = "none";
    _equipo.style.display = "block";
    
    _primero.id = pok1[1];
    _segundo.id = pok2[1];
    _tercero.id = pok3[1];
    
    _primero.textContent = pok1[0];
    _segundo.textContent = pok2[0];
    _tercero.textContent = pok3[0];
}

/** Función llamada al pulsar el botón del primer pokemon en la pantalla de
 * cambiar pokemon.
 * Mostramos los mensajes de error en caso de que se produzcan. Y cambiamos
 * todos los aspectos de la pantalla COMBATE relativos al pokemon combatiente.*/
function cambio_pok1(){
    if(pok1[2] <= 0){
        _texto.style.display = "block";
        _texto.innerHTML = "Este Pokemon está debilitado.";
    }else{
        if(actual == pok1){
            _texto.style.display = "block";
            _texto.innerHTML = "Este pokemon ya está en combate.";
        }else{
            _equipo.style.display = "none";
            _escenario.style.display = "block";
            _tabla_ppal.style.display = "block";
            _texto.style.display = "none";
    
            _pokemon1.src = "img/"+pok1[1]+"/"+pok1[0].toLowerCase()+".gif";
            _miniature.src = "img/"+pok1[1]+"/"+pok1[0]+"_miniatura.png";
        
            if(actual[0] == pok2[0]){
                pok2 = actual;
            }else if(actual[0] == pok3[0]){
                pok3 = actual;
            }
            actual = pok1;
        }
        contexto1.clearRect(0, 0, _vida_actual.width, _vida_actual.height);
        contexto1.fillRect(0, 0, actual[2]*_vida_actual.width/vidaactual(actual), 1000);
        
        ctx1.clearRect(0, 0, _num_maq.width, _num_maq.height);
        ctx1.fillText(actual[0]+" "+actual[2]+"PS", 30, 90);
    }
}

/** Función llamada al pulsar el botón del segundo pokemon en la pantalla de
 * cambiar pokemon.
 * Mostramos los mensajes de error en caso de que se produzcan. Y cambiamos
 * todos los aspectos de la pantalla COMBATE relativos al pokemon combatiente.*/
function cambio_pok2(){
    if(pok2[2] <= 0){
        _texto.style.display = "block";
        _texto.innerHTML = "Este Pokemon está debilitado.";
    }else{
        if(actual == pok2){
            _texto.style.display = "block";
            _texto.innerHTML = "Este pokemon ya está en combate.";
        }else{
        
            _equipo.style.display = "none";
            _escenario.style.display = "block";
            _tabla_ppal.style.display = "block";
            _texto.style.display = "none";
    
            _pokemon1.src = "img/"+pok2[1]+"/"+pok2[0].toLowerCase()+".gif";
            _miniature.src = "img/"+pok2[1]+"/"+pok2[0]+"_miniatura.png";
        
            if(actual[0] == pok1[0]){
                pok1 = actual;
            }else if(actual[0] == pok3[0]){
                pok3 = actual;
            }
            actual = pok2;
        }
        contexto1.clearRect(0, 0, _vida_actual.width, _vida_actual.height);
        contexto1.fillRect(0, 0, actual[2]*_vida_actual.width/vidaactual(actual), 1000);   

        ctx1.clearRect(0, 0, _num_maq.width, _num_maq.height);
        ctx1.fillText(actual[0]+" "+actual[2]+"PS", 30, 90);
    }
}

/** Función llamada al pulsar el botón del tercer pokemon en la pantalla de
 * cambiar pokemon.
 * Mostramos los mensajes de error en caso de que se produzcan. Y cambiamos
 * todos los aspectos de la pantalla COMBATE relativos al pokemon combatiente.*/
function cambio_pok3(){
    if(pok3[2] <= 0){
        _texto.style.display = "block";
        _texto.innerHTML = "Este Pokemon está debilitado.";
    }else{
        if(actual == pok3){
            _texto.style.display = "block";
            _texto.innerHTML = "Este pokemon ya está en combate.";
        }else{
            _equipo.style.display = "none";
            _escenario.style.display = "block";
            _tabla_ppal.style.display = "block";
            _texto.style.display = "none";
    
            _pokemon1.src = "img/"+pok3[1]+"/"+pok3[0].toLowerCase()+".gif";
            _miniature.src = "img/"+pok3[1]+"/"+pok3[0]+"_miniatura.png";
        
            if(actual[0] == pok1[0]){
                pok1 = actual;
            }else if(actual[0] == pok2[0]){
                pok2 = actual;
            }
            actual = pok3;
        }
        contexto1.clearRect(0, 0, _vida_actual.width, _vida_actual.height);
        contexto1.fillRect(0, 0, actual[2]*_vida_actual.width/vidaactual(actual), 1000);   
        
        ctx1.clearRect(0, 0, _num_maq.width, _num_maq.height);
        ctx1.fillText(actual[0]+" "+actual[2]+"PS", 30, 90);
    }
}

/** Función llamada al pulsar el botón 'Volver' dentro de la pantalla COMBATE.
 * Mostramos los mensajes de error en caso de que se produzcan. Y cargamos el
 * escenario.*/
function cambio_escenario(){
    if(actual[2] <= 0){
        _texto.style.display = "block";
        _texto.innerHTML = "¡Tienes que elegir un Pokemon!";
    }else{
        _equipo.style.display = "none";
        _escenario.style.display = "block";
        _tabla_ppal.style.display = "block";
        _texto.style.display = "none";
    }
}

/** Función llamada desde 'quienatacaprimero()', 'continuamaquina()' y
 * 'continuaractual()'.
 * @param:
 *  #txt -> Texto que queremos mostrar por pantalla
 *  #num -> Dependiendo de esta variable llamaremos a una función diferentes
 *  #tiempoespera -> tiempo de espera para poder continuar el combate.
 * 
 * Mostramos el texto del combate y esperamos el tiempo 'tiempoespera' para
 * poder continuar.*/
function dialogo(txt, num, tiempoespera){
    
    _tabla_ataques.style.display = "none";
    _tabla_ppal.style.display = "none";
    _texto.style.textAlign = "center";
    _texto.innerText = txt;
    _texto.style.display = "block";
    
    if(num == 0){
        setTimeout(continuarcombateyo, tiempoespera);
    }else if(num == 1){
        setTimeout(continuarcombatemaquina, tiempoespera);
    }else if(num == 2){
        setTimeout(acabarturno, tiempoespera);
    }
}

/** Función llamada desde 'dialogo()'.
 * Continuamos el combate cuando clickeamos en la flecha.*/
function continuarcombateyo(){
    _flecha2.addEventListener("click", continuaractual);
}

/** Función llamada desde 'dialogo()'.
 * Continuamos el combate cuando clickeamos en la flecha.*/
function continuarcombatemaquina(){
    _flecha2.addEventListener("click", continuamaquina);
}

/** Función llamada desde 'dialogo()'.
 * Acabamos el turno, y comprobamos si gana o pierde el usuario. Si no se
 * produce ninguno de esos casos, mostramos otra vez los botones 'Atacar' y
 * 'Cambiar'.*/
function acabarturno(){
    if(maq1[2] <= 0 && maq2[2] <= 0 && maq3[2] <= 0){
        winner();
    }else if(pok1[2] <= 0 && pok2[2] <= 0 && pok3[2] <= 0){
        loser();
    }else{
        _flecha2.addEventListener("click", mostrartabla);
    }
}

/** Función llamada desde 'acabarturno()'.
 * Mostramos otra vez los botones 'Atacar' y 'Cambiar'.*/
function mostrartabla(){
    _texto.style.display = "none";
    _flecha2.style.display = "none";
    _tabla_ppal.style.display = "block";
    _flecha2.removeEventListener("click", mostrartabla);
    clearTimeout(this);
    if(maqactual[2] <= 0){
        cambiarmaq();
    }
    if(actual[2] <= 0){
        cambiar();
    }
}


/*GANADOR*/
/** Función llamada desde 'acabarturno()' y 'continuamaquina()'.
 * Ocultamos el escenario y todos los elementos del combate. Y cargamos todos
 * los elementos de la pantalla winner.*/
function winner(){
    _musica_combate.pause();
    _escenario.style.display = "none";
    _tabla_ppal.style.display = "none";
    _tabla_ataques.style.display = "none";
    _miniature.style.display = "none";
    _flecha2.style.display = "none";
    _texto.style.textAlign = "center";
    _texto.style.marginRight = "-10px";
    _texto.style.display = "block";
    _texto.innerText = "¡Enhorabuena, has ganado!\n\nCelébralo con Ditto";
    document.getElementById("volver_juego").style.display = "block";
    document.getElementById("volver_juego").addEventListener("click", recargar);
    document.getElementById("winner").style.display = "block";
    document.getElementById("musica_loser").pause();
    document.getElementById("conga").play();
    document.getElementById("conga").volume = 0.1;
    document.getElementById("halldefama").style.display = "block";
    document.getElementById("hall1").src = "img/"+pok1[1]+"/"+pok1[0].toLowerCase()+".gif";
    document.getElementById("hall2").src = "img/"+pok2[1]+"/"+pok2[0].toLowerCase()+".gif";
    document.getElementById("hall3").src = "img/"+pok3[1]+"/"+pok3[0].toLowerCase()+".gif";
}


/*PERDEDOR*/
/** Función llamada desde 'continuaractual()' y 'acabarturno()'.
 * Ocultamos el escenario y todos los elementos del combate. Y cargamos todos
 * los elementos de la pantalla loser.*/
function loser(){
    _musica_combate.pause();
    _escenario.style.display = "none";
    _tabla_ppal.style.display = "none";
    _tabla_ataques.style.display = "none";
    _miniature.style.display = "none";
    _flecha2.style.display = "none";
    _texto.style.textAlign = "center";
    _texto.style.display = "block";
    _texto.innerText = "¡Has perdido! Pikachu te consuela...";
    document.getElementById("volver_juego").style.display = "block";
    document.getElementById("volver_juego").addEventListener("click", recargar);
    document.getElementById("winner").style.display = "block";
    document.getElementById("conga").style.display = "none";
    document.getElementById("loser").style.display = "block";
    document.getElementById("musica_loser").play();
    document.getElementById("halldefama").style.display = "none";
}


/*REINICIAR JUEGO*/
/** Función llamada desde 'winner()' y 'loser()', al pulsar el botón
 * 'Volver al inicio'.
 * Recargamos toda la página, reiniciando así todas las variables y volviendo
 * a la pantalla INICIO.*/
function recargar(){
    location.reload();
}


/*FUNCION ALEATORIA*/
/** Función llamada desde 'combate()', 'cargarmaq()', 'quienatacaprimero()',
 * 'damage()' y 'damagemaq()'.
 * @param:
 *  #min -> Número mínimo
 *  #max -> Número máximo
 * @retunr: devuelve un número aleatorio entre min (incluido) y max (excluido)*/
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}