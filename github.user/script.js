fetch("https://api.github.com/users")
.then((res)=>res.json())
.then((data) => {
    //console.log(data)
    
 document.getElementById("userphoto").setAttribute("src",data[0].avatar_url)
 document.getElementById("username1").innerHTML = data[0].login
document.getElementById("visitprofile1").setAttribute("href",data[0].html_url)

document.getElementById("userphoto2").setAttribute("src",data[1].avatar_url)
 document.getElementById("username2").innerHTML = data[1].login
document.getElementById("visitprofile2").setAttribute("href",data[1].html_url)

document.getElementById("userphoto3").setAttribute("src",data[2].avatar_url)
 document.getElementById("username3").innerHTML = data[2].login
document.getElementById("visitprofile3").setAttribute("href",data[2].html_url)

document.getElementById("userphoto4").setAttribute("src",data[3].avatar_url)
 document.getElementById("username4").innerHTML = data[3].login
document.getElementById("visitprofile4").setAttribute("href",data[3].html_url)

document.getElementById("userphoto5").setAttribute("src",data[4].avatar_url)
 document.getElementById("username5").innerHTML = data[4].login
document.getElementById("visitprofile5").setAttribute("href",data[4].html_url)

document.getElementById("userphoto6").setAttribute("src",data[5].avatar_url)
 document.getElementById("username6").innerHTML = data[5].login
document.getElementById("visitprofile6").setAttribute("href",data[5].html_url)

document.getElementById("userphoto7").setAttribute("src",data[6].avatar_url)
 document.getElementById("username7").innerHTML = data[6].login
document.getElementById("visitprofile7").setAttribute("href",data[6].html_url)

document.getElementById("userphoto8").setAttribute("src",data[7].avatar_url)
 document.getElementById("username8").innerHTML = data[7].login
document.getElementById("visitprofile8").setAttribute("href",data[7].html_url)

document.getElementById("userphoto9").setAttribute("src",data[23].avatar_url)
 document.getElementById("username9").innerHTML = data[23].login
document.getElementById("visitprofile9").setAttribute("href",data[23].html_url)

document.getElementById("userphoto10").setAttribute("src",data[9].avatar_url)
 document.getElementById("username10").innerHTML = data[9].login
document.getElementById("visitprofile10").setAttribute("href",data[9].html_url)

document.getElementById("userphoto11").setAttribute("src",data[10].avatar_url)
 document.getElementById("username11").innerHTML = data[10].login
document.getElementById("visitprofile11").setAttribute("href",data[10].html_url)

document.getElementById("userphoto12").setAttribute("src",data[18].avatar_url)
 document.getElementById("username12").innerHTML = data[18].login
document.getElementById("visitprofile12").setAttribute("href",data[18].html_url)
})
