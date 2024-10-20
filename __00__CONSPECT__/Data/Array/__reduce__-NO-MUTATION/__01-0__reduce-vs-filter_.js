// Best Praxe

{
  function howManySmaller(arr, n) {
    return arr.filter((x) => +x.toFixed(2) < n).length;
  }
}

{
  function howManySmaller(arr, n) {
    total = 0;

    for (i = 0; i < arr.length; i++) {
      if (arr[i].toFixed(2) < n) total++;
    }

    return total;
  }
}

{
	function howManySmaller(arr, n) {
  	let count = 0;
  	const len = arr.length;
  	for (let i = 0; i < len; i++) {
    	arr[i] = Math.round(arr[i] * 100) / 100;
    	if (arr[i] < n) {
      	count++;
    	}
  	}
  	return count;
	}
}

// My solution
function howManySmaller(arr, n) {
  return arr.reduce(
    (count, num) => (Math.round(num * 100) / 100 < n ? count + 1 : count),
    0
  );
}
