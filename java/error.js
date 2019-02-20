function BaseException() {
}
BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException; 

BaseException.prototype.toString = function(){
	return this.name + ": " + this.message;
};

function ParameterValidationException() {//Excepciones de validación de parámetros.
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException(); 
ParameterValidationException.prototype.constructor = ParameterValidationException;


function EmptyValueException(param) {//Excepcion para valores vacio
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
EmptyValueException.prototype = new ParameterValidationException();
EmptyValueException.prototype.constructor = EmptyValueException;


function InvalidValueException(param, value) {//Excepción de valor inválido
	this.name = "InvalidValueException";
	this.message = "Error: The paramenter " + param + " has an invalid value. (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException(); //Heredamos de ParameterValidationException
InvalidValueException.prototype.constructor = InvalidValueException;


function InvalidAccessConstructorException() {//Excepción al acceso inválido a constructor
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException(); 
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;


function UninstantiatedObjectException(param) {//Excepción acceso inválido a constructor
	this.name = "UninstantiatedObjectException";
	this.message = "You can't instantiate a " + param + " object";
}
UninstantiatedObjectException.prototype = new BaseException(); 
UninstantiatedObjectException.prototype.constructor = UninstantiatedObjectException;


function AbstractClassException(classValue) {//Excepción intento de instacia clase abstracta
	this.name = "AbstractClassException";
	this.message = classValue + " is a abstract class.";
}
AbstractClassException.prototype = new BaseException(); 
AbstractClassException.prototype.constructor = AbstractClassException;
function InvalidDateException(param){
    this.name = "InvalidDateException";
    this.message = "Error: La fecha introducida " + param + " no es correcta";
}
InvalidDateException.prototype = new BaseException();
InvalidDateException.prototype.constructor = InvalidDateException;