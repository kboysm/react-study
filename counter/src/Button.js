import React from 'react'
const Button = ({ children, onClickHandler }) =>
    <div>
        <button onClick={onClickHandler}>{children}</button>
    </div>
export default Button;