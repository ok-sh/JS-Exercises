var fs = require('fs');

var output = fs.readFileSync('person-list.txt', 'utf8')
.trim()
.split('\r\n')
.map(line=>line.split('\t'))
.reduce((acc, cur, idx, src)=>{
    acc[cur[0]] = acc[cur[0]] || [];
    acc[cur[0]].push({
        name: cur[1],
        price: cur[2],
        quantity: cur[3]
    })
    return  acc
},{})
console.log("output: ", JSON.stringify(output, null, 2))
