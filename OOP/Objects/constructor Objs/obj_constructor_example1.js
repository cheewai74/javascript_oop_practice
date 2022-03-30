/**
 * this keyword refers to current object.
 */

function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;
}

e = new emp(103,"Tom",95000);
document.write(e.id + " " + e.name + " " + e.salary);