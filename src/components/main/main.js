import {Button} from 'react-bootstrap';
import './main.scss';
import Movie from '../movie/movie';
import Movies from '../data/moviesData';
import { Component } from 'react';


class Main extends Component{
    constructor()
    {
        super()
        this.state = {
            count:0
        }
    }
 
    handleClick = () =>{this.setState(prevState=>{return {count:prevState.count +1}})}
    
    render() {
        const movies = Movies.map(movie => <Movie key={movie.id} name={movie.pavadinimas} desc={movie.tekstas} />);
        return (
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
                    {/* <div className="row">

                        <Movie
                        name="Avatar"
                        desc="blue color fantasy"
                        />
                        <Movie
                        name="Sniper"
                        desc="WW2 story"
                        //data={{name:"Takelis2", desc:"\"prota lavinantis filmas\""}}
                        />
                    </div> */}
                    <hr></hr>

                    <div className="row">
                        {movies}
                    </div>
                    <div className="row justify-content-center">
                        <div>
                        <h2 style= {{textAlign:+"center"}}>{this.state.count}</h2>
                        </div>
                        <div>
                        <Button onClick={this.handleClick}>Click ME</Button>
                        </div>
                    </div>
                </div>
    );
}
}
export default Main;