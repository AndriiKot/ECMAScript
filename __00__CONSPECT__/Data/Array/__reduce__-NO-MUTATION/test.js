const busStops = [[1, 2], [3, 4]];


const pepole = busStops.reduce((count,acc) => {
 return count += acc[0] - acc[1]
}, 0);

console.log(pepole);



 
