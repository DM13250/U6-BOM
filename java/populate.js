"use-strict"

function initPopulate() {
    //Creacion Categorias
    try {
        var cate1 = new Category("Anime", "Dibujos animados de origen japonés.");
        var cate2 = new Category("Miedo", "Peliculas que son de miedo");
        var cate3 = new Category("Disney", "Dibujos animados de Disney");
        var cate4 = new Category("Acción", "Películas que suele haber explosiones y combates con/sin armas cuerpo a cuerpo y persecuciones.");
    } catch (error) {
        console.log("" + error);
    }


    //Futuros Directores
    try {
        var per1 = new Person("Xiaomi", "Suzuki", "", new Date(1963, 12, 25), "");
        var per2 = new Person("John", "Stallone", "", new Date(1972, 09, 12), "");
        var per3 = new Person("Bartolo", "Rodriguez", "", new Date(1993, 07, 15), "");
        var per4 = new Person("Rosa", "Díaz", "", new Date(1981, 02, 22), "");
    } catch (error) {
        console.log("" + error);
    }

    //Futuros Actores
    try {
        var per5 = new Person("Lucia", "Moreno", "", new Date(1974, 10, 09), "");
        var per6 = new Person("Ruben", "Sobrino", "Rodriguez", new Date(1998, 6, 23), "");
        var per7 = new Person("Sofia", "Ortiz", "", new Date(1993, 10, 21), "");
    } catch (error) {
        console.log("" + error);
    }

    //Creacion de Localizaciones
    try {
        var coor = new Coordinate(90, 90);
        var coor2 = new Coordinate(90, 50);
    } catch (error) {
        console.log(error.toString());
    }
    //Creacion Resource
    try {
        var resource1 = new Resource(180, "http://www.resource.com/resource", ["Español", "Ingles"], ["Chino", "Frances"]);
        var resource2 = new Resource(120, "http://www.resource1.com/resource1", ["Español", "Ingles"], ["Chino", "Frances"]);
        var resource3 = new Resource(23, "http://www.resource2.com/resource2", ["Ruso", "Aleman"], ["Portugues", "Italiano"]);
    } catch (error) {
        console.log("" + error);
    }

    //Creacion Peliculas
    try {
        var mov1 = new Movie("Pokemon", "Japones", new Date(2018, 04, 15), "", "", resource1, coor);
        var mov2 = new Movie("Verdad o Reto", "USA", new Date(2018, 10, 27), "", "", resource2, coor);
        var mov3 = new Movie("Frozen", "USA", new Date(2015, 11, 5), "", "", resource1, coor2);
        var mov4 = new Movie("Venom", "USA", new Date(2018, 10, 18), "", "", resource3, coor2);
    } catch (error) {
        console.log("" + error);
    }

    //Creación de Usuarios
    try {
        var user1 = new User("Ruben", "ruben@google.com", "ruben1");
        var user2 = new User("Lucia", "lucia@hotmail.com", "lucia2");
        var user3 = new User("Pepe", "pepe@yahoo.com", "pepe3");
    } catch (error) {
        console.log("" + error);
    }
    //Creacion Season
    try {
        var season1 = new Season("A", ['Temporada1']);
        var season2 = new Season("A", ['Temporada1', 'Temporada2']);
    } catch (error) {
        console.log("" + error);
    }

    try {
        var video = VideoSystem.getInstance();
        video.name = "DAW2";
    } catch (error) {
        console.log(error.toString());
    }

    try {
        video.addCategory(cate1);
        video.addCategory(cate2);
        video.addCategory(cate3);
        video.addCategory(cate4);
    } catch (error) {
        console.log("" + error);
    }

    try {
        video.addProduction(mov1);
        video.addProduction(mov2);
        video.addProduction(mov3);
        video.addProduction(mov4);
    } catch (error) {
        console.log("" + error);
    }

    try {
        video.addDirector(per1);
        video.addDirector(per2);
        video.addDirector(per3);
        video.addDirector(per4);
    } catch (error) {
        console.log("" + error);
    }

    try {
        video.addActor(per5);
        video.addActor(per6);
        video.addActor(per7);
    } catch (error) {
        console.log("" + error);
    }

    try {
        video.addUser(user1);
        video.addUser(user2);
        video.addUser(user3);
    } catch (error) {
        console.log("" + error);
    }

    //Asignamo Categoria a una produccion
    try {
        video.assignCategory(cate1, mov1);
        video.assignCategory(cate2, mov2);
        video.assignCategory(cate3, mov3);
        video.assignCategory(cate4, mov4);
    } catch (error) {
        console.log("" + error);
    }

    //Asignamos una produccion a un director
    try {
        video.assignDirector(per1, mov1);
        video.assignDirector(per2, mov2);
        video.assignDirector(per3, mov3);
        video.assignDirector(per4, mov4);
    } catch (error) {
        console.log("" + error);
    }

    //Asignamos una produccion a un Actor
    try {
        video.assignActor(per5, mov1);
        video.assignActor(per6, mov2);
        video.assignActor(per7, mov3);
        video.assignActor(per5, mov4);
    } catch (error) {
        console.log("" + error);
    }

}

function init() {
    initPopulate();
    showHomePage();
    categoriesMenuPopulate();
}

window.onload = init;

function showHomePage() {
    var div1 = document.getElementById("listCategories");
    video = VideoSystem.getInstance();
    var categorias = video.categories;
    var categoria = categorias.next();
    while (!categoria.done) {
        //Crea las card de la zona central
        var div2 = document.createElement("div");
        div2.setAttribute("class", "card col-lg-3");
        var imagen = document.createElement("img");
        imagen.setAttribute("class", "card-img-top");
        imagen.setAttribute("src", "img/" + categoria.value.name + ".jpeg");
        imagen.setAttribute("alt", categoria.value.name);
        var div3 = document.createElement("div");
        div3.setAttribute("class", "card-header");
        var buttonTitle = document.createElement("button");
        buttonTitle.setAttribute("id", "botonCategoria");
        buttonTitle.setAttribute("type", "button");
        buttonTitle.setAttribute("value", categoria.value.name);
        buttonTitle.setAttribute("class", "btn btn-link collapsed");
        buttonTitle.setAttribute("onclick", "showProductions('" + categoria.value.name + "')");
        buttonTitle.appendChild(document.createTextNode(categoria.value.name));
        var div4 = document.createElement("div");
        div4.setAttribute("class", "card-body");
        var p1 = document.createElement("p");
        p1.appendChild(document.createTextNode(categoria.value.description));

        //Estructura para el HTML
        div2.appendChild(imagen);
        div1.appendChild(div2);
        div3.appendChild(buttonTitle);
        div2.appendChild(div3);
        div4.appendChild(p1);
        div2.appendChild(div4);

        categoria = categorias.next();
    }
}

function categoriesMenuPopulate() {
    var div1 = document.getElementById("listCategories");
    var ul = document.getElementById("menu");
    video = VideoSystem.getInstance();
    var categorias = video.categories;
    var categoria = categorias.next();
    while (!categoria.done) {
        var li = document.createElement("li");
        li.setAttribute("class", "nav-item");
        li.setAttribute("onclick", "showProductions('" + categoria.value.name + "')");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "nav-link text-white");
        a.appendChild(document.createTextNode(categoria.value.name));
        li.appendChild(a);
        ul.appendChild(li);

        categoria = categorias.next();
    }

}

function showDirectors() {
    var ul = document.getElementById("persons");
    var div1 = document.getElementById("person");
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    video = VideoSystem.getInstance();
    var directors = video.directors;
    var director = directors.next();
    while (!director.done) {
        var nombre = director.value.name + " " + director.value.lastName1;
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "text-dark h4");
        a.setAttribute("onclick", "showDirector('" + director.value.name + "')");
        a.appendChild(document.createTextNode(nombre));
        li.appendChild(a);
        ul.appendChild(li);
        director = directors.next();
    }
}

function showDirector(nombre) {
    var encontrado = false;
    var directores = video.directors;
    var director = directores.next();
    var div1 = document.getElementById("person");
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    while ((!director.done) && (encontrado != "true")) {
        var nombreCompleto = director.value.name;
        if (nombreCompleto == nombre) {
            var div2 = document.createElement("div");
            var titulo = document.createElement("h1");
            titulo.setAttribute("class", "text-dark");
            titulo.appendChild(document.createTextNode(director.value.name));
            var h4 = document.createElement("h4");
            h4.setAttribute("class", "h3 text-secondary mt-3");
            h4.appendChild(document.createTextNode("Informacion sobre el director: "));
            var imagen = document.createElement("img");
            imagen.setAttribute("class", "card-img");
            if (director.value.picture == "") {
                imagen.setAttribute("src", "img/defecto.jpg");
            } else {
                imagen.setAttribute("src", "img/" + director.value.picture + ".jpg");
            }
            var p3 = document.createElement("p");
            p3.setAttribute("class", "text-dark h4");;
            p3.appendChild(document.createTextNode("Nombre: " + director.value.name));
            var p4 = document.createElement("p");
            p4.setAttribute("class", "text-dark h4");;
            p4.appendChild(document.createTextNode("Apellidos: " + director.value.lastName1 + " " + director.value.lastName2));
            var p5 = document.createElement("p");
            p5.setAttribute("class", "text-dark h4");;
            p5.appendChild(document.createTextNode("Nacimiento: " + director.value.born.toLocaleDateString()));

            div1.appendChild(titulo);
            div1.appendChild(div2);
            div2.appendChild(h4);
            div2.appendChild(imagen);
            div2.appendChild(p3);
            div2.appendChild(p4);
            div2.appendChild(p5);


            var h4 = document.createElement("h4");
            h4.setAttribute("class", "h3 text-secondary mt-3");
            h4.appendChild(document.createTextNode("Producciones que ha dirigido:"));
            div2.appendChild(h4);
            var productions = video.getProductionsDirector(director.value);
            var production = productions.next();
            while (!production.done) {
                var p = document.createElement("p");
                p.setAttribute("class", "text-dark h4");
                p.appendChild(document.createTextNode("Titulo: "));
                var button = document.createElement("button");
                button.setAttribute("class", "h4 text-dark btn btn-link");
                button.setAttribute("onclick", "showProduction('" + production.value.title + "')");
                button.appendChild(document.createTextNode(production.value.title));
                p.appendChild(button);
                div2.appendChild(p);
                production = productions.next();
            }
        }
        encontrado = true;
        director = directores.next();
    }
}

function showActors() {
    var ul = document.getElementById("persons");
    var div1 = document.getElementById("person");
    video = VideoSystem.getInstance();
    var actores = video.actors;
    var actor = actores.next();
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    while (!actor.done) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "text-dark h4");
        a.setAttribute("onclick", "showActor('" + actor.value.name + "')");
        a.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastName1));
        li.appendChild(a);
        ul.appendChild(li);
        actor = actores.next();
    }
}


function showActor(nombre) {
    var encontrado = false;
    var actores = video.actors;
    var actor = actores.next();
    var div1 = document.getElementById("person");
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    while ((!actor.done) && (!encontrado)) {
        var nombreCompleto = actor.value.name;
        if (nombreCompleto == nombre) {
            var div2 = document.createElement("div");
            var titulo = document.createElement("h1");
            titulo.setAttribute("class", "text-dark");
            titulo.appendChild(document.createTextNode(actor.value.name));
            var p = document.createElement("p");
            p.setAttribute("class", "h3 text-secondary mt-3");
            p.appendChild(document.createTextNode("Informacion sobre el actor: "));
            var imagen = document.createElement("img");
            imagen.setAttribute("class", "card-img");
            if (actor.value.picture != "") {
                imagen.setAttribute("src", "img/" + actor.value.picture + ".jpg");
            } else {
                imagen.setAttribute("src", "img/defecto.jpg");

            }
            var p3 = document.createElement("p");
            p3.setAttribute("class", "text-dark h4");
            p3.appendChild(document.createTextNode("Nombre: " + actor.value.name));
            var p4 = document.createElement("p");
            p4.setAttribute("class", "text-dark h4");
            p4.appendChild(document.createTextNode("Apellidos: " + actor.value.lastName1 + " " + actor.value.lastName2));
            var p5 = document.createElement("p");
            p5.setAttribute("class", "text-dark h4");
            p5.appendChild(document.createTextNode("Nacimiento: " + actor.value.born.toLocaleDateString()));

            div1.appendChild(titulo);
            div1.appendChild(div2);
            div2.appendChild(p);
            div2.appendChild(imagen);
            div2.appendChild(p3);
            div2.appendChild(p4);
            div2.appendChild(p5);

            var film = document.createElement("p");
            film.setAttribute("class", "mt-3 h3 text-secondary");
            film.appendChild(document.createTextNode("Producciones que ha actuado:"));
            div2.appendChild(film);
            var productions = video.getProductionsActor(actor.value);
            var production = productions.next();
            while (!production.done) {
                var p = document.createElement("p");
                p.setAttribute("class", "text-dark h4");
                p.appendChild(document.createTextNode("Titulo: "));
                var button = document.createElement("button");
                button.setAttribute("class", "h4 text-dark btn btn-link");
                button.setAttribute("onclick", "showProduction('" + production.value.title + "')");
                button.appendChild(document.createTextNode(production.value.title));

                p.appendChild(button);
                div2.appendChild(p);
                production = productions.next();
            }
            encontrado = true;
        }
        actor = actores.next();
    }
}

function showProductions(nombreCategoria) {
    var encontrado = false;
    video = VideoSystem.getInstance();
    var categorias = video.categories;
    var categoria = categorias.next();
    var div1 = document.getElementById("person");
    var div2 = document.getElementById("persons");
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }
    while (div2.firstChild) {
        div2.removeChild(div2.firstChild);
    }
    while ((categoria.done !== true) && (!encontrado)) {
        if (categoria.value.name == nombreCategoria) {
            var productions = video.getProductionsCategory(categoria.value);
            var production = productions.next();
            while (production.done !== true) {
                var cateDescrip = document.createElement("p");
                cateDescrip.setAttribute("class", "mt-3 h3 text-secondary");
                cateDescrip.appendChild(document.createTextNode("En películas o series de " + nombreCategoria + " se encuentran: "));
                var ul = document.createElement("ul");
                var li = document.createElement("li");
                li.setAttribute("class", "card-text btn btn-link ");
                li.setAttribute("onclick", "showProduction('" + production.value.title + "')");
                li.appendChild(document.createTextNode(production.value.title));
                ul.appendChild(li);
                div1.appendChild(cateDescrip);
                div1.appendChild(ul);
                production = productions.next();
            }
            encontrado = true;
        }
        categoria = categorias.next();
    }
}


function showProduction(title) {
    //Se selecciona la zona donde va a ir el nuevo contenido
    var div1 = document.getElementById("person");
    div1.setAttribute("class", "mt-3 h3 text-secondary");
    //Elimina todo el contenido del div
    while (div1.firstChild) {
        div1.removeChild(div1.firstChild);
    }

    //Sacara toda la información de la pelicula
    var encontrado = false;
    var producciones = video.productions;
    var produccion = producciones.next();

    while ((produccion.done != true) && (!encontrado)) {
        if (produccion.value.title == title) {
            var div2 = document.createElement("div");
            div2.setAttribute("class", "col-lg-12 col-md-12 mb-4");
            var div3 = document.createElement("div");
            var titulo = document.createElement("h1");
            titulo.setAttribute("class", "mt-3 h3 text-secondary");
            titulo.appendChild(document.createTextNode(produccion.value.title));
            var imagen = document.createElement("img");
            imagen.setAttribute("class", "card-img  col-lg-6 img-fluid");
            imagen.setAttribute("src", "img/" + produccion.value.title + ".jpg");
            imagen.setAttribute("alt", produccion.value.title);
            var p1 = document.createElement("p");
            p1.setAttribute("class", "text-dark h4");
            p1.appendChild(document.createTextNode("Nacionalidad: " + produccion.value.nacionality));
            var p2 = document.createElement("p");
            p2.setAttribute("class", "text-dark h4");
            p2.appendChild(document.createTextNode("Fecha de publicacion: " + produccion.value.publication.toLocaleDateString()));
            var p3 = document.createElement("p");
            p3.setAttribute("class", "text-dark h4");
            p3.appendChild(document.createTextNode("Sipnosis: " + produccion.value.synopsis));
            if (produccion.value instanceof Movie) {
                //Si es una peli muestra los recursos y las localizaciones
                if (produccion.value.resource != "") {
                    var p4 = document.createElement("p");
                    p4.setAttribute("class", "text-dark h4");
                    p4.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));
                }
                if (produccion.value.locations != "") {
                    var p5 = document.createElement("p");
                    p5.setAttribute("class", "text-dark h4");
                    p5.appendChild(document.createTextNode("Localizacion: " + produccion.value.locations));
                }
            } else {
                //Si es una serie muestra las temporadas
                if (produccion.value.seasons != "") {
                    var p4 = document.createElement("p");
                    p4.setAttribute("class", "text-dark h4");
                    p4.appendChild(document.createTextNode("Temporadas: " + produccion.value.seasons));
                }
            }
            var recurso = document.createElement("button");
            recurso.setAttribute("value", produccion.value.title);
            recurso.setAttribute("class", "btn btn-link btn-lg btn-block");
            recurso.appendChild(document.createTextNode("Mostrar recursos"));
            recurso.addEventListener("click", openWindows(produccion));


            div1.appendChild(titulo);
            div1.appendChild(div2);
            div2.appendChild(div3);
            div3.appendChild(imagen);
            div3.appendChild(p1);
            div3.appendChild(p2);
            div3.appendChild(p3);
            div1.appendChild(recurso);

            if (produccion.value.resource != "") {
                div3.appendChild(p4);
            }
            if (produccion.value.locations != "") {
                div3.appendChild(p5);
            }
            if (produccion.value.seasons != "") {
                div3.appendChild(p4);
            }

            //Mostramos los actores
            var actores = video.getCast(produccion.value);
            var actor = actores.next();
            while (actor.done !== true) {
                var div4 = document.createElement("div");
                div4.setAttribute("class", "col-lg-4 col-md-6 mb-4");
                var div5 = document.createElement("div");
                div5.setAttribute("class", "card-body");
                var p = document.createElement("p");
                p.setAttribute("class", " mt-3 h3 text-secondary");
                p.setAttribute("id", "actor");
                p.appendChild(document.createTextNode("Actores que participan en la pelicula: "));
                var btn = document.createElement("button");
                btn.setAttribute("class", "btn btn-link btn-lg btn-block text-dark h4");
                btn.setAttribute("type", "button");
                btn.setAttribute("onclick", "showActor('" + actor.value.name + "')");
                var nombre = actor.value.name + " " + actor.value.lastName1;
                btn.appendChild(document.createTextNode(nombre));


                //Se crea la estructura de las tarjetas con appendChild
                div1.appendChild(div4);
                div4.appendChild(div5);
                div5.appendChild(p);
                div5.appendChild(btn);


                actor = actores.next();
            }

            var encontrado = false;
            var directores = video.directors;
            var director = directores.next();
            while ((director.done !== true) && (!encontrado)) {
                var productions = video.getProductionsDirector(director.value);
                var production = productions.next();

                while (production.done !== true) {
                    if (production.value.title === title) {
                        var div6 = document.createElement("div");
                        div6.setAttribute("class", "col-lg-4 col-md-6 mb-4");
                        var div7 = document.createElement("div");
                        div7.setAttribute("class", "card-body");
                        var p = document.createElement("p");
                        p.setAttribute("class", "text-secondary h4");
                        p.setAttribute("id", "director");
                        p.appendChild(document.createTextNode("Director que realiza la película: "));
                        var btn = document.createElement("button");
                        btn.setAttribute("type", "button");
                        btn.setAttribute("id", produccion.value.title);
                        btn.setAttribute("onclick", "showDirector('" + director.value.name + "')");
                        btn.setAttribute("class", "btn btn-link btn-lg btn-block text-dark h4");
                        var nombre = director.value.name + " " + director.value.lastName1;
                        btn.appendChild(document.createTextNode(nombre));

                        //Se crea la estructura de las tarjetas con appendChild
                        div1.appendChild(div6);
                        div6.appendChild(div7);
                        div7.appendChild(p);
                        div7.appendChild(btn);

                    }
                    production = productions.next();
                }
                director = directores.next();
            }

            encontrado = true;
        }

        produccion = producciones.next();
    }
}

var listV = [];
var videosystem = VideoSystem.getInstance();
videosystem.name = "VideoSystem de prueba";

function openWindows(produccion) {

    var ventana;

    function closeWindows() {
        return function () {

            for (var i = 0; i < listV.length; i++) {
                listV[i].close();
            }

            var cat = document.getElementById("closeWindows");
            removeChildsElement(cat);
        }
    }

    function resource() {
        var long = listV.length - 1;

        var divSct1 = listV[long].document.getElementById("sct");
        divSct1.setAttribute("class", "d-flex justify-content-around");
        var divFoto = document.createElement("div");
        divFoto.setAttribute("class", "col-lg-6");

        var divThumb = document.createElement("div");
        divThumb.setAttribute("class", "thumbnail");

        var img = document.createElement("img");
        img.setAttribute("src", "img/" + produccion.value.title + ".jpg");
        divThumb.appendChild(img);
        console.log(img);
        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "col-lg-6");
        divInfo.setAttribute("id", "info");

        var title = document.createElement("h2");
        title.appendChild(document.createTextNode(produccion.value.title));
        console.log(title);
        divInfo.appendChild(title);

        var table = document.createElement("table");
        table.setAttribute("class", "table table-striped");

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        var tr1 = document.createElement("tr");
        tbody.appendChild(tr1);
        var dur = document.createElement("th");
        dur.appendChild(document.createTextNode("Duración"));
        tr1.appendChild(dur);
        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(produccion.value.resource.duration + " minutos."));
        tr1.appendChild(td1);
        console.log(td1);
        var tr2 = document.createElement("tr");
        tbody.appendChild(tr2);
        var link = document.createElement("th");
        link.appendChild(document.createTextNode("Link"));
        tr2.appendChild(link);
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(produccion.value.resource.link));
        tr2.appendChild(td2);
        console.log(td2);
        var tr3 = document.createElement("tr");
        tbody.appendChild(tr3);
        var aud = document.createElement("th");
        aud.appendChild(document.createTextNode("Audios"));
        tr3.appendChild(aud);
        var td3 = document.createElement("td");

        var audios = "";
        var alength = produccion.value.resource.audios.length;
        for (var i = 0; i < alength; i++) {
            if (i == alength - 1) {
                audios += produccion.value.resource.audios[i];
            } else {
                audios += produccion.value.resource.audios[i] + ", ";
            }

        }
        td3.appendChild(document.createTextNode(audios));
        tr3.appendChild(td3);
        console.log(audios);
        var tr4 = document.createElement("tr");
        tbody.appendChild(tr4);
        var subs = document.createElement("th");
        subs.appendChild(document.createTextNode("Subtitulos"));
        tr4.appendChild(subs);
        var td4 = document.createElement("td");

        var subtitulos = "";
        var slength = produccion.value.resource.subtitles.length;
        for (var i = 0; i < slength; i++) {
            if (i == slength - 1) {
                subtitulos += produccion.value.resource.subtitles[i];
            } else {
                subtitulos += produccion.value.resource.subtitles[i] + ", ";
            }

        }
        td4.appendChild(document.createTextNode(subtitulos));
        tr4.appendChild(td4);
        console.log(subtitulos);
        divFoto.appendChild(divThumb);
        divInfo.appendChild(table);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }


    return function () {
        ventana = window.open("pantallaNueva.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=400,left=400,width=950,height=550");
        listV.push(ventana);

        ventana.onload = resource;
    }
}

function showResource(produccion) {
    //Se recoge el titulo de la produccion
    var tituloProduccion = document.getElementById("tituloProduccion");

    //Se recorre el array de ventanas 
    for (let index = 0; index < ventanas.length; index++) {
        //Si el titulo es igual a la ventana que haya en el array
        if (ventanas[index].name == produccion) {
            //Selecciona la zona de la ventana nueva
            var ventana = ventanas[index];
        }
    }

    var contenidoVentana = ventana.document.getElementById("contenidoZona");
    //Cambia el titulo de la ventana
    ventana.document.title = "Recursos de " + produccion;

    var encontrado = false;
    var producciones = video.productions;
    var produccion = producciones.next();
    while ((produccion.done !== true) && (!encontrado)) {
        //Compara el titulo de la produccion del iterador con el titulo que hay en el h2 de la tarjeta
        if (produccion.value.title == produccion) {
            //Si la produccion es una movie tendra unos parametros distintos a las series

            var tarjeta = document.createElement("div");
            tarjeta.setAttribute("class", "col-lg-12 col-md-12 mb-4");
            var borde = document.createElement("div");
            borde.setAttribute("class", "card h-100");
            var cuerpo = document.createElement("div");
            cuerpo.setAttribute("class", "card-body");
            var tipo = document.createElement("h5");
            tipo.setAttribute("class", "mx-auto text-center");
            tipo.setAttribute("id", "actorDirector");
            tipo.appendChild(document.createTextNode("Actor"));
            var imagen = document.createElement("img");
            imagen.setAttribute("class", "card-img");
            imagen.setAttribute("width", "50");
            imagen.setAttribute("heigh", "50");

            /* FOTO DE LAS TARJETAS */
            imagen.setAttribute("src", "img/" + produccion.value.title + ".png");
            imagen.setAttribute("alt", produccion.value.title);

            //Pinta todo en la nueva ventana
            var tituloProdu = ventana.document.getElementById("tituloZona");
            tituloProdu.setAttribute("class", "mx-auto text-center");
            tituloProdu.innerHTML = tituloProduccion.textContent;

            contenidoVentana.appendChild(tarjeta);
            tarjeta.appendChild(borde);
            borde.appendChild(cuerpo);
            cuerpo.appendChild(imagen);

            if (produccion.value instanceof Movie) {
                //Si es distinto de null pone el recurso de la produccion
                if (produccion.value.resource != null) {
                    var resource = document.createElement("p");
                    resource.setAttribute("class", "card-text");

                    /* SIPNOSIS DE LA PRODUCCION */
                    resource.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));
                    cuerpo.appendChild(resource);
                }
                //Si es distinto de null pone la localizacion de la produccion
                if (produccion.value.locations != null) {
                    var locations = document.createElement("p");
                    locations.setAttribute("class", "card-text");

                    /* SIPNOSIS DE LA PRODUCCION */
                    locations.appendChild(document.createTextNode("Localizacion: " + produccion.value.locations));
                    cuerpo.appendChild(locations);
                }
            } //Fin del instanceof

            if (produccion.value.seasons != null) {
                //Si tiene temporadas las muestra

                for (let index = 0; index < produccion.value.seasons.length; index++) {
                    var season = document.createElement("p");
                    season.setAttribute("class", "cajaTitulo");
                    season.appendChild(document.createTextNode("Temporada " + (index + 1) + ":"));

                    cuerpo.appendChild(season);

                    for (let indexArray = 0; indexArray < produccion.value.seasons[index].episodes.length; indexArray++) {
                        var episodio = document.createElement("p");
                        episodio.setAttribute("class", "cajaDescripcion");

                        var concatenar = produccion.value.seasons[index].episodes[indexArray].title + ": " +
                            produccion.value.seasons[index].episodes[indexArray].episode + " ";

                        for (let indexCoor = 0; indexCoor < produccion.value.seasons[index].episodes[indexArray].scenarios.length; indexCoor++) {
                            concatenar += produccion.value.seasons[index].episodes[indexArray].scenarios[indexCoor] + " ";
                        }

                        episodio.appendChild(document.createTextNode(concatenar));
                        cuerpo.appendChild(episodio);
                    }
                }
            }
        } //Fin del if
        produccion = producciones.next();
    } //Fin del while
} //Fin de showResource