var loopArray = [

{img:"resized/derpcorn.jpg",
 name: "Derpy Corn",
 description: "The derpiest of the Corns (and the cutest!)",
 price: "1 billion dollars"
},

{img:"resized/humancorn.jpg",
 name: "Sexy Corn",
 description: "The sexiest of all the Corns",
 price: "Rental Only: $1000 a day"
},

{img:"resized/inviscorn.jpg",
 name: "Invisa Corn",
 description: "His body may seem nonexistent, but in reality its just invisible!",
 price: "$500,000"
},

{img:"resized/robocorn.jpg",
 name: "Robo Corn",
 description: "The Corn of the future",
 price: "$1,000,000"
},

{img:"resized/siberiancorn.jpg",
 name: "Siberian Corn",
 description: "The realest and ugliest of the Corns",
 price: "$100,000"
},

{img:"resized/spacecorn.jpg",
 name: "Space Corn",
 description: "Space Corn (ah ah ah) fighter of the Eath Corn (ah ah ah) Champion of the Sun",
 price: "$2,000,000"
},

{img:"resized/studcorn.jpg",
 name: "Stud Corn",
 description: "The studliest of the Corns",
 price: "4,000,000",
},

{img:"resized/zomcorn.jpg",
 name: "Zombie Corn",
 description: "Hide yo Baby Corns Hide yo Mama Corns Zombie Corn eatin' errybody",
 price: "$0 Adopt at own risk!"
}
];

var linkDivs = document.getElementById("productDiv");
for (var i = 0; i < loopArray.length; i++) {

  
  linkDivs.innerHTML += "<img src='" + loopArray[i].img + "'>" + "<p class='name'>" + loopArray[i].name +
   "</p>" + "<p class='desc'>" + loopArray[i].description + "</p>" + "<p class='price'>" + loopArray[i].price + "</p>"
   console.log(linkDivs);
}








