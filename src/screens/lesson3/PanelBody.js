import React from 'react';

class PanelBody extends React.Component {

    render() {
        return <div className="body">
                 {this.props.children}
        </div>;
    }
}

export default PanelBody;
