import React from 'react';

class Timer extends React.Component {
    
    //if you have constructor you must pass properties to parent constructor
    constructor(props) {
        super(props);
        this.state = {
            youhave : props.time,
            desc :  props.time <= 0 ? 'timedout' : props.time
        }        
    }

    render() {   

        var desc =  this.state.youhave<=0 ? 'timedout' : this.state.youhave;

        if(this.state.youhave<=0) {
            clearInterval(this.timerId);
        }

        return (
        <>
            <div class="text-center">
                <h1>{desc}</h1>
            </div>
            <div className="container">        
                <div  className="row">
                <div className="col-6">
                    {this.props.description}
                </div>
                
                <div className="col-4"> <input type="text" name="question1"  disabled={this.state.youhave <= 0 }/> </div>           
                </div>
            </div>
        </>);
    }
    
    componentDidMount() {
        console.log("component mounted")
        this.timerId = setInterval( () => {
            console.log("timer called - havent you cancelled it?");
            this.setState({
             youhave : this.state.youhave - 1             
            })
        }, 1000 );
        
    }

    componentWillUnmount() {
        console.log("component will un mount release resources");
        clearInterval(this.timerId);
    }
   
}



const App = () => (<div>    
    <Timer description="you have 1 min to awnser"  time="60"/>
</div>)

export default App;
