// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ] 
const newObject = {year: "2000", result: "L"}
// console.log(newObject)
// console.log(newObject.year)
// console.log(newObject.result)
// console.log(newObject.result === "W")

// function superbowlWin(array){
//     // for(let item of record){
//     //     if(finder (record) === true);
//     // }result = record 
//     console.log(array)
//    array.find(function (object){
//         return object.result === "W";
//     })
// } 
// superbowlWin(record)

// const secondObject ={year: "1999", result: "W"}


function checkWin(res){
    console.log(res);
    console.log(res.result)
    console.log(res.result === 'W');
    return res.result === 'W';
} 
// checkWin(newObject);
// checkWin(secondObject)


// function superbowlWin(record) {
//     if(record.find(checkWin)){
// return record.find(checkWin).year
// }}

function superbowlWin(record){
    const firstWin = record.find(checkWin);
    if(firstWin === undefined){
        return undefined
    }
    else{
        return firstWin.year
    }
    // return record.find(checkWin).year
}



// console.log(superbowlWin(record));

// function superbowlWin(record){
// }
