// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


// Tasks:
//     1. filter() only "Sci-Fi" movies
let sci_Fi=movies.filter(mov=>mov.genre=='Sci-Fi')
console.log(sci_Fi)
//     2. map() to return:
//             "Inception (8.8)"
let newArray = movies.map(mov=>
{
    return mov.title+' ('+mov.rating+') '

}
);
console.log(newArray)
//     3. reduce() to find average movie rating
let totRating = movies.reduce((sum,mov)=>sum+mov.rating,0)
console.log(totRating)
let avgRating=totRating/movies.length
console.log(avgRating)
//     4. find() movie "Joker"
let findJoker=movies.find(mov=>mov.title=='Joker')
console.log(findJoker)
//     5. findIndex() of "Avengers"
let findAvengersPosition=movies.findIndex(mov=>mov.title=='Avengers')
console.log(findAvengersPosition)







