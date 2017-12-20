const cars = {
    "Acura NSX": "Daniel Walther",
    "Audi A3": "John Smith",
    "Dacia Duster": "Mister Beans"
};

console.log(cars);

const otherCars = {
    ...cars,
    "Renault Talisman": "Jean Dupont"
}

console.log(otherCars);
