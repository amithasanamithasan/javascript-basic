var myself = {
    name:'Amit Hasan Faysal',
    address:'uttar badda abdullha bag',
    hight:'5.6inc',
    weight:'53kg'
    
}

// var usemobile ={
//     name:'vivo12',
//     camera:'50px',
//     ram:'8gb',
//     harddisk:'64gb',
//     price:20000


// }

// var total= myself,usemobile;
//  console.log(myself);
// //  change myself object  key/propertise:weight ,values 59 change  
//  myself.weight='59';
//  console.log(myself,usemobile);

var count = myself.hight;
// alternative system
var count2 = myself['hight'];
var propertise= Object.keys(myself);
var propertisevalues= Object.values(myself);
var propertiseName= 'weight';
var propertisevalues =myself[propertiseName];


console.log(propertiseName,propertisevalues);

//  console.log(propertise);
//  console.log(propertisevalues);

//   console.log(myself);

// set properties value change
myself.address='rampura bazar';
console.log(myself);