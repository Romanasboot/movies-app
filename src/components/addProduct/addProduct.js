const { Component } = require("react");

class addProduct extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState({count: +1})
    }
    handleClick() {
        //this.setState(prevState=>)
    }
}