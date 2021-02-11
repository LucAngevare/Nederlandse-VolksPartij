function returnDateThing() {
  try {
    var verkiezingsDag = new Date(2021, 03, 17)
    var now  = new Date();

    const DueDate = Math.round((verkiezingsDag - now) / (1000 * 60 * 60 * 24));

    return DueDate;
  } catch(e) {
    throw new Error(e);
  }
}