const fs = require("fs");
const data = require("./data/users");
const result = [];

for (let i = 0; i < data.length; i++) {
  const matches = [data[i]];

  for (let j = i + 1; j < data.length; j++) {
    if (data[i].username === data[j].username) {
      matches.push(data[j]);
    }
  }

  if (matches.length > 1) {
    result.push(matches);
  }
}

const flattenedResult = [].concat(...result).sort((a, b) => a.id - b.id);

fs.writeFile("output.js", JSON.stringify(flattenedResult), (err) => {
  if (err) throw err;
  console.log("Result saved to output.js");
});
