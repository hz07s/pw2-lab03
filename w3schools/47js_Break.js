// JS Break: Breaking out of a Loop
for (let i = 0; i < 5; i++) {
  if (i === 3) {
      console.log("Breaking the loop at i =", i);
      break;
  }
  console.log("Iteration:", i);
}
