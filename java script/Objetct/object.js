let myLaptop = {
    brand: "Lenovo",
    processor: "i7 11th gen",
    storage: "2TB",
    color: "silver",
    battery: "4400WaH",
    weight: "1.5 kg",
    os: "windows 11",
    graphics: "Nvdia Geforce MX350",

    onStart:function(){
        console.log("computer is geting started..!")
    },

    onShutDown:function(){
        console.log("computer is shutting down..!")
    },

};
console.log(myLaptop)
// print using dot notation
console.log(myLaptop.os)
// print using bracket notation
console.log(myLaptop["battery"])
// print the method of object
console.log(myLaptop.onShutDown())



// METHOD BORROWING AND THIS KEYWORD ----------(VERY IMPORTANT)-----------

let sachinsLaptop = {
    ownerName:"sachin",
    brand: "Lenovo",
    processor: "i7 11th gen",
    storage: "2TB",
    battery: "4400WaH",
    weight: "1.5 kg",
    os: "windows 11",
    graphics: "Nvdia Geforce MX350",

    onStart:function(){
        console.log("computer is geting started..!")
    },

    onShutDown:function(){
        console.log("computer is shutting down..!")
    },

    quickHeal:function(purchasedate, color){
        console.log(`this laptop is owned by ${this.ownerName} & it's purchased on  ${purchasedate} having color ${color}`);
        console.log("removing viruses....!");
        setTimeout(()=>{
            console.log("system cleaned, 100 virus removed...!")
        }, 3000)
    },

};
sachinsLaptop.quickHeal("1/1/2022", "silver")
let gauravsLaptop = {
    ownerName:"gaurav",
    brand: "hp",
    processor: "i7 11th gen",
    storage: "2TB",
    battery: "4400WaH",
    weight: "1.5 kg",
    os: "windows 11",
    graphics: "Nvdia Geforce MX350",

    onStart:function(){
        console.log("computer is geting started..!")
    },
    
    onShutDown:function(){
        console.log("computer is shutting down..!")
    },
};
// method borrowing 
// 1.call
 sachinsLaptop.quickHeal.call(gauravsLaptop)//without parameters
 sachinsLaptop.quickHeal.call(gauravsLaptop,"12/2/2021","metalic black");//with parameters
// 2.apply
sachinsLaptop.quickHeal.apply(gauravsLaptop)//without parameters
sachinsLaptop.quickHeal.apply(gauravsLaptop, ["1/1/2021","metalic black"]);//using parameters
// 3.bind
let gauravsQuickHeal = sachinsLaptop.quickHeal.bind(gauravsLaptop)
console.log(gauravsQuickHeal())//without parameters
let gauravQuickHeal = sachinsLaptop.quickHeal.bind(gauravsLaptop)
console.log(gauravQuickHeal("1/1/2021", "black"))//with parameters


















