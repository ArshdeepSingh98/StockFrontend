import React, {Component} from 'react';
import autoBind from "react-autobind/src/autoBind";

class UserProfile extends Component {

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
                <h2>User Profile</h2>
            </div>
        )
    }
}

export default UserProfile;