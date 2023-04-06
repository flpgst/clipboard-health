const { deterministicPartitionKey } = require("./dpk");
const event = {
  partitionKey: 6,
};
console.log(deterministicPartitionKey(event));
