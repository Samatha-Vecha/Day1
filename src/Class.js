import React from "react";
class Eight extends React.Component{
    count = 0;
    a = "ReactJS";
    constructor(){
        super();
        this.state={
            number : 1
        }
        console.log('constructor is called!');
    }
    componentDidMount(){
        console.log('Mounted');
        console.log(this.count+1);
        
    }
    componentWillUnmount(){
        console.log('will be unmounted');
    }
    componentDidUpdate(){
        console.log('Incremented');
    }
    funcEightBtnClick = () => {
        console.log('button is clicked!');
        console.log(this.count+1);
        //update the state
        this.setState({number: this.state.number + 1});

    }
    render(){
        return(
            <div>
                <p>This is a component.{this.count} {this.a} {this.state.number}</p>
                <button className="btn btn-primary" onClick={this.funcEightBtnClick}>Click Here</button>
            </div>
    );
    }
}
export default Eight;