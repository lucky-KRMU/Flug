import React, {useState, useEffect} from "react";

export default function Hero() {

    // Making the Typing Animation

    const [typeText, setTypeText] = useState("");   // The main typing Text State Variable
    const [sentenceCount, setSentenceCount] = useState(0);  // State Variable to switch between lines
    // const [sentenceLength, setSentenceLength] = useState(0);
    let typeTextSentances = [
        "Check your Flights",
        "Check Airport Status"
    ]   // The Lines to display


   

    // The Main Function to execute it.
    const typeTextFunction =  () => {
        // setSentenceCount(typeTextSentances[0]);
        setTypeText(" ");
        if (sentenceCount == 0){
            let text = typeTextSentances[0].split("");
            let i = -1;
            let t = setInterval(()=>{
                setTypeText(typeText => typeText + text[i]);
                i++;
                if (i == text.length - 1){
                    clearInterval(t)
                }
            }, 100);
            setSentenceCount(1);
        } else{
            let text = typeTextSentances[1].split("");
            let i = -1;
            let t = setInterval(()=>{
                setTypeText(typeText => typeText + text[i]);
                i++;
                if (i == text.length - 1){
                    clearInterval(t)
                }
            }, 100);
            setSentenceCount(0);
        }
        

    }

    

    
    return(
        <>
        <section className="bg-blue-50 h-[60vh] w-[80vw] rounded-2xl flex justify-evenly items-center">
            <img src="src\assets\Images\plane-globe.png" alt="Plane on a world tour" className="w-[30vw]" />
            <div>
                <h1 className="text-blue-950 text-5xl font-bold">Check Your Status</h1>
                <h3>{typeText}</h3>
                {/*<button className="bg-red-300 p-4 m-5 text-bold text-white cursor-pointer" onClick={typeTextFunction}>ClickMe</button>*/}
            </div>
        </section>
        </>
    );
}