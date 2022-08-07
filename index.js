// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name){
cats.push(name);
return cats;
};

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
};

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
};

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
};

function appendCat(name){
const newCatArray = [...cats];
newCatArray.push(name);
return newCatArray;
};

function prependCat(name){
    const newCatArray = [...cats];
    newCatArray.unshift(name);
    return newCatArray;
    };

    function removeLastCat(name){
        const newCatArray = [...cats];
        newCatArray.pop(name);
        return newCatArray;
        };

        function removeFirstCat(name){
            const newCatArray = [...cats];
            newCatArray.shift(name);
            return newCatArray;
            };


console.log(`appendCat returns : ${appendCat("Broom")}.`);
console.log(`cats returns : ${cats}.`);
console.log(`newCatArray returns : ${newCatArray}.`);
