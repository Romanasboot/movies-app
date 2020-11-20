import './main.scss'
import Movie from '../movie/movie';
import Movies from '../data/moviesData';


function Main(){
    const movies = Movies.map(movie => <Movie key={movie.id} name={movie.pavadinimas} desc={movie.tekstas} />)
    return(
                <div>
                    <div className="row">
                        <Movie
                        name="Harry Potter"
                        desc="fantasy"
                        />
                        <Movie
                        name="Toy story"
                        desc="multikas"
                        />
                    </div>
                    <hr></hr>
                    <div className="row">

                        <Movie
                        name="Avatar"
                        desc="blue color fantasy"
                        />
                        <Movie
                        name="Sniper"
                        desc="WW2 story"
                        //data={{name:"Takelis2", desc:"\"prota lavinantis filmas\""}}
                        />
                    </div>
                    <hr></hr>

                    <div className="row">
                        {movies}
                    </div>
                </div>
    );
}
export default Main;