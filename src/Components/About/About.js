import React, {Component} from "react";
import autoBind from "react-autobind/src/autoBind";


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

        autoBind(this);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h2>About Us</h2>
            </div>
        )
    }
};

export default About;