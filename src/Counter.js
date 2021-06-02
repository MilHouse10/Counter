import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다'));
    return(
        <div>

        </div>
    );
};

class Counter extends Component{
    state={
        number:0,
        error: false
    }

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentWillMount() {
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        if(nextState.number % 5 === 0) return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate');
    }

    handleIncrease = () => {
        this.setState(
            (state) => ({
                number: state.number +1
            })
        );
    }

    handleMulti = () => {
        this.setState(
            (state) => ({
                number: state.number * 2
            })
        );
    }

    handleDecrease = () => {
        this.setState(
            ({number}) => ({
                number: number-1
            })
        );
    }

    handleDevide = () => {
        this.setState(
            ({number}) => ({
                number: number/2
            })
        );
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    render(){
        if(this.state.error) return (<h1>에러발생!</h1>);
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number===4 && <Problematic/>}
                <br/>
                <button onClick={this.handleMulti}>*2</button>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
                <button onClick={this.handleDevide}>/2</button>
            </div>
        );
    }
}

export default Counter;