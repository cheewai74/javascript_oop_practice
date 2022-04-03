
// Creating a constructor function
function Vehicle(){
    this.vehicleName ="vehicleName";
    throw new Error("You cannot create an Abstract Class");
}

Vehicle.prototype.display = function()
{
    return "Vehicle is: " + this.vehicleName;
}

// Creating a constructor function
function Bike(vehicleName)
{
    this.vehicleName = vehicleName;
}

// Creating obj without using the function constructor
Bike.prototype = Object.create(Vehicle.prototype);
var bike = new Bike("Honda");
console.log(bike.display());