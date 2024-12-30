import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
 

const InputWithLabel = ({ id, value, onInputChange, children }) => {

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
        <label htmlFor={id}>
            {children}
            <input 
            ref={inputRef} 
            id={id}
            type="text" 
            value={value} 
            onChange={onInputChange} />
        </label>
        </>
    );
     
    
    
}

InputWithLabel.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default InputWithLabel;