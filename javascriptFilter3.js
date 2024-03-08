/* ==========Task=========
  https://www.codewars.com/kata/525f0459fb9570f9ff00005d
  Finding the users that starts or ends with ".", and return only the email of the user. 
  Given a flat array of user-email pair
  Example: [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
*/

/* ==========Aproach======
  Using map method to map through all items
  Check if the name starts or end with . by using startsWith & endWith
  If it's true then return the item after that name
  Otherwise return false
  Filter out all the false item 
  Final result will only return the 
*/

const searchNames = (logins) => {
  return logins
    .map((name, indx) =>
      name.startsWith(".") || name.endsWith(".") ? logins[indx + 1] : false
    )
    .filter((item) => item);
};

//  Solutions not mine but I like
// I like it that the code is simple with just one method.

function searchNames(logins) {
  return logins.filter(
    (elem, idx, logins) =>
      idx % 2 &&
      (logins[idx - 1].startsWith(".") || logins[idx - 1].endsWith("."))
  );
}
