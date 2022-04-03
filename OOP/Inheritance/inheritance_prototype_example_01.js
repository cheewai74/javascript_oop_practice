function Bike(company){
    this.company = company;
}

Bike.prototype.getCompany = function()
{
    return this.company;
}

function Vehicle(name, price){
    this.name = name;
    this.price = price;
}

var bike = new Bike("Honda");
Vehicle.prototype=bike;
var vehicle = new Vehicle("Shine", 80000);
console.log(vehicle.getCompany() + " " + vehicle.name +" "+vehicle.price);