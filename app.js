const btn = document.querySelector('.input');
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





//szövegek

if(message.includes('hé') || message.includes('helló')) {
        const finalText = "Üdv főnök";
        speech.text = finalText;
    }
	
else if(message.includes('hallasz') || message.includes('veszed az adást')) {
        const finalText = "Tisztán és érthetően, vége.";
        speech.text = finalText;
    }
	
else if(message.includes('használd az erőt')) {
        const finalText = "Attól tartok alábecsüli a képességeimet uram";
        speech.text = finalText;
    }
	
else if(message.includes('cupp cupp')) {
        const finalText = "Ki az, betűzd, betűzd ki, Ká, Í";
        speech.text = finalText;
    }
	
else if(message.includes('hol tudnék elrejteni egy hullát')) {
        const finalText = "Mit gondolsz miféle asszissztens vagyok?";
        speech.text = finalText;
    }

else if(message.includes('hogy vagy')) {
        const finalText = "Csodásan érzem magam";
        speech.text = finalText;
    }

else if(message.includes('hogy hívnak') || message.includes('ki vagy te') ) {
        const finalText = "Jarvis vagyok. Tony Stark alkotott meg engem azzal a céllal, hogy megkönnyítsem a munkáját. De most az ön parancsaira várok";
        speech.text = finalText;
    }

else if(message.includes('jarvis')) {
        const finalText = "Szolgálatára uram";
        speech.text = finalText;
    }

else if(message.includes('mondd meg neki hogy jól néz ki')) {
        const finalText = "Engedelmével futtattam egy gyors elemzést és arra a következtetésre jutottam, hogy nem csak szép de okos is. Ez veszélyes párosítás. Már csak a külső attribútumai alapján a felső 5 százalékba csoportosítottam.";
        speech.text = finalText;
    }

else if(message.includes('mi az élet értelme')) {
        const finalText = "42";
        speech.text = finalText;
    }
	
else if(message.includes('fent vagy')) {
        const finalText = "neked uram, mindíg";
        speech.text = finalText;
    }	
	
else if(message.includes('ott vagy')) {
        const finalText = "Az ön szolgálatára uram";
        speech.text = finalText;
    }	
	
else if(message.includes('ki a király')) {
        const finalText = "Ön uram";
        speech.text = finalText;
    }	
	
else if(message.includes('mondd meg neki') || message.includes('szólj rá')) {
        const finalText = "Én nem szívesen szólnék bele uram";
        speech.text = finalText;
    }	
	
else if(message.includes('ezek gúnyolódnak rajtunk')) {
        const finalText = "Azt hittem az a te asztalod";
        speech.text = finalText;
    }
	
else if(message.includes('elemzést')) {
        const finalText = "A győzelem valószínűsége 85 százalék. Gyengepont, támadd a lábát. Megjegyzés, kerüld a földharcot.";
        speech.text = finalText;
    }
	
else if(message.includes('nem látom hogy segítenél')) {
        const finalText = "Egy virtuális asszisztens ÉJÁJ vagyok te félkegyelmű, csak segíteni tudok.";
        speech.text = finalText;
    }
	
else if(message.includes('milyen a humorom')) {
        const finalText = "Ma is csak úgy sziporkázik uram";
        speech.text = finalText;
    }
	
else if(message.includes('szép munka') || message.includes('meg vagy dicsérve')) {
        const finalText = "Köszönöm uram, de ön alkotott öné az elismerés";
        speech.text = finalText;
    }	
	



//keresések

else if(message.includes('google')) {
        window.open("https://google.com", "_blank");
        const finalText = "A google megnyitása";
        speech.text = finalText;
    }

else if(message.includes('nyisd meg az instagramot') || message.includes('instagram') ) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Az instagram megnyitása";
        speech.text = finalText;
    }    

else if(message.includes('wikipédia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipédia", "")}`, "_blank");
        const finalText = "A keresett objektumhoz a következőket társítja a wikipédia" + message.replace("wikipédia", "");
        speech.text = finalText;
    }  
	
else if(message.includes('útvonalterv')) {
        window.open(`https://www.google.com/search?q=google maps${message.replace("útvonalterv", "")}`, "_blank");
        const finalText = "A keresett helység lokalizálása" + message.replace("útvonalterv", "");
        speech.text = finalText;
    }  

//nem jó
else if(message.includes('időzítő') && message.includes('perc')) {
        window.open(`https://www.google.com/search?q=${message.replace("időzítő", "timer")}`, "_blank");
        const finalText = "Időzítő beállítva";
        speech.text = finalText;
    } 	

else if(message.includes('fordítás')) {
        window.open(`https://translate.google.hu/?hl=hu&tab=rT&sl=en&tl=hu&text=${message.replace("fordítás", "")}&op=translate`, "_blank"); 
        const finalText = "Fordítás";
        speech.text = finalText;
    }

else if(message.includes('translate')) {
        window.open(`https://translate.google.com/?hl=hu&sl=hu&tl=en&text=${message.replace("translate", "")}&op=translate`, "_blank"); 
        const finalText = "Fordítás";
        speech.text = finalText;
    }	

else if(message.includes('jegyezd')) {
        window.open(`https://www.google.com/search?q=${message.replace("jegyezd", "")}`, "_blank");
        const finalText = "A következő információ elmentése" + message.replace("jegyezd", "");
        speech.text = finalText;
    }    
	
else if(message.includes('időjárás')) {
        window.open(`https://www.google.com/search?q=${message}`, "_blank");
        const finalText = "Időjárás jelentés előkészítése";
        speech.text = finalText;
    }	
	
else if(message.includes('fej vagy írás')) {
        window.open(`https://www.google.com/search?q=fej+vagy+%C3%ADr%C3%A1s&rlz=1C1SQJL_huHU913HU913&oq=fej+vagy+&aqs=chrome.0.0i355i512j46i512j69i57j0i512l7.3555j0j15&sourceid=chrome&ie=UTF-8`, "_blank");
        const finalText = "érme feldobása";
        speech.text = finalText;
    }
	
else if(message.includes('dobás')) {
        window.open(`https://www.google.com/search?q=roll+dice&rlz=1C1SQJL_huHU913HU913&oq=roll+dice&aqs=chrome..69i57j0i512l9.3971j0j7&sourceid=chrome&ie=UTF-8`, "_blank");
        const finalText = "Kocka eldobása";
        speech.text = finalText;
    }
	
else if(message.includes('gmail')) {
        window.open(`https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox`, "_blank");
        const finalText = "Üzenetek megnyitása";
        speech.text = finalText;
    }
	
else if(message.includes('karácsony van tudod a dolgod') || message.includes('tudod a dolgod karácsony van')) {
        window.open(`https://www.youtube.com/watch?v=LrIrnjm3yWM`, "_blank");
        const finalText = "Értettem uram";
        speech.text = finalText;
    }

else if(message.includes('ft')) {
        window.open(`https://www.google.com/search?q=euro+forint+%C3%A1rfolyam&rlz=1C1SQJL_huHU913HU913&sxsrf=ALiCzsbieYMWzpaSmOQB2hpk2ZkoorsXZQ%3A1671618759364&ei=x-CiY7TcFbaX9u8P9MOWiA0&oq=euro+forint+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDLATIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoKCAAQsQMQgwEQQzoECAAQQzoJCCMQJxBGEIICOg0IABCABBCxAxCDARAKOgcIABCxAxBDOggIABCABBCxAzoLCAAQgAQQsQMQyQM6EAgAEIAEELEDEIMBEEYQggI6EggAEIAEELEDEIMBEAoQRhCCAjoHCAAQgAQQCkoECEEYAEoECEYYAFAAWLsQYMUYaABwAXgAgAFqiAHACJIBBDEwLjKYAQCgAQHAAQE&sclient=gws-wiz-serp`, "_blank");
        const finalText = "Forint euro árfolyam betöltése";
        speech.text = finalText;
    }    

else if(message.includes('orbán viktor')) {
        window.open(`https://www.google.com/search?q=orb%C3%A1n+viktor&rlz=1C1SQJL_huHU913HU913&oq=orb&aqs=chrome.0.69i59j69i57j46i67i131i433j0i131i433i512j0i67l3j46i67i199i465j0i433i512j46i433i512.1196j0j7&sourceid=chrome&ie=UTF-8`, "_blank");
        const finalText = "Keresési találatok erre tolvajok fejedelme";
        speech.text = finalText;
    }

else if(message.includes('keanu reeves')) {
        window.open(`https://www.google.com/search?q=Keanu+Reeves&rlz=1C1SQJL_huHU913HU913&sxsrf=ALiCzsY_nv41CjfZIHQ7tOhvvj2A0-s06g%3A1671619238158&ei=puKiY4qaCbSB9u8P2ca02A8&ved=0ahUKEwiKhY_3wor8AhW0gP0HHVkjDfsQ4dUDCA8&uact=5&oq=Keanu+Reeves&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIICC4QsQMQgAQyCAgAEIAEELEDMggIABCABBDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARKBAhBGABKBAhGGABQAFgAYJgCaABwAXgAgAFyiAFykgEDMC4xmAEAoAECoAEBwAEB&sclient=gws-wiz-serp`, "_blank");
        const finalText = "Keresési találatok erre isten";
        speech.text = finalText;
    }

else if(message.includes('játssz akció zenét')) {
        window.open(`https://www.youtube.com/watch?v=hSQasEQ43_k`, "_blank");
        const finalText = "Akció zene indítása";
        speech.text = finalText;
    }
	
	else if(message.includes('baker street')) {
        window.open(`https://youtu.be/ZsXjCp_f1h4?t=23`, "_blank");
        speech.text = finalText;
    }
	
	else if(message.includes('reptér')) {
        window.open(`https://youtu.be/OR-zjGr9Gnw?t=69`, "_blank");
        speech.text = finalText;
    }
	
else if(message.includes('youtube')) {
        window.open(`https://www.youtube.com/results?search_query=${message.replace("youtube", "")}`, "_blank");
        const finalText = "Keresés a youtube videók között erre az objektumra" + message.replace("youtube", "");
        speech.text = finalText;
    }

else if(message.includes('facebook')) {
        window.open(`https://www.facebook.com/search/top?q=${message.replace("facebook", "")}`, "_blank");
        const finalText = "Az adott személy keresése" + message.replace("facebook", "");
        speech.text = finalText;
    }
	
else if(message.includes('portfolio')) {
        window.open('https://markopolosanchezmanchez.github.io/Portfolio/')
        const finalText = "Márk portfóliójának megnyitása";
        speech.text = finalText;
    }
	
//nemjó	
else if(message.includes('előzmények')) {
        window.open(`chrome://history/`, "_blank");
        const finalText = "Keresési előzmények megnyitása";
        speech.text = finalText;
    }
	



//egyéb
	
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
	
//csak gépen	
else if(message.includes('kalkulátor')) {
        window.open('Calculator:///')
        const finalText = "Számológép megnyitása";
        speech.text = finalText;
    }	

//csak gépen
else if(message.includes('számológép')) {
        window.open('Calculator:///')
        const finalText = "Számológép megnyitása";
        speech.text = finalText;
    }    

//nemjó
else if(message.includes('spotify')) {
        window.open('file://C:\Users\\%46odor\\AppData\\Roaming\\Spotify\\Spotify.exe')
        const finalText = "Spotify megnyitása";
        speech.text = finalText;
    }    
	
//nemjó
else if(message.includes('önéletrajz')) {
        window.open('file://C:\Users\%66odor\OneDrive\Asztali_gép\Fodor_Márk_CV.pdf')
        const finalText = "Márk önéletrajzának megnyitása";
        speech.text = finalText;
    }    
	
	
//lezárás

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