    //  var items=[' name',' camera',' ram',' harddisk',' price'];
    //  var friend age=[12,35,56,45,32,52];
 
 var usemobile ={
        name:'vivo12',
         camera:'50px',
         ram:'8gb',
         harddisk:'64gb',
        price:20000
     }
 
    var myself = {
        name:'Amit Hasan Faysal',
        address:'uttar badda abdullha bag',
        hight:'5.6inc',
        weight:'53kg'
        
    }
     const keys= Object.keys(usemobile);
     console.log(keys);
      const values= Object.values(usemobile);
       console.log(values);

      var secondkey=Object.keys(myself);
      console.log(secondkey);
      var scondvalue=Object.values(myself);
      console.log(scondvalue);

    //   looping system
    for (i=0;  i< keys.length;i++){
        console.log(values[i]);
        console.log(keys[i]);
    }
