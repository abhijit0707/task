// 1.break statements

for(i=0;i<10;i++)
{
    if(i===5){
        console.log("found it.!")
        break;

    }
};

//...........................................................

//2.continue>

for(i=0;i<10;i++)
{
    if(i===5){
        console.log("5 found, and exit it!")
        continue;
    }
    console.log(i);
};

