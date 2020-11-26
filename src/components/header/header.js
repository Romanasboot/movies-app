import './header.scss'
import {Button, Container, Form, FormControl} from 'react-bootstrap';

function Header(){
    return(
        <Container>
            <div className="search border container">
                <div className="row justify-content-end">
                    <div className="col-sm-4">
                    <Form inline>
                        <FormControl type="text" placeholder="Search here" className="mr-md-6" />
                        <Button type="submit" variant="outline-primary">Search</Button>
                    </Form>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Header;