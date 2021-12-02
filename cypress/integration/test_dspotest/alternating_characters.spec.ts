import { alternativeCharacter } from "../../../src/firstProblem/alternatingCharacters";

describe("Create Unit tests, parameterized tests", () => {
  const chains = [
    {
      value: "ABAABBAAA",
      result: 4,
    },
    {
      value: "AAAABABABBABBBB",
      result: 7,
    },
    {
      value: "AAAAAABABABBAB",
      result: 6,
    },
  ];
  it("alternating characters", () => {
    chains.forEach((chain) => {
      expect(alternativeCharacter(chain.value)).eq(chain.result);
    });
  });
});
