import React from 'react';
import { findDOMNode } from 'react-dom';

import Panel from './Panel';
import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';
import Slider from './Slider';

import './lesson3.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.update = this.update.bind(this);
        this.state = {
            red: 0,
            blude: 0,
            green: 0
        };
    }

    render() {
        return (<div>
            <Panel >
                <PanelHeading r={this.state.red} g={this.state.green} b={this.state.blue}> Some crap </PanelHeading>
                <PanelBody>
                    Body
                </PanelBody>
            </Panel >
            <Slider ref="red" update={this.update} />
            <Slider ref="blue" update={this.update} />
            <Slider ref="green" update={this.update} />
        </div>);
    }

    update(e) {

        this.setState({
            red: findDOMNode(this.refs.red.refs.inp).value,
            blue: findDOMNode(this.refs.blue.refs.inp).value,
            green: findDOMNode(this.refs.green.refs.inp).value,
        });

    }
}


export default App;
