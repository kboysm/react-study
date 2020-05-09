import React from 'react'
const Button = ({ className, children, onClickHandler }) => //children이름을 바꾸면 인식하지 못함 , 또 순서를 바꿔도 상관없는 것을 확인함
    <div >
        <button className={className} onClick={onClickHandler}>{children}</button>
    </div>
export default Button;