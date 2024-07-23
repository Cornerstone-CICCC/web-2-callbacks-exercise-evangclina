const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (err, data1) => {
  // console.log(data1)
  fs.readFile("./lastname.txt", "utf-8", (err, data2) => {
    // console.log(data2)
    fs.readFile("./age.txt", "utf-8", (err, data3) =>{
      // console.log(data3)
      fs.readFile("./hobbies.txt", "utf-8", (err, data4) =>{
        // console.log(data4)
        const array = data4.split("")
        // console.log(array)
        array.splice(0, 1)
        array.splice(0, 1)
        array.splice(8,1)
        array.splice(8,1)
        array.splice(9,1)
        array.splice(16,1)
        array.splice(16,1)
        const array2 = array.join("")
        // console.log(array2)
        const array3 = array2.split(" ")
        // console.log(array3)
        console.log(`${data1} ${data2} is ${data3} years old and his hobbies are ${array3[0]} and ${array3[1]}.`)
      })
    })
  })
})