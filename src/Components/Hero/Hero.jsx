import React, {useState} from "react";

export default function Hero() {

    // Making the Typing Animation
    const [typeText, setTypeText] = useState("");
    const [sentenceCount, setSentenceCount] = useState(0);
    let typeTextSentances = [
        "Check your Flights",
        "Check Airport Status"
    ]

    const typeTextFunction = () =>{
        if (sentenceCount === 0){
            text = typeTextSentances[0].split("");
            for(let i; i<text.length; i++){
                setTypeText(typeText => typeText + text[i]);
            }
            setSentenceCount(1);
        } else {
            text = typeTextSentances[1].split("");
            for(let i; i<text.length; i++){
                setTypeText(typeText => typeText + text[i]);
            }
            setSentenceCount(0);
        }
    }

    setInterval(() => {
        typeTextFunction()
    }, 1000);


    return(
        <>
        <section className="bg-blue-50 h-[60vh] w-[80vw] rounded-2xl flex justify-evenly items-center">
            <img src="src\assets\Images\plane-globe.png" alt="Plane on a world tour" className="w-[30vw]" />
            <div>
                <h1 className="text-blue-950 text-5xl font-bold">Check Your Status</h1>
                <h3>{typeText}</h3>
            </div>
        </section>
        </>
    );
}