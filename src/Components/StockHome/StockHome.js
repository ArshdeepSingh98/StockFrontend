import React, {Component} from 'react';
import autoBind from "react-autobind/src/autoBind";

class StockHome extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

        autoBind(this);
    }

    componentDidMount() {
        this.props.handleShowPopUp(true);
    }

    render() {
        return (
            <div>
                <h2>Home Component</h2>
            </div>
        )
    }
}

export default StockHome;