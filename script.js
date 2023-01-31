const helloWorld = document.createElement('div');
helloWorld.textContent = "Testing";

document.body.append(helloWorld);

console.log("I'm a secret message")

let myFruits = ["apples", "bannanas", "turkey"]

//myFruits.forEach(i => console.log(`I really love ${i}`));

function printFruits(myFruits){
    for (let i=0; i < myFruits.length; i++) {
    const element = document.createElement('p');
    element.textContent = `Whoa - look at this cool ${myFruits[i]}`;
    document.body.append(element);
    }
}

printFruits(myFruits)
