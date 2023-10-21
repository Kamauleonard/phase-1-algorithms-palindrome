function hasTargetSum(array, target, optimized = false) {
  if (optimized) {
    const seenNumbers = new Set();
    for (const number of array) {
      const complement = target - number;
      if (seenNumbers.has(complement)) return true;
      seenNumbers.add(number);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      const complement = target - array[i];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === complement) return true;
      }
    }
  }
  return false;
}

if (require.main === module) {
  // Test cases for hasTargetSum
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));

  console.log("");
  
  console.log("Expecting: true (optimized)");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10, true));
  
  console.log("");

  console.log("Expecting: true (optimized)");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25, true));
  
  console.log("");

  console.log("Expecting: false (optimized)");
  console.log("=>", hasTargetSum([1, 2, 5], 4, true));
  
  console.log("");

  console.log("Expecting: true (optimized)");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3, true));
  
  console.log("");

  console.log("Expecting: true (optimized)");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5, true));
  
  console.log("");

  console.log("Expecting: false (optimized)");
  console.log("=>", hasTargetSum([4], 4, true));
}
