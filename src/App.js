
import './App.css';
import Banner from './Banner';
import Row from './Row';
import requests from './request';
import Navv from './Navv';

function App() {
  return (
       <div className='App'>
       <Navv />
            < Banner />
      <Row title="NETFLIX ORGINALLS"
        fetchUrl={requests.fetchNetflixOrginalls}
        isLargeRow
      />
      <Row title="Trending Now"
           fetchUrl={requests. fetchTrending}
      />
      <Row title="Top Rated"
           fetchUrl={requests.fetchTopRatedMovies}
        />
      <Row title="Action"
           fetchUrl={requests.fetchActionMovies}
       />
      <Row title="Comedy"
           fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Documentaries"
           fetchUrl={requests.fetchDocumentariesMovies}
      />
      <Row title="Horror"
           fetchUrl={requests.fetchHorrorMovies}
       />
      <Row title="Romance"
           fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Science Fiction"
           fetchUrl={requests.fetchScienceFictionMovies}
      />
      <Row title="Upcoming Romance"
           fetchUrl={requests.fetchUpcomingRomanceMovies}
       /> 
    </div>
  );
}

export default App;
