// if year is divisible by 400 then is_leap_year
// else if year is divisible by 100 then not_leap_year
// else if year is divisible by 4 then is_leap_year
// else not_leap_year

export function leapYear(a) {

  let ly = a % 4;

  if (ly == 0) {
    console.log("then it is leap year")

  } else {
    console.log("it is not leap year")
  }
  return ly;

}

