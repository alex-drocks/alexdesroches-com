function calculateAge(birthday) {
  const today = new Date();
  const oneYear = 1000 * 60 * 60 * 24 * 365;
  return Math.floor((today.getTime() - birthday.getTime()) / oneYear);
}

export {calculateAge}
