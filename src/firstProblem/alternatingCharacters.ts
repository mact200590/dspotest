export const alternativeCharacter = (chain: string) => {
  let positions = 0;
  for (let i = 1; i < chain.length; i++) {
    const before = i - 1;
    if (chain.charAt(i) === chain.charAt(before)) positions++;
  }
  return positions;
};
