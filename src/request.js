const API_KEY = "dce8d7a5a5612cf7493b3b9a3530d53a"

const requests = {
    fetchTrending: `/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNetflixOrginalls: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchUpcomingRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&primary_release_date.gte=2023-06-13&sort_by=primary_release_date.asc`
            
};
export default requests;
// https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1
// https://api.themoviedb.org/3/trending/all/week?api_key=dce8d7a5a5612cf7493b3b9a3530d53a&language=en-US&page=1

// The Movie Database (TMDb), genres are used to categorize and classify movies based on their content. TMDb provides a predefined set of genre categories, each represented by a unique ID. Some common genres include action, comedy, drama, horror, romance, science fiction, and many more.
// The primary_release_date.gte parameter filters movies to show only those with a release date greater than or equal to the current date.



// GET https://api.themoviedb.org/3/discover/movie?api_key=YOUR_API_KEY&with_genres=27&primary_release_date.gte=2023-06-13&sort_by=primary_release_date.asc

    // fetchNetflixOrginalls:  `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`
// GET https://api.themoviedb.org/3/discover/movie?api_key=57497d1b598ce9b648387a4eeaca7293&with_genres=28&language=en-US&page=20`

    // fetchNetflixOrginalls: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`
    // fetchNetflixOrginal: `/discover/tv?api_key=${API_KEY}&language=en-US&page=1`


    // fetchNetflixOrginalls: ` /discover/tv?api_key=${API_KEY}&language=en-US&page=1`
    // fetchNetflixOrginalls: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    // fetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    // fetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    // fetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    // fetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    // fetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    // fetchTrending: ` /trending/all/week?api_key=${API_KEY}&language=en-US&page=1`



// https://api.themoviedb.org/3/trending/all/week?&language=en-US&page=1&api_key=57497d1b598ce9b648387a4eeaca7293
// curl --request GET \
//      --url 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=57497d1b598ce9b648387a4eeaca7293' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2U4ZDdhNWE1NjEyY2Y3NDkzYjNiOWEzNTMwZDUzYSIsInN1YiI6IjY0ODc5Zjg5MDU4MjI0MDBjNmEyZTFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DoqA8LqDTc6-ouMePYnC8PyuWW8KEvJa2pz4oT0NCc4' \
// --header 'accept: application/json'
     



// https://api.themoviedb.org/3/movie/550?api_key=57497d1b598ce9b648387a4eeaca7293
// https://api.themoviedb.org/3/tv/216390?api_key=57497d1b598ce9b648387a4eeaca7293
// https://api.themoviedb.org/3/tv/top_rated/216390?api_key=dce8d7a5a5612cf7493b3b9a3530d53a


    //  --url 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc' \
    //  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2U4ZDdhNWE1NjEyY2Y3NDkzYjNiOWEzNTMwZDUzYSIsInN1YiI6IjY0ODc5Zjg5MDU4MjI0MDBjNmEyZTFmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DoqA8LqDTc6-ouMePYnC8PyuWW8KEvJa2pz4oT0NCc4' \
    //  --header 'accept: application/json'


    //  --url 'https://api.themoviedb.org/3/trending/movie/day?api_key=57497d1b598ce9b648387a4eeaca7293language=en-US' \
   