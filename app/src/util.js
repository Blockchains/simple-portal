export const NOTSTARTED = "notstarted";
export const APPROVING = "approving";
export const ISSUING = "issuing";
export const REDEEMING = "redeeming";
export const DONE = "done";

const BN = require('bn.js');
const TEN = new BN(10)
export const SIX = TEN.pow(new BN(6));
export const TWELVE = TEN.pow(new BN(12));
export const EIGHTEEN = TEN.pow(new BN(18));
export const GENERATE_TEXT = ["Approve: USDC", "Approve: TUSD", "Approve: PAX", "Generate: RSV"];

export function getIssuableRSV(usdc, tusd, pax) {
  if (!usdc || !tusd || !pax) { 
    return 0; 
  }
  const usdcBN = new BN(usdc.value);
  const tusdBN = new BN(tusd.value);
  const paxBN = new BN(pax.value);

  return BN.min(BN.min(usdcBN.mul(TWELVE), tusdBN), paxBN).mul(new BN(3)).div(EIGHTEEN).toNumber();
};

export function countOccurrences(arr, elem) {
  var count = 0;
  for (var key in arr) {
    count += (arr[key] === elem);
  }
  return count;
}