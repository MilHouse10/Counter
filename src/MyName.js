import React, {Component} from 'react';

class MyName extends Component{
    render(){
        return(
            <div>
                안녕! 내 이름은 <b>{this.props.name}</b> 이야.
            </div>
        );
    }
}
MyName.defaultProps = {
        name: '홍길동'
    }
export default MyName;