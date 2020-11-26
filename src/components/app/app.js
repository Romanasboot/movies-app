//import { Container } from "react-bootstrap";
import Header from  "../header/header";
import Main from "../main/main";
import Nav from "../nav/nav";
import Form from "../form/form";
import Footer from "../footer/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App(){
    return(
        <BrowserRouter>
                <div className="app">
                    <Header/>
                    {/* <Main/> */}
                    <Nav/>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/form" component={Form}/>
                    </Switch>

                    <Footer/>
                </div>
        </BrowserRouter>

    )
}
export default App;

//ctrl +c
//npm install node-sass
//npm start