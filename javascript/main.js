function toys (name,type,price,stock,image){
	this.name = name;
	this.type = type;
	this.price = price;
	this.stock = stock;
	this.image = image;
}

var toysArray = []

var revan= new toys("Darth Revan", "Action Figure", 199.99, 1, "http://ecx.images-amazon.com/images/I/71bwSeu3o7L._SL1000_.jpg")
var bb8 = new toys("BB-8","Remote Control", 150, 20,"http://ecx.images-amazon.com/images/I/81E6gtwEqXL._SL1500_.jpg")
var vader = new toys("Darth Vader", "Action Figure", 30, 65, "http://ecx.images-amazon.com/images/I/815o84KL09L._SL1500_.jpg")
var obiwan = new toys("Obi-Wan Kenobi", "Action Figure", 20, 32, "http://ecx.images-amazon.com/images/I/71xavweLEHL._SL1500_.jpg")
var boba = new toys("Boba Fett", "Action Figure", 35, 21, "http://ecx.images-amazon.com/images/I/61S7kyo7WKL._SL1001_.jpg")
var yoda = new toys("Yoda", "Life Like", 70, 7, "http://ecx.images-amazon.com/images/I/91Au8mepKtL._SL1500_.jpg")

toysArray.push(revan)
toysArray.push(bb8)
toysArray.push(vader)
toysArray.push(obiwan)
toysArray.push(boba)
toysArray.push(yoda)

for(i=0; i < toysArray.length; i++) {
	var toyName = document.createTextNode(toysArray[i].name)
	var toyType = document.createTextNode("Type: " + toysArray[i].type)
	var toyPrice = document.createTextNode("Price: $" + toysArray[i].price)
	var toyStock = document.createTextNode("In Stock: " + toysArray[i].stock)
	var toyButton = document.createTextNode("Add to Cart")
	var toyPic = toysArray[i].image

	var newCol= document.createElement("div")
	var newDiv = document.createElement("div")
	var nameH1 = document.createElement("h1")
	var stockH4 = document.createElement("h4")
	var typeH4 = document.createElement("h4")
	var priceH4 = document.createElement("h4")
	var buyNow = document.createElement("button")
	var image = document.createElement("img")

	nameH1.appendChild(toyName)
	typeH4.appendChild(toyType)
	priceH4.appendChild(toyPrice)
	stockH4.appendChild(toyStock)
	buyNow.appendChild(toyButton)
	buyNow.className = "btn btn-primary btn-lg"
	image.src = toyPic
	image.className = "img-responsive"

	newCol.className = "col-sm-4"
	newDiv.className = "star toy Name" + i + " thumbnail"
	newDiv.appendChild(nameH1)
	newDiv.appendChild(image)
	newDiv.appendChild(stockH4)
	newDiv.appendChild(typeH4)
	newDiv.appendChild(priceH4)
	newDiv.appendChild(buyNow)
	newCol.appendChild(newDiv)

	document.getElementById("toys").appendChild(newCol)
}