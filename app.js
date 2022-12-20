const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Jó reggelt főnök");
    }

    else if(hr == 12) {
        speak("Napokat uram");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Szép délutánt uram");
    }

    else {
        speak("Jó estét főnök");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "Nem értettem amit mondtál, kérlek ismételd meg";

    if(message.includes('hé') || message.includes('helló')) {
        const finalText = "Üdv főnök";
        speech.text = finalText;
    }

    else if(message.includes('hogy vagy')) {
        const finalText = "Csodásan érzem magam";
        speech.text = finalText;
    }

    else if(message.includes('hogy hívnak')) {
        const finalText = "Jarvis vagyok. Tony Stark alkotott meg engem azzal a céllal, hogy megkönnyítsem a munkáját. De most az ön parancsaira várok";
        speech.text = finalText;
    }
	
	else if(message.includes('jarvis')) {
        const finalText = "Szolgálatára uram";
        speech.text = finalText;
    }

    else if(message.includes('google')) {
        window.open("https://google.com", "_blank");
        const finalText = "A google megnyitása";
        speech.text = finalText;
    }

    else if(message.includes('nyisd meg az instagramot')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Az instagram megnyitása";
        speech.text = finalText;
    }

    else if(message.includes('Ki') || message.includes('Ki volt') || message.includes('Kicsoda')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
	
	else if(message.includes('mondd meg neki') || message.includes('szólj rá')) {
        const finalText = "Én nem szívesen szólnék bele uram";
        speech.text = finalText;
    }

    else if(message.includes('wikipédia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipédia", "")}`, "_blank");
        const finalText = "A keresett objektumhoz a következőket társítja a a" + message;
        speech.text = finalText;
    }

    else if(message.includes('mennyi az idő') || message.includes('idő')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('mai dátum')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('kalkulátor')) {
        window.open('Calculator:///')
        const finalText = "Számológép megnyitása";
        speech.text = finalText;
    }
	
	else if(message.includes('számológép')) {
        window.open('Calculator:///')
        const finalText = "Számológép megnyitása";
        speech.text = finalText;
    }
	
	else if(message.includes('spotify')) {
        window.open('file://C:\Users\\%46odor\\AppData\\Roaming\\Spotify\\Spotify.exe')
        const finalText = "Spotify megnyitása";
        speech.text = finalText;
    }
	
	else if(message.includes('portfolio')) {
        window.open('https://markopolosanchezmanchez.github.io/Portfolio/')
        const finalText = "Márk portfóliójának megnyitása";
        speech.text = finalText;
    }
	
	else if(message.includes('önéletrajz')) {
        window.open('file://C:\Users\%66odor\OneDrive\Asztali_gép\Fodor_Márk_CV.pdf')
        const finalText = "Márk önéletrajzának megnyitása";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Keresési találatok erre" + message;
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}