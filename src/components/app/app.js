//import { Container } from "react-bootstrap";
import Header from  "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

function App(){
    return(
            <div className="container">
                <div className="app">
                    <Header/>
                    <Main/>
                    <Footer/>
                </div>
            </div>     

    )
}
export default App;

//ctrl +c
//npm install node-sass
//npm start