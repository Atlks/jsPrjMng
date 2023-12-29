

selectRows=[3,4,2]

selectRows = selectRows.sort((a, b) => b-a)

console.log(selectRows)

//  [ 4, 3, 2 ]



//---------
//  [ 2, 3, 4 ]
console.log(selectRows.sort((a, b) => a-b))