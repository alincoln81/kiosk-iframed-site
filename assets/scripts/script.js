
function showOutput() {
    //Runs When the AI process is complete 
    console.log('showOutput called');
    
    //Load in Result URL
    document.getElementById('aiResult').src = 'https://firebasestorage.googleapis.com/v0/b/vixi-capture-dev.appspot.com/o/images%2F1dd35140-7a02-4062-83d3-b195a0127033%2F810a57a9-6262-4b5e-94bf-845cf0f9e57c.jpg?alt=media&token=044a23dc-a41a-43c8-86b9-243a6566dc91';

    //Show Results
    document.getElementById('results').style.display = 'flex';
    
    //SetTimeout (when it reaches 0 the experience will reset)
    countDown(true);
}

function resetExperience() {
    
    // Cancel countDown
    countDown(false);

    //Redirect
    window.location.href = "https://fans.capture.vixi.thefamousgroup.com/submissions?eventId=6cdaf206-e677-49d9-8c2b-f460f1faccdf";
}

function countDown(bool) {
    let resetcountdown;
    if (bool) {
        resetcountdown  = setTimeout ( "resetExperience()", 10000 );
        console.log('countdown started');
    }
    else {
        clearTimeout ( resetcountdown );
        console.log('countDown stopped');
    }
}

showOutput();