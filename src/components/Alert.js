import React from 'react';


function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLocaleLowerCase();
        return lower.charAt(0).toLocaleUpperCase() + lower.slice(1) ;

    }

    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}  role="alert">
  
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}

        </div>
    )
}

export default Alert