function mash(){
    let string= getHome()
    let string2 = getChildrenCount()
    let car= getCar()
    console.log("You will live in a " + string +" " + "and will have" + " " + string2 + " " + "kids" + " " + "and" + " " + "you'll drive a" + " " + car)
}

mash()

function getHome(){
    const homes = ["Mansion",
     "Apartment",
     "Shack",
     "House"
    ];
    homes.push(process.argv[2])
    homes.push("homeLess")
    let pick = Math.random() * homes.length;
    let integer = Math.floor(pick)
    return homes[integer]
}


function getChildrenCount(){;
    let number=Math.random();
    let number1= number * 101;
    let random = Math.floor(number1);
    let random1= Math.floor(Math.random() * 2) + 1
    if(random1 ==2){
      return process.argv[3]
    } else if(random1==1){
        return random
    }
}

function getCar(){
    const vehicles= ["Lamborghini", "Ferrari", "Honda", "Porsche", "Ford"]
    vehicles.push(process.argv[4])
    let picker = Math.random() * vehicles.length;
    let integer2 = Math.floor(picker)
    return vehicles[integer2]
}