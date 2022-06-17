// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

 if (x % y === 0){
   return x;
   } else {
       while (x % y !== 0) {
       x++;
     }
   return x;
   }

// authors answer
 
 while (x % y !== 0) x++;
  return x;
