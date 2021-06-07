import React from 'react';
 
class Present extends React.Component{
render(){
return(
<div>
<h1>{this.props.location.state.dotData}</h1>
</div>
);
}
}
 
export default Present;