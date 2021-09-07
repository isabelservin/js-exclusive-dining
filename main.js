alert("Welcome to the the Whisky Wagon!")
let partySz = parseInt(prompt("How many members are in your party?"))

while (!Number.isInteger(partySz)){
    partySz = parseInt(prompt("Sorry, that is not a valid response. We need to know the amount of people in your party."))
}

if (partySz > 8) {
    alert("I'm sorry but we are at capacity and we cannot seat you at this time.")
} else if (partySz <= 8) {
    let over21 = prompt("Is everyone 21 and over?")
    console.log(over21)

    while (over21 !== "yes" && over21 !== "no"){
        over21 = prompt("Sorry, that's not a valid answer. Is everyone 21 and over? Yes or no?")
    }

    if (over21 === "no"){
        alert("Sorry this is a 21 an over only bar.")
    } else if (over21 === "yes"){
        let validId = prompt("Does everyone have a valid ID?")
        
        while(validId !== "yes" && validId !== "no"){
            validId = ("Sorry that isn't a valid answer, please try again.")
        }

        if(validId === "no"){
            alert("All members must have a valid ID.")
        } else if(validId === "yes"){
            let dressCode = prompt("At The Whisky Wagon only your Sunday best is allowed in. No jeans allowed. Is everyone adhering to our dress code?")

            while(dressCode !== "yes" && dressCode !== "no"){
                dressCode = prompt("I need a 'yes' or a 'no'.")
            } 
            
            if(dressCode === "no"){
                alert("Sorry if you don't follow our dress code then we cannot let you in.")
            } else {
                alert("Welcome in! Feel free to seat yourselves!")
            }
        }
    }
}

