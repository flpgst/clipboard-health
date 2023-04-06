const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash given a number", () => {
    const trivialKey = deterministicPartitionKey(5);
    expect(trivialKey).not.toBe("0");
    expect(trivialKey).toHaveLength(128);
  });

  it("Returns the hash given a string", () => {
    const trivialKey = deterministicPartitionKey("testingString");
    expect(trivialKey).not.toBe("0");
    expect(trivialKey).toHaveLength(128);
  });

  it("Returns the hash given a string", () => {
    const trivialKey = deterministicPartitionKey(OVERLENGTH_KEY);
    expect(trivialKey).not.toBe("0");
    expect(trivialKey).toHaveLength(128);
  });

  it("Returns the value of event.partitionKey as string", () => {
    const event = {
      partitionKey: 6,
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).not.toBe("0");
    expect(trivialKey).toBe(event.partitionKey.toString());
  });
});
