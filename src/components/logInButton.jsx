import React from 'react';

const LogInButton = ({ innerText }) => {

    return (
        <>
            <div class=" w-40 border-black border-b-2 border-r-2 bg-purpleButton text-white rounded-full flex items-center justify-center ">
                <a href="/log-in" className={"logIn"} >{innerText}</a>
            </div>
        </>

    )
}


export default LogInButton;