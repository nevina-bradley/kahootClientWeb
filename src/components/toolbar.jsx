import HeadIcon from "../assets/head.svg"
const Toolbar = () => {
    return (
        <>
            <div class=" h-10p flex justify-between">
                <div class=" pl-3 flex items-center">
                    <img src={HeadIcon} width="67" ></img>
                    <div class=" font-holtwood text-quizPurple text-4xl pl-2">
                        Quizzlr
                    </div>
                </div>
                <div class="flex items-center">
                 <div class="pr-5 font-roboto text-quizPurple text-lg">Settings</div>
                 <div class="pr-10 font-roboto text-quizPurple text-lg">Quit</div>
                </div>
            </div>
        </>
    )
}

export default Toolbar;