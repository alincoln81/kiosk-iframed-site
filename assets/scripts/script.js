
function showOutput() {
    console.log('showOutput called');
    countDown(true);
}

function resetExperience() {
    
    // Cancel countDown
    countDown(false);

    //Redirect
    window.location.assign("https:/fans.capture.vixi.thefamousgroup.com/submissions?eventId=6cdaf206-e677-49d9-8c2b-f460f1faccdf&isLockedOrientation=true");
}

function countDown(bool) {
    let resetcountdown;
    if (bool) {
        resetcountdown = setTimeout ( "resetExperience()", 10000 );
        console.log('countdown started');
    }
    else {
        clearTimeout ( resetcountdown );
        console.log('countDown stopped');
    }
}

showOutput();