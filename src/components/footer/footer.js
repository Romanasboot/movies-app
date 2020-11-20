import './footer.scss'
//import {} from 'react-bootstrap';

function Footer(){
    return(
        <footer>
            <div class="container">
                <div class="row row-cols-3">
                    <div class="col">Version</div>
                    <div class="col">Source Control</div>
                    <div class="col">Hosted</div>
                    <div class="col">V3.99.3</div>
                    <div class="col">CodebaseHQ</div>
                    <div class="col"><a href="#" target="_blank">View</a></div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;