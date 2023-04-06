const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";

const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {
  const eventPartitionKey = getEventPartitionKey(event);

  const candidatePartionKey = getCandidatePartitionKey(eventPartitionKey);

  const candidate = setMaxPartitionKeyLength(candidatePartionKey);

  return candidate;
};

const getEventPartitionKey = (event) => {
  if (!event) return;
  if (event.partitionKey) return event.partitionKey;

  const data = JSON.stringify(event);
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

const getCandidatePartitionKey = (candidate) => {
  if (!candidate) return TRIVIAL_PARTITION_KEY;
  if (typeof candidate !== "string") {
    return JSON.stringify(candidate);
  }
  return candidate;
};

const setMaxPartitionKeyLength = (candidate) => {
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }
  return candidate;
};
