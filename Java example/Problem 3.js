let StudentDetail = {
    Name:"Richa",
    Age:20,
    Grade:"A",
    City:"Toronto"
}

let FavSubject=["PHP","Java","C++","react.js","Node.js"];

console.log("Student Details:");

for(let key in StudentDetail){
    console.log(`${key}:${StudentDetail[key]}`);
}

console.log("Favorite Subjects:");

for(let subject of FavSubject){
    console.log(subject);
}



