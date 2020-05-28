import React from 'react';

const Header = function (props) {
    
    const headerStyle = {
        textAlign: 'center',
        padding: 20,
        textTransform: 'uppercase',
        background: '#000',
        color: '#fff'
    };
    return (
        <div className='header' style={headerStyle}>
            {props.header}
        </div>
    );
}

export default Header