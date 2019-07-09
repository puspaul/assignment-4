import React from 'react';
class Contact extends React.Component{
    render(){
    return(
        
            <li>
                    {this.props.contact}
            </li>
        
    )
    }
}
export default Contact