/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  let result = [];
  let characterCount = {};
  // Add each character and count occurances
  for (let i = 0; i < string.length; i++) {
    if (!characterCount[string[i]]) {
      characterCount[string[i]] = 1;
    } else {
      characterCount[string[i]] += 1;
    }
  };
  // Add each key/value pair to an array and add that array to result array
  for (let key in characterCount) {
    let keyValuePair = [];
    keyValuePair.push(key, characterCount[key])
    result.push(keyValuePair)
  };
  // Sort result array by frequency and then alphabetically
  result.sort(function (a, b) {
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] < b[0]) {
        return -1;
      }
    } else if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    }
  });
  return result;
};
