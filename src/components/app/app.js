import Header from  "../header/header";
//import Nav from "../nav/nav";
import Main from "../main/main";
import Footer from "../footer/footer";
import { Container } from "react-bootstrap";

function App(){
    return(
        <Container>     
        <div className="app">
            
                
            <Header/>
            <Main/>
            <Footer/>
        </div>
        </Container>

    )
}
export default App;

//ctrl +c
//npm install node-sass
//npm start