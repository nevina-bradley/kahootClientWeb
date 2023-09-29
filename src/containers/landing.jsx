import React from "react";
import SignUpButton from "../components/signUpButton";
import LogInButton from "../components/logInButton";

const Landing = () => {
    return (
        <div class="w-screen h-screen flex flex-col justify-center items-center">
            <div>
                <SignUpButton innerText={"Sign Up"} />
            </div>

            <LogInButton innerText={"Log In"} />
        </div>
    );
};

export default Landing;