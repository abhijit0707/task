const mobiles = [
    {
       displaySizeByInch: 5.5 ,
       brand: "i-phone" ,
       processor: "snapdragon 865",
    },
    {
        displaySizeByInch: 6 ,
        brand: "MI" ,
        processor: "snapdragon 865",
     },
     {
        displaySizeByInch: 4 ,
        brand: "samsung" ,
        processor: "mediatek dimensity 1000",
     },
];

const mobileDisplaySize =  mobiles.filter((mobile)=>{
    if(mobile.displaySizeByInch >=5)
    {
        return true;
    }
});

console.log(mobileDisplaySize)

const miMobiles = mobiles.filter((mobile) =>{
    if(mobile.brand === "MI"){
        return true;
    }
});
console.log(miMobiles)
// OR
console.log("OR")

const samsungMobile = mobiles.filter((mobile)=> mobile.brand==="samsung")
console.log(samsungMobile)