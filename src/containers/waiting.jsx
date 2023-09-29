import React from "react";
import Toolbar from "../components/toolbar";

const Waiting = () => {
    return (
        <div class=" w-screen h-screen flex flex-col ">
            <Toolbar/>
            <div class=" text-quizPurple text-3xl text-center pt-8 pb-14">
                Waiting for Game to Start...
            </div>
            <div class=" text-purpleBox text-3xl text-center ">
                Player List
            </div>
        </div>
    );
};

export default Waiting;