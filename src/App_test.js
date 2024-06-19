import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const url = 'https://api.themoviedb.org/3/movie/550?api_key=719679f14086fdc83c4d41ada2716f9f';
  try {
    axios.get('https://api.themoviedb.org/3/movie/latest?api_key=719679f14086fdc83c4d41ada2716f9f&language=en-US').then(res => {
      setData(res.data)
      console.log(data);
    }); 
  } catch (e) {

  }
  return (
    <div className="App">
      <div className='images' style={{ height:'600px', width:'500px', overflow:'hidden'}}>
        <div>
          <img src={'https://image.tmdb.org/t/p/original/' + data['backdrop_path']} alt='' />
        </div>
        <div>
          <img src={'https://image.tmdb.org/t/p/w500/' + data['poster_path']} alt='' />
        </div>
     
      </div>
      <div>
           <iframe width="420" height="315" src={data['homepage']} title='Hello'>
        </iframe>
      </div>
    </div>
  );
}

export default App;
