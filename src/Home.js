import React from 'react';
import { Link } from 'react-router-dom';
 
class Home extends React.Component{
    state = {
        InputValue : "",
    };
    
    handleGetInputValue = (event) => {
        this.setState({
          InputValue : event.target.value,
        })
      };
    
    confirm = () =>{
        const {InputValue} = this.state;
        this.props.history.push('/Present', {dotData: InputValue})
    }

    render(){
        return(
            <div>
                <div>
                    <label>Say something here:</label>
                    <textarea 
                    value={this.state.InputValue}
                    onChange={this.handleGetInputValue}
                    rows="5"
                    cols="33"
                    placeholder='Hello!'
                    />
                </div>
                <button type="submit" onClick={this.confirm}>submit</button>
            </div>
        );
    }
}
 
export default Home;