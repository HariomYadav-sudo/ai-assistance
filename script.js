const recongition =new (window.SpeechRecognition || window.webkitSpeechRecognition)
recongition.Lang= "en-US"

const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    //convert text into voice
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text) //convert text into voice
        window.speechSynthesis.speak(abc);
    }

function handleCommands(command){
    if(command.includes("open youtube")){
        speak("Opening Youtube..")
        window.open("https://www.youtube.com","_blank")
    }
    else if(command.includes("open facebook")){
        speak("Opening facebook..")
        window.open("https://www.facebook.com","_blank")
    }
    else if(command.includes("open instagram")){
        speak("Opening instagram..")
        window.open("https://www.instagram.com","_blank")
    }
    else if(command.includes("open whatsapp")){
        speak("Opening whatsapp..")
        window.open("https://www.whatsapp.com","_blank")
    }
    else if(command.includes("open chatgpt")){
        speak("Opening chatgpt..")
        window.open("https://chatgpt.com","_blank")
    }
    else if(command.includes("open github")){
        speak("Opening github..")
        window.open("https://github.com","_blank")
    }
    else if(command.includes("open google")){
        speak("Opening google..")
        window.open("https://google.com","_blank")
    }
    else if(command.includes("open linkedin")){
        speak("Opening linkedin..")
        window.open("https://linkedin.com","_blank")
    }
    else{
        speak("search on google")
        window.open(`https://www.google.com/search?q=${command}`,"_blank")
    }
}
speak("Hello,How can i help you")
setTimeout(()=>{
    recongition.start()
},2000)
recongition.onresult=(event)=>{
    const command = event.results[0][0].transcript.toLowerCase()
    handleCommands(command)

}
    });
