var loopArray = [

{img:"derpcorn.jpg"
 name: "Derpy Corn"
 decsription: "The derpiest of the corns"
 price: "1 billion dollars"
}

{img:"humancorn.jpg"
 name: "Sexy Corn"
 decsription: "The sexiest of all the corns"
 price: "Rental Only: $1000 a day"
}

{img:"inviscorn.jpg"
 name: "Invisa Corn"
 decsription: "His body may seem nonexistent, but in reality its just invisible!"
 price: ""
}

{img:"robocorn.jpg"
 name: "Robo Corn"
 decsription: ""
 price: "$1,000,000"
}

{img:"siberiancorn.jpg"
 name: "Siberian Corn"
 decsription: ""
 price: ""
}

{img:"spacecorn.jpg"
 name: "Space Corn"
 decsription: ""
 price: ""
}

{img:"studcorn.jpg"
 name: "Stud Corn"
 decsription: ""
 price: ""
}

{img:"zomccorn.jpg"
 name: "Zombie Corn"
 decsription: ""
 price: ""
}
];

for (var i = 0; var i < loopArray.length; i++) {
  var linkDivs = getElementByID(productDiv);

  linkDivs.innerhtml += "<img src=" + loopArray.img[i] + "</img> + <p class="name">" + loopArray.name[i] +
   "</p><p class="desc">" + loopArray.description[i] + "</p><p class="price">" + loopArray.price[i] + "</p>"

}







