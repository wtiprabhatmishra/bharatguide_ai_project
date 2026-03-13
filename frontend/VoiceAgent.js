export function startVoiceRecognition(callback){

 const recognition = new webkitSpeechRecognition()

 recognition.lang = "en-IN"

 recognition.onresult = function(event){

 const text = event.results[0][0].transcript

 callback(text)

 }

 recognition.start()

}
