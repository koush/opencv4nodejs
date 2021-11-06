const { argv } = require("process");

for (let i = 2; i < argv.length; i++) {
  console.log(argv[i])
}
