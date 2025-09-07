const marvel_heroes=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

marvel_heroes.push(dc)
//>what we are doing here is to merge two arrays into one but this would not work as the push command would push the dc contemts as a one array means the whole content of the dc aray is at the 3rd index of the marvel array
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);
//>this command would give us flash as we are acessing the 3rd indexs 1st index element

const allheroes=marvel_heroes.concat(dc)
console.log(allheroes);
//we have to use a new array because concat saves the output into a new array and the araay would be properly added

const all_new_heroes = [...dc,...marvel_heroes]
console.log(all_new_heroes);
//>what this function does is that it spreads all the elements of both the array in a new array known as spread operator

const another_array=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
//>unfolds all the array into one single array

console.log(Array.isArray("raj"));
console.log(Array.from("raj"));
//>the first command checks whether it is array or not and the next line converts it into an array
console.log(Array.from({name:"raj"}));
//>you have to specify what needs to be done or this would be confused what is to be converted

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
//>gives me an array of the elements of the prev thrree scores





