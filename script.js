// Don't touch this part

process.stdin.resume();
process.stdin.setEncoding("utf-8");

var input_stdin = "";
var input_currentline = 0;

process.stdin.on("data", (rawData) => {
  input_stdin += rawData;
});

process.stdin.on("end", () => {
  input_stdin = input_stdin.trim().split("\n").map(line => {
    return line.trim()
  });
  main();
});

function readLine() {
  return input_stdin[input_currentline++];
}

// ########### TYPE YOUR CODE INSIDE MAIN FUNCTION ###########

function main() {
  //  type your solution here

  // process strings
  const string = readLine()
  console.log(string)
  
  // process integers
  const number = parseInt(readLine())
  console.log(number)
}
