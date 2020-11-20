import './header.scss'
import {Button, Form, FormControl} from 'react-bootstrap';

function Header(){
    return(
            <header className=''>
            <div className="row">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-lg-6" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </div>
            </header>
    )
}
export default Header;