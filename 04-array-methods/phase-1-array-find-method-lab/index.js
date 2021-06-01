function superbowlWin(records) {
  // find the record with the proper result:
  const foundObject = records.find(record => record.result === "W")

  // return the record if it exists:
  if (foundObject) {
    return foundObject.year
  }

  // ternary version:
  // return foundObject ? result.year : undefined
}
