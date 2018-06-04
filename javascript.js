var listOfAnimals = ["Squirrel" , "Deer" , "Dog" , "Cat" , "Pig" , "Lion" , "Bird" , "Bear" , "Horse" , "Tiger" , "Rhinocerous" , "Gray wolf" , "Cattle" , "Goat" , "Snakes" , "Leopard" , "Sheep" , "Duck" , "Goose" , "Snail" , "Hippopotamus" , "Ferret" , "Giraffe" , "Antelope" , "Armadillo" , "Turtle" , "Otter" , "Hare" , "Cheetah" , "Camel" , "Raccoon" , "Gorilla" , "Frog" , "Weasels" , "Crocodile" , "Cygnini", "Lizard" , "Coyote" , "Rat" , "Owl" , "Lemuroidea" , "Chimpanzee" , "Mouse" , "Heron" , "Hyena", "Bat" , "Crows" , "Panthera" , "Beaver" , "Baboons" , "Parrot" , "Butterfly"];
var name = prompt("Please enter the name of an animal");
		
		if(listOfAnimals.includes(name)){
			alert("Yaay!" + " " + name + " " + "exists on my list");
		}

		else{
			alert("Ooops!!!" + " " + name + " " + "does not exist on my list"); 
		}
		