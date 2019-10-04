import React from 'react';

class PersonRow extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.props.rowClicked(this.props.data.id);
    }

    render() {
        return (<tr onClick={this.handleClick}>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
        </tr>);
    }
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, name: "sreedhara" },
                { id: 2, name: "kakani" }
            ]
        };
    }

    render() {
        // map takes a call back function which will get called with array element,index
        // returned objects will get collected in new array
        let rows = this.state.data.map(person => {
            return <PersonRow key={person.id} data={person} rowClicked={this.rowClicked}/>
        });    

        return <div className="container">
            <div className="row">
            <table className="table table-bordered table table-hover">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                </tr>                 
                </thead>    
                <tbody>
                    {rows}
                </tbody>
            </table>
            </div>
        </div>
    }

    rowClicked(e) {
        console.log("Row clicked ");
        console.log(e);
        //e.preventDefault();
    }
}    

export default App;