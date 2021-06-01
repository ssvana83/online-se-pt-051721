// this is what will be passed in:
// findMatching(drivers, 'Bobby');

function findMatching(driverArray, name) {
  // for our filter condition we just need to see if the driver's name is the name
  // we're being very careful with what we name things here:
  return driverArray.filter(driverName => driverName.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(driverArray, name) {
  // we only want to match the first letter so we can access it with the index of the string:
  return driverArray.filter(person => person[0].toLowerCase() === name[0].toLowerCase());
};

function matchName(driverArray, name) {
  // person is an object so we want to specify that we need their name:
  return driverArray.filter(personObject => personObject.name === name);
};
