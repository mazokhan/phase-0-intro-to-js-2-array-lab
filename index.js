// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat = (Ralph) =>{
    cats.push('Ralph');
};

const destructivelyPrependCat = (bob) =>{
cats.unshift('bob');
};

const destructivelyAppendCat =(Ralph) =>{}
    cats.pop('Ralph');

const removeFirstCat = () => {
    cats.shift(); 
};

const appendCat = (Broom) =>{
    const y = [...cats,"broom"]
    return y;
};

const prependCat = (Arnold) =>{
    const y = [Arnold...cats]
    return y;
};

const removeLastCat = () =>{
    const y = cats.slice(0,cats.length-1);
    return y;
};

const removeFirstCat = () =>{
    const y = cats.slice[1];
    return y;
}
