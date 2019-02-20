"use-strict"

//Objeto Person
function Person(name, lastName1, lastName2,born ,picture) {
   //Invoca con el operador new el objeto
    if (!(this instanceof Person)) { 
        throw new InvalidAccessConstructorException();
    }
    
    //Comprobación de los valores por primera vez
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") {
        throw new EmptyValueException("name");
    }
    lastName1 = typeof lastName1 !== 'undefined' ? lastName1 : "";
    if (lastName1 === "") {
        throw new EmptyValueException("lastName1");
    }
    lastName2 = typeof lastName2 !== 'undefined' ? lastName2 : "";
    if (!(born instanceof Date)){
        throw new InvalidAccessException("Date");
    }
	born = typeof born !== 'undefined' ? born : "";
	if (born === ""){
        throw new InvalidDateException("born");
    }
    picture = typeof picture !== 'undefined' ? picture : "";
    
    var _name = name;
    var _lastName1 = lastName1;
    var _lastName2 = lastName2;
    var _born = born;
    var _picture = picture;

    //Definición de todas las propiedades del objeto
    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("name");
            }
            _name = value;
        }
    });

    Object.defineProperty(this, 'lastName1', {
        get: function () {
            return _lastName1;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("lastName1");
            }
            _lastName1 = value;
        }
    });

    Object.defineProperty(this, 'lastName2', {
        get: function () {
            return _lastName2;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            _lastName2 = value;
        }
    });


    Object.defineProperty(this, 'born', {

        get: function () {
            return _born;
        },
        set:function(value){
            if(!(value instanceof Date)){
                throw new InvalidAccessException(Date);
            }
            value = typeof value !== 'undefined' ? value : "";
            if (value === ""){
                throw new EmptyValueException("born");
            }
			_born = value;
		}
    });

    Object.defineProperty(this, 'picture', {
        get: function () {
            return _picture;
        },
        set: function (value) {
            value = typeof value!== 'undefined' ? value : "";
            _picture = value;
        }
    });      
}
Person.prototype = {}; 
Person.prototype.constructor = Person;
Person.prototype.toString = function () {//Con la function toString escribe por pantalla los datos
    return this.name + " " + this.lastName1 + " " + this.lastName2 + " " + this.born + " " + this.picture;
}

//Objeto Category
function Category(name, description) {
    //Invoca con el operador new el objeto
    if (!(this instanceof Category)) {
        throw new InvalidAccessConstructorException();
    }
    //Elimina los espacios del principio y del final de la cadena
    name = name.trim();

    //Comprobación de los valores por primera vez
    name = typeof name !== 'undefined' ? name : "";
    if (name === "") {
        throw new EmptyValueException("name");
    }
    description = typeof description !== 'undefined' ? description : "";


    var _name = name;
    var _description = description;

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("name");
            }
            _name = value;
        }
    });

    Object.defineProperty(this, 'description', {
        get: function () {
            return _description;
        },
        set: function (description) {
            value = typeof description !== 'undefined' ? description : "";
            _description = value;
        }
    });
}
Category.prototype = {}; 
Category.prototype.constructor = Category;
Category.prototype.toString = function () {
    return this.name + " " + this.description;
}

//Objeto Resource
function Resource(duration, link, audios, subititles) {
    //Invoca con el operador new el objeto
    if (!(this instanceof Resource)) {
        throw new InvalidAccessConstructorException();
    }
    
    //Elimina los espacios del principio y del final de la cadena
    link = link.trim();

    //Comprobación de los valores por primera vez
    duration = typeof duration !== 'undefined' ? duration : 0;
	if (duration === 0){
        throw new EmptyValueException("duration");
    }
	link = typeof link !== 'undefined' ? link : "";
	if (link === ""){
        throw new EmptyValueException("link");
    }
	audios = typeof audios !== 'undefined' ? audios : [];
	subtitles = typeof subtitles !== 'undefined' ? subtitles : [];

    var _duration = duration;
    var _link = link;
    var _audios = audios;
    var _subtitles = subititles;


    Object.defineProperty(this, 'duration', {
        get: function () {
            return _duration;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : 0;
            if (value == 0 || Number.isNaN(value)) {
                throw new EmptyValueException("duration");
            }
            _duration = value;
        }
    });

    Object.defineProperty(this, 'link', {
        get: function () {
            return _link;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("link");
            }
            _link = value;
        }
    });

    Object.defineProperty(this, 'audios', {
        get: function () {
            return _audios;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            _audios = value;
        }
    });

    Object.defineProperty(this, 'subtitles', {
         get: function () {
            return _subtitles
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            _subtitles = value;
        }
    });
}
Resource.prototype = {}; 
Resource.prototype.constructor = Resource;
Resource.prototype.toString = function () {
    return this.duration + " " + this.link + " " + this.audios+ " " + this.subtitles; 
}

//Objeto Production
function Production(title, nacionality, publication, synopsis, image) { //Padre de movie y serie
    //Invoca con el operador new el objeto
    if (!(this instanceof Production)) {
        throw new InvalidAccessConstructorException();
    }
    
    if ((this.constructor === Production)) {
        throw new AbstractClassException("Production");
    }

    //Comprobación de los valores por primera vez
    title = typeof title !== 'undefined' ? title : "";
    if (title === "") {
        throw new EmptyValueException("title");
    }
    publication = typeof publication !== 'undefined' ? publication : "";
    if (publication === "") {
        throw new EmptyValueException("publication");
    }
    nacionality = typeof description !== 'undefined' ? description : "";
    synopsis = typeof description !== 'undefined' ? description : "";
    image = typeof description !== 'undefined' ? description : "";

    var _title = title;
    var _nacionality = nacionality;
    var _publication = publication;
    var _synopsis = synopsis;
    var _image = image;

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("title");
            }
            _title = value;
        }
    });

    Object.defineProperty(this, 'nacionality', {
        get: function () {
            return _nacionality;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            _nacionality = value;
        }
    });

    Object.defineProperty(this, 'publication', {
        get: function () {
            return _publication;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("publication");
            }
            _publication = value;
        }
    });

    Object.defineProperty(this, 'synopsis', {
        get: function () {
            return _synopsis;
        },
        set: function (value) {
             value = typeof value !== 'undefined' ? value : "";
            _synopsis = value;
        }
    });

    Object.defineProperty(this, 'image', {
        get: function () {
            return _image;
        },
        set: function (value) {
             value = typeof value !== 'undefined' ? value : "";
            _image = value;
        }
    });

}
Production.prototype = {}; 
Production.prototype.constructor = Production;
Production.prototype.toString = function () {
    return this.title + " " + this.nacionality + " " + this.publication + " " + this.synopsis + " " + this.image;
}

//Objeto Movie
function Movie(title, nationality, publication, synopsis, image, resource, locations) {
    //Invoca con el operador new el objeto
    if (!(this instanceof Movie)) { 
        throw new InvalidAccessConstructorException();
    }
    
    //Herencia de la clase padre a la clase hijo
    Production.call(this,title,nationality,publication,synopsis,image);
    
    //Comprobación de los valores por primera vez
    if (!(resource instanceof Resource) && !(resource === "")){
		throw new InvalidAccessException("Resource");
    }
	resource = typeof resource !== 'undefined' ? resource : "";
	for(var i = 0; i < locations.length; i++){
		if(!(locations[i] instanceof Coordinate))
			throw new InvalidAccessException("Coordinate");
	}
	locations = typeof locations !== 'undefined' ? locations : [];
    
    var _resource = resource;
    var _locations = locations;

    Object.defineProperty(this, 'resource', {
        get: function () {
            return _resource;
        },
        set: function (value) {
            if (!(resource instanceof Resource) && !(resource === "")){
		      throw new InvalidAccessException("Resource");
            }
			 value = typeof value !== 'undefined' ? value : [];
            _resource = value;
        }
    });
    
        Object.defineProperty(this, 'locations', {
		get:function(){
		    return _locations;
		},
        set:function(value){
			for(var i=0; i < value.length; i++){
				if(!(value[i] instanceof Coordinate)){
                    throw new InvalidAccessException("Coordinate");
                }
			}
			value = typeof value !== 'undefined' ? value : [];
			_locations = value;
		}
	});
}
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;
Movie.prototype.toString = function(){
	return Production.prototype.toString.call(this) + " " + this.resource+ " "+this.locations;
}

//Objeto Serie
function Serie(title, nationality, publication, synopsis, image, season) {
    //Invoca con el operador new el objeto
    if (!(this instanceof Serie)) {
        throw new InvalidAccessConstructorException();
    }
    
    //Herencia de la clase padre a la clase hijo
    Production.call(this,title,nationality,publication,synopsis,image);
    
    
    //Comprobación de los valores por primera vez
   for(var i=0; i < season.length; i++){
		if(!(season[i] instanceof Season)){
             throw new InvalidAccessException("Season");
         }   
	}
    
    season = typeof season !== 'undefined' ? season : [];
    var _season = season;
    
    Object.defineProperty(this, 'season', {
		get:function(){
		   return _seasons;
		},
       set:function(value){
			for(var i=0; i < value.length; i++){
				if(!(value[i] instanceof Season)){
                    throw new InvalidAccessException("Season");
                }
			}
			value = typeof value !== 'undefined' ? value : [];
			_seasons = value;
		}
	});
}
Serie.prototype = Object.create(Production.prototype);
Serie.prototype.constructor = Serie;
Serie.prototype.toString = function(){
	return Production.prototype.toString.call(this) + " Seasons: " + this.seasons;
}

function Season(title, episodes = null){
	//La función se invoca con el operador new
	if (!(this instanceof Season)) {
		throw new InvalidAccessConstructorException();}
	
		//Validación de parámetros obligatorios
	title = typeof title !== 'undefined' ? title : "";
	if (title === ""){ throw new EmptyValueException("title");}

    //Declaracion de atributos
    var _title = title;
    var _episodes = episodes || [];

	//Declaracion de getter y setters
	Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			value = typeof title !== 'undefined' ? value : "";
			if (value === ""){
				throw new EmptyValueException("title");
			}else{
				_title = value;
			}//Fin del if
		}		
	});		

	Object.defineProperty(this, 'episodes', {
		get:function(){
			return _episodes;
		},
		set:function(value){
			value = typeof episodes !== 'undefined' ? value : "";
			if (value === ""){
				throw new EmptyValueException("episodes");
			}else{
				_episodes = { 
					title: String, 
					episode: Resource, 
					scenarios: [Location] 
				};
			}//Fin del if
		}		
	});	
}//Fin de la funcion Serie
Season.prototype = {};
Season.prototype.constructor = Season;
Season.prototype.toString = function(){
	return this.title + ". Episodios: ["+ this.episodes + "]";
};

function User(username, email, password) {
    //Invoca con el operador new el objeto
    if (!(this instanceof User)) {
        throw new InvalidAccessConstructorException();
    }

    //Elimina los espacios del principio y del final de la cadena
    username.trim();
    email.trim();
    password.trim();

    //Comprobación de los valores por primera vez
    if (username === 'undefined' || username === ''){ 
        throw new EmptyValueException("username");
    }
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (username) !== true){
		throw new InvalidValueException("username", nickname);
    }
    email = typeof email !== 'undefined' ? email : "";
    if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email) !== true){
        throw new EmptyValueException("email");
    }
    password = typeof password !== 'undefined' ? password : "";
    if (password === "") {
        throw new EmptyValueException("password");
    }
    var _username = username;
    var _email = email;
    var _password = password;

    Object.defineProperty(this, 'username', {
        get: function () {
            return _username;
        },
        set: function (value) {
           if (value === 'undefined' || value === ''){
               throw new EmptyValueException("username");
           }
	if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]$/.test (value) !== true){
        throw new InvalidValueException("username", value);
    }
            _username = value;
        }
    });

    Object.defineProperty(this, 'email', {
        get: function () {
            return _email;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (/^[a-zA-Z][a-zA-Z0-9_\-]*(\.[a-zA-Z0-9_\-]*)*[a-zA-Z0-9]\@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(value) !== true){
                throw new InvalidValueException("email", value);
            }
            _email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return _password;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? value : "";
            if (value === "") {
                throw new EmptyValueException("password");
            }
            _password = value;
        }
    });

}
User.prototype = {};
User.prototype.constructor = User;
User.prototype.toString = function () {
    return this.username + " " + this.email + " " + this.password;
}

function Coordinate(latitude, longitude) {
    //Invoca con el operador new el objeto
    if (!(this instanceof Coordinate)){
        throw new InvalidAccessConstructorException();
    }

    //Comprobación de los valores por primera vez
    latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
    if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
        throw new InvalidValueException("latitude", latitude);
    longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
    if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
        throw new InvalidValueException("longitude", longitude);

    var _latitude = latitude;
    var _longitude = longitude;

    Object.defineProperty(this, 'latitude', {
        get: function () {
            return _latitude;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
            if (Number.isNaN(value) || value < -90 || value > 90)
                throw new InvalidValueException("latitude", value);
            _latitude = value;
        }
    });

    Object.defineProperty(this, 'longitude', {
        get: function () {
            return _longitude;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
            if (Number.isNaN(value) || value < -180 || value > 180)
                throw new InvalidValueException("latitude", value);
            _longitude = value;
        }
    });

}
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;
Coordinate.prototype.toString = function () {
    return this.latitude + " " + this.longitude;
}
