function emp(id, name, salary){
    this.id = id;
    this.name = name;
    this.salary = salary;

    this.changeSalary = changeSalary;
    function changeSalary(otherSalary){
        this.salary = otherSalary;
    }
}

e = new emp(105,"Kate",100000);
document.write(e.id + " " + e.name + " " + e.salary);
e.changeSalary(150000);
document.write("<br>"+ e.id + " " + e.name + " " + e.salary);
