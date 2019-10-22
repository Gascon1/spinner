let characters = ['\r|', '\r/', '\r-', '\r\\', '\r|','\r/', '\r-', '\r\\', '\r|'];
const spinner = (char) => {
  let counter = 0;
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {process.stdout.write(char[i])}, counter);
    counter += 120;
  }
  setTimeout(() => {process.stdout.write('\n')}, counter);
}


spinner(characters);