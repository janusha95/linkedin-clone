import React, {Component} from 'react';
import Header from './Header';
import Home from './Home';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
            </div>
        );
    }
}

export default Dashboard;