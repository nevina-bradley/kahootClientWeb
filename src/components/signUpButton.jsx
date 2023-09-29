import React from 'react';

const SignUpButton = ({ innerText }) => {
    
    return (
        <div class=" w-40 border-black border-b-2 border-r-2 bg-purpleButton text-white rounded-full flex items-center justify-center mb-10">
            <a href="/sign-up" className={"signUp"}>{innerText}</a>
        </div>
    )
}


export default SignUpButton;