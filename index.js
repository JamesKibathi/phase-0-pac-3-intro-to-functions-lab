function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return string.toLowerCase();
}

function logShout(string){
   let ans= string.toUpperCase();
   console.log(ans);

}

function logWhisper(string){
    let logAns=string.toLowerCase();
    console.log(logAns);
}

function sayHiToHeadphonedRoommate(string){

    let lowercase = string.toLowerCase();
    let uppercase=string.toUpperCase();
    let myString="Let\'s have dinner together!";
    
    if (string===lowercase){
        return "I can\'t hear you!" ;
    }

    if (string===uppercase){
        return "YES INDEED!" ;
    }
    if (string=myString){
        return "I would love to!";
    }
}