import React from 'react';

class PanelHeading extends React.Component {

    render() {

        let divStyle = {
            backgroundColor :  'rgb(' + this.props.r + ',' + this.props.g + ',' + this.props.b + ')'
         };

        return <div className="heading"  style={divStyle}>

                 {this.props.children}

        </div>;
    }
}

export default PanelHeading;
