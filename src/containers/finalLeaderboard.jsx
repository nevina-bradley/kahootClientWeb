//import { useEffect } from 'react';
//import getByScore from '../services/playerInfo';

const FinalLeaderboard = () => {

    return (
        <div>
            <div class=" flex justify-center items-center pt-20 ">
                <div class=" font-holtwood text-quizPurple text-4xl ">
                    Quizzlr
                </div>
            </div>

            <div class=" flex justify-center items-center pt-20 ">
                <div class="text-quizPurple text-4xl ">
                    Quizname
                </div>
            </div>

            <div class = "w-screen text-white bg-purpleBox absolute bottom-14 flex justify-center items-center ">
                <div class = " " >
                    / correct
                    <br></br>
                    <br></br>
                    points
                </div>

                <div class = "">
                    / correct
                    <br></br>
                    <br></br>
                    points
                </div>

                <div class = "">
                    / correct
                    <br></br>
                    <br></br>
                    points
                </div>
            </div>

            <div class = " w-screen text-quizPurple bg-quizPink absolute bottom-0 flex justify-center items-center p-4 ">
                <div class = " absolute left-0 ml-10 ">
                    
                </div>
                <div class = "  ">
                    You scored place with points!
                </div>
                <div class = " absolute right-0 mr-10 ">
                <a href="/" className={"home"} >Back to Home</a>
                </div>
            </div>
        </div>
    );
};

export default FinalLeaderboard;