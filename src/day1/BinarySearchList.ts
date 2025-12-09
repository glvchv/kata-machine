// export default function bs_list(haystack: number[], needle: number): boolean {
//   if (haystack.length == 0) return false;
//   const middle = Math.floor(haystack.length / 2);

//   if (haystack[middle] == needle) {
//     return true;
//   } else if (needle < haystack[middle]) {
//     console.log("value is left");
//     return bs_list(haystack.slice(0, middle), needle);
//   } else if (haystack[middle] < needle) {
//     console.log("value is right");
//     return bs_list(haystack.slice(middle + 1), needle);
//   } else {
//     return false;
//   }
// }

export default function bs_list(haystack: number[], needle: number): boolean {
  let lo = 0;
  let hi = haystack.length;

  do {
    const m = Math.floor(lo + (hi - lo) / 2);
    let v = haystack[m];
    if (v === needle) {
      return true;
    } else if (v > needle) {
      hi = m;
    } else {
      lo = m + 1;
    }
  } while (lo < hi);

  return false;
}
