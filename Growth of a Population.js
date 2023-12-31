//DESCRIPTION:
//In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
//More generally given parameters:
//p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
//the function nb_year should return n number of entire years needed to get a population greater or equal to p.
//aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
//Note:
//Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

//SOLUTION:

function nbYear(p0, percent, aug, p) {
  let i = 0;
  for (i = 0; p0 < p; i++) {
    p0 = Math.floor(p0 + p0 * percent * 0.01 + aug);
  }
  return i;
}