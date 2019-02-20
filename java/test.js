function testVideoSystem(){
	console.log("##### Testeo del Objeto Person. ##### ");
	try {
		var per1 = new Person("Ruben","Sobrino","Rodriguez", new Date(1998, 6, 23),"");
		var per2 = new Person("Lucia","Ortiz","Bobada",new Date(1993,10,21),"");
		var per3 = new Person("Ramon","Rodriguez","",new Date(1995,02,25),"");
		console.log(per1.toString());
		console.log(per2.toString());
		console.log(per3.toString());
	} catch (error) {
		console.log(error.toString());
	}
	try {
		var per4 = new Person("");
		console.log(per4.toString());
	} catch (error) {
		console.log(error.toString());
	}
    console.log("####################################### ");
    
	console.log("##### Testeo del Objeto Category. ##### ");
	try {
		var cate1 = new Category("Accion","Disparos");
		var cate2 = new Category("Terror", );
		var cate3 = new Category("Dibujo");
		console.log(cate1.toString());
		console.log(cate2.toString());
		console.log(cate3.toString());
	} catch (error) {
		console.log(error.toString());
	}

	try {
		var cate4 = new Category();
		console.log(cate4.toString);
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

    console.log("##### Testeo del Objeto Resource. ##### ");
	try {
		var resource = new Resource(180,"http://www.resource.com/resource",["Español","Ingles"],["Chino","Frances"]);
		var resource1 = new Resource(120,"http://www.resource1.com/resource1");
		var resource2 = new Resource(23,"http://www.resource2.com/resource2",["Ruso","Aleman"],["Portugues","Italiano"]);
		console.log(resource1.toString());
		console.log(resource2.toString());
	} catch (error) {
		console.log(error.toString());
	}
	try {
		var resource3 = new Resource(11,"");
		console.log(resource3.toString);
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
    
    console.log("##### Testeo del Objeto Production. ##### ");
    try {
		var production = new Production("Pixar","",new Date(1976,10,11),"","");
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

    console.log("##### Testeo del Objeto Coordinate. ##### ");
	try {
		var coor = new Coordinate(80,114);
		console.log("Coordenadas coor1: " + coor.toString());
	} catch (error) {
		console.log(error.toString());
	}
    try {
			var coor = new Coordinate(-190,90);
			console.log("Coordenadas coor2: " + coor2.toString);
		} catch(error) {
			console.log(error.toString());
		}
		try {
			var coor3 = new Coordinate(-90,190);
			console.log("Coordenadas coor3: " + coor3.toString);
		} catch(error) {
			console.log(error.toString());
		}	
    
	console.log("####################################### ");

    console.log("##### Testeo del Objeto Movie. ##### ");
    try {
		var mov1 = new Movie("Pokemon","Japones",new Date(2018,04,15),"","",resource1,coor);
		var mov2 = new Movie("Spider-man","Americano",new Date(1999,10,09),"","",resource2,[]);
		console.log(mov1.toString());
		console.log(mov2.toString());
    } catch (error) {
        console.log(error.toString());
	}

    try {
		var movie3 = new Movie();
		console.log(movie3.toString());
    } catch (error) {
        console.log(error.toString());
	}
	console.log("####################################### ");
	
    console.log("##### Testeo del Objeto User. ##### ");
	try {
		var user = new User("Ruben","ruben@google.com","ruben1");
		var user1 = new User("Lucia","lucia@hotmail.com","lucia2");
		var user2 = new User("Pepe","pepe@yahoo.com","pepe3");
		console.log("Objeto User: ");
		console.log(user.toString());
		console.log(user1.toString());
		console.log(user2.toString());
	} catch (error) {
		console.log(error.toString());
	}
	try {
		var user3 = new User("Prueba","F","");
		console.log(user3.toString);
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
    
    console.log("##### Testeo del Objeto Season. ##### ");
	try { 
        var season1 = new Season("A",[
        'Temporada1']);
        var season2 = new Season("A",[
            'Temporada1','Temporada2']);
		console.log(season1.toString());
		console.log(season2.toString());
	} catch (error) {
		console.log(error.toString());
	}
	try {
		var season3 = new Season();
		console.log(season3.toString);
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
    console.log("##### Testeo del Objeto Serie. ##### ");
	try {
		var serie1 = new Serie("Shin-Chan","Japonesa",new Date(1999,02,15),"Anime","http://www.shin-chan.es/resource4",[season1,season2]);
		var serie2 = new Serie("Juego de Tronos","Americana",new Date(2016,05,05),"","http://www.juegosdeTrono.es/resource5",[season1,season2,season3]);
		console.log(serie1.toString());
		console.log(serie2.toString());
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

	// INICIO DE LAS FUNCIONES DEL OBJETO VIDEOSYSTEM 
	try {
        console.log("##### Testeo del Objeto VideoSystem. ##### ");
		var video = VideoSystem.getInstance();
		video.name = "DAW2";
		console.log("Nombre del VideoSystem: " + video.name);
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
    
    try {
		console.log("Añadimos la categoria " + cate1.name + ": " + video.addCategory(cate1));
		console.log("Añadimos la categoria " + cate2.name + ": " + video.addCategory(cate2));
		console.log("Añadimos la categoria " + cate3.name + ": " + video.addCategory(cate3));
	} catch (error) {
		console.log(error.toString());
	}

	try {
		console.log("Añadimos la categoria " + cate3.name +": " + video.addCategory(cate3));
	} catch (error) {
		console.log(error.toString());
	}
console.log("####################################### ");

	console.log("##### Testeo de la Funcion Mostrar Categoria. ##### ");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log (" " + categoria.value);
		categoria = categorias.next();
	}
	console.log("####################################### ");

	try {
		console.log("Eliminamos la categoria " + cate1.name +": " + video.removeCategory(cate1));
	} catch (error) {
		console.log(error.toString());
	}
    try {
		console.log("Eliminamos la categoria " + cate1.name +": " + video.removeCategory(cate1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

	console.log("##### Volvemos a mostrar las categorias. ##### ");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log (" " + categoria.value);
		categoria = categorias.next();
	}
	console.log("####################################### ");

	try {
		console.log("Añadimos el usuario " + user.username + ": " + video.addUser(user));
		console.log("Añadimos el usuario " + user1.username + ": " + video.addUser(user1));
		console.log("Añadimos el usuario " + user2.username + ": " + video.addUser(user2));
	} catch (error) {
		console.log(error.toString());
	}

	try {
		console.log("Añadimos el usuario " + user2.username + ": " + video.addUser(user2));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

	console.log("##### Testeo de la Funcion Mostrar Usuarios. ##### ");
	var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
	}
    console.log("####################################### ");
	try {
		console.log("Eliminamos el usuario " + user.username + ": " + video.removeUser(user));
	} catch (error) {
		console.log(error.toString());
	}
    try {
		console.log("Eliminamos el usuario " + user.username + ": " + video.removeUser(user));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

	console.log("##### Volvemos a mostrar las categorias. ##### ");
	var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log (" " + usuario.value);
		usuario = usuarios.next();
	}
    try {
		console.log("Añadimos la produccion " + mov1.title + ": " + video.addProduction(mov1));
		console.log("Añadimos la produccion " + mov2.title + ": " + video.addProduction(mov2));
		console.log("Añadimos la produccion " + serie1.title + ": " + video.addProduction(serie1));
	} catch (error) {
		console.log(error.toString());
	}
	
	try {
		console.log("Añadimos la produccion " + mov1.title + ": " + video.addProduction(mov1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	console.log("##### Mostramos las producciones. ##### ");
	var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log (" " + produccion.value);
		produccion = producciones.next();
	}
	console.log("####################################### ");
	
	try {
		console.log("Eliminamos la produccion "+ serie1.title + ": " + video.removeProduction(serie1));
	} catch (error) {
		console.log(error.toString());
	}
    	try {
		console.log("Eliminamos la produccion " + serie1.title +": " + video.removeProduction(serie1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	console.log("#### Volvemos a mostrar las producciones ####");
	var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log (" " + produccion.value);
		produccion = producciones.next();
	}
	console.log("####################################### ");
	
	try {
		console.log("Añadimos al actor " + per1.name + ": " + video.addActor(per1));
		console.log("Añadimos al actor " + per2.name + ": " + video.addActor(per2));
	} catch (error) {
		console.log("" + error);
	}
	
	try {
		console.log("Añadimos al actor "+ per9.name +": " + video.addActor(per9));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	console.log("#### Mostramos los actores ####");
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
	}
	console.log("####################################### ");
	
	try {
		console.log("Eliminamos al actor "+ per2.name +": " + video.removeActor(per2));
	} catch (error) {
		console.log(error.toString());
	}
    try {
		console.log("Eliminamos al actor "+ per2.name +": " + video.removeActor(per2));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	try {
		console.log("Añadimos al director " + per1.name + ": " + video.addDirector(per1));
		console.log("Añadimos al director " + per3.name + ": " + video.addDirector(per3));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

    try {
		console.log("Eliminamos al director "+ per1.name +": " + video.removeDirector(per1));
	} catch (error) {
		console.log(error.toString());
	}
    try {
		console.log("Eliminamos al director "+ per2.name +": " + video.removeDirector(per2));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	try {
		console.log("Asignamos la produccion '" + mov1.title + "' a la categoria '"+ cate1.name +"': " + video.assignCategory(cate1,mov1));
		console.log("Asignamos la produccion '" + mov2.title + "' a la categoria '"+ cate2.name +"': " + video.assignCategory(cate2,mov2));
		console.log("Asignamos la produccion '" + serie1.title + "' a la categoria '"+ category2.name + "': " + video.assignCategory(cate2,serie1));
	} catch (error) {
		console.log(error.toString());
	}
	try {
		console.log("Asignamos la produccion '"+ serie1.title +"' a la categoria '"+ cate2.name +"': " + video.assignCategory(cate2,serie1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

	console.log("#### Mostramos las producciones que tiene la categoria " + cate1.name + " ####");
	var productions = video.getProductionsCategory(cate1);
	var production = productions.next();
	while (production.done !== true){
		console.log (" " + production.value.title);		
		production = productions.next();
	}
	console.log("####################################### ");
	
	console.log("#### Mostramos las producciones que tiene la categoria " + cate2.name + " ####");
	var productions = video.getProductionsCategory(cate2);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("####################################### ");
	
	
	try {
		console.log("Eliminamos la produccion de "+ serie1.title +" de la categoria "+ cate2.name + ": " + video.deassignCategory(cate2,serie1));
	} catch (error) {
		console.log(error.toString());
	}
    try {
		console.log("Quitamos la produccion "+ serie1.title +" de la categoria "+ cate2.name + ": " + video.deassignCategory(cate2,serie1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
    
	console.log("#### Volvemos a mostrar las producciones de la categoria " + cate2.name + " ####");
	var productions = video.getProductionsCategory(cate2);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("####################################### ");
	
	try {	
		console.log("Asignamos la produccion " + mov1.title +" al director " + per3.name +": " + video.assignDirector(per3,mov1));
		console.log("Asignamos la produccion " + mov2.title +"' al director " + per3.name +": " + video.assignDirector(per3,mov2));
	} catch (error) {
		console.log(error.toString());
	}
	try {	
		console.log("Asignamos la produccion "+ mov1.title +" al director '"+ per3.name +" : " + video.assignDirector(per3,mov1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");

	console.log("#### Mostramos las producciones del director ####");
	var productions = video.getProductionsDirector(per3);
	var production = productions.next();
	while (production.done !== true){
		console.log (" " + production.value.title);		
		production = productions.next();
	}
	console.log("####################################### ");
	
	try{
		console.log("Eliminamos la produccion "+ mov1.title + " al director "+ per3.name + ": " + video.deassignDirector(per3,mov1));
	} catch (error) {
		console.log(error.toString());
	}
    try{
		console.log("Eliminamos la produccion "+ mov1.title + " al director "+ per3.name + ": " + video.deassignDirector(per3,mov1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	try {	
		console.log("Asignamos la produccion " + mov1.title + " al actor " + per1.name + ": " + video.assignActor(per1,mov1));
		console.log("Asignamos la produccion "+ mov2.title +" al actor "+ per1.name +": " + video.assignActor(persona,movie));
	} catch (error) {
		console.log(error.toString());
	}
	try {	
		console.log("Asignamos la produccion " + mov2.title + " al actor " + per2.name + ": " + video.assignActor(per2,mov2));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
    
	console.log("#### Mostramos las producciones del actor " + per1.name + " ####");
	var productions = video.getProductionsActor(per1);
	var production = productions.next();
	while (production.done !== true){
		console.log ("Produccion: " + production.value.title);
		production = productions.next();
	}
	console.log("####################################### ");
	
	try{
		console.log("Eliminamos la produccion " + mov1.title + " al actor " + per1.name +": " + video.deassignActor(per1 ,mov1));
	} catch (error) {
		console.log(error.toString());
	}
    try{
		console.log("Eliminamos la produccion " + mov1.title + " al actor " + per1.name +": " + video.deassignActor(per1 ,mov1));
	} catch (error) {
		console.log(error.toString());
	}
	console.log("####################################### ");
	
	
	console.log("#### Volvemos a mostrar las producciones del actor " + per1.name + " ####");
	var productions = video.getProductionsActor(per1);
	var production = productions.next();
	while (production.done !== true){
		console.log ("Produccion: " + production.value.title);
		production = productions.next();
	}
	console.log("####################################### ");
    
	console.log("#### Mostramos el reparto de " + mov2.title + " ####");
	var actores = video.getCast(mov2);
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("Actor: " + actor.value.name);		
		actor = actores.next();
	}
    console.log("####################################### ");
}
window.onload = testVideoSystem;
