const painters = [
  { name: 'Pablo', lastName: 'Picasso', born: 1881, passed: 1973 },
  { name: 'Salvador', lastName: 'Dali', born: 1904, passed: 1989 },
  { name: 'Frida', lastName: 'Kahlo', born: 1907, passed: 1954 },
  { name: 'Henri', lastName: 'Matisse', born: 1869, passed: 1954 },
  { name: 'Gustav', lastName: 'Klimt', born: 1862, passed: 1918 },
  { name: 'Jackson', lastName: 'Pollock', born: 1912, passed: 1956 },
  { name: 'Judy', lastName: 'Chicago', born: 1939, passed: null },
  { name: 'Kara', lastName: 'Walker', born: 1969, passed: null },
  { name: 'Wassily', lastName: 'Kandinsky', born: 1866, passed: 1944 },
];

let oldArtists = painters.filter(artist => {
  age = artist.passed - artist.born
  console.log(artist.lastName, age)
  return age >= 65
})

console.log(oldArtists)



// 1. give list of painters that were born in the 19 century

// 2. give list of painters names and last names 

// 3. sort painters alphabetically by last names

// 4. give list of painters that names or last names start with K?

// 5. print names of painters that that are still alive
// and their current age

// 6. give list of painters that contain 'li' in their name 

// 7. sort painters by birth date, from oldest to youngest

