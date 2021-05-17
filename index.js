function Hello(){
    console.log("Hello World");
}



function Greeting(val){
   val+Hello();
}

Greeting("John");

//function as a variable
let printMe = function (val){
    console.log(val+" Hello SLIIT");
    //console.log(`Hello SLIIT ${val}`);

    //to write in the web page
    document.write("<h1> Hello" +val+"</h1>"); 
}

printMe("Kamal");

//below is the Jason object
let student = {
    first:"Kamal",
    second:"Perera",
    age:22,
    welcome:function(){
        return `${this.first} is ${this.age} years old`;
    }

    
};

document.write("<h1>"+student.welcome()+"</h1>");


//Below variable is a global variable
    window.VehicleName = "Toyata";

    let printVehicleName = function(vName){
        document.write(`<h1>${vName}</h1>`);
    }
     
printVehicleName(window.VehicleName);

let Vehicle ={
    VehicleName:"Nisan",
    getVehicleName: function(){
        printVehicleName(this.VehicleName);
    }
}
Vehicle.getVehicleName();
//below code refers the global variable toyota
printVehicleName(this.VehicleName);

//this will display window variable
this.VehicleName = "Audi";
printVehicleName(this.VehicleName);


//closure means that function inside the function
 
let taxpct = 0.3;
let vat = function(){
    let amount =1000;
    let tot =function(){
        let taxpct = 0.2; 
        return function(){
             amount=amount+amount*taxpct;
            return amount;
        }();
        
    }
    return tot(amount);
}

document.write(`<h1>${vat(taxpct)}</h1>`);
document.write(`<h1>${taxpct}</h1>`);
//Jason api
//fetch('https://jsonplaceholder.typicode.com/posts')
//.then(response => response.json())
//.then(data => {
  //  console.log(data);
//});

document.addEventListener('DOMContentLoaded', function() {
    // Send a GET request to the URL
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        // Log data to the console
        console.log(data);
    });
});


