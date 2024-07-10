function calculateAge(birthDate) {
  if (birthDate > new Date()) {
    throw new Error("Invalid birthdate: Birthdate cannot be in the future.");
  }

  const today = new Date();
  const ageTime = today.getTime() - birthDate.getTime();
  const ageInDays = Math.floor(ageTime / (1000 * 60 * 60 * 24));

  const year = Math.trunc(ageInDays / 365);
  let remainingDays = ageInDays % 365;

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  if (
    isLeapYear(year) &&
    birthDate.getMonth() === 1 &&
    birthDate.getDate() === 29
  ) {
    remainingDays++;
  } else if (
    !isLeapYear(year) &&
    birthDate.getMonth() === 1 &&
    birthDate.getDate() === 29
  ) {
    // No adjustment needed for non-leap year with Feb 29th (already counted in ageInDays)
  }

  // Fix for remaining days after February adjustment
  if (
    birthDate.getMonth() > today.getMonth() ||
    (birthDate.getMonth() === today.getMonth() &&
      birthDate.getDate() > today.getDate())
  ) {
    remainingDays--; // Adjust for days not yet passed in the current year
  }

  let monthCount = 0;
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  while (remainingDays > 0) {
    if (remainingDays >= months[monthCount]) {
      remainingDays -= months[monthCount];
      monthCount++;
      console.log(remainingDays);
    } else {
      break;
    }
  }

  return { years: year, months: monthCount, days: remainingDays };
}

// Example usage
let birthYear = 2021;
let birthMonth = 4; // Months start from 0 (January = 0)
let birthDay = 16;

try {
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  const age = calculateAge(birthDate);
  console.log(`Your age is ${age.years} year ${age.months} month ${age.days} days`);
} catch (error) {
  console.error(error.message);
}
