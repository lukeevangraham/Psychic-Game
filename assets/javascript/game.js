// APP RANDOMLY PICKS A LETTER
    // var chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // var stringLength = 1;
    // var randomLetter = '';
    // for (let i = 0; i < stringLength; i++) {
    //     // const element = array[i];
    //     var rnum = Math.floor(Math.random() * chars.length);
    //     randomLetter += chars.substring(rnum,rnum+1);
    // }
    // document.randform.randomfield.value = randomLetter;

// Pasted from web as template
    function randomString() {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var string_length = 8;
        var randomstring = '';
        for (var i=0; i<string_length; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            randomstring += chars.substring(rnum,rnum+1);
        }
        document.randform.randomfield.value = randomstring;
        console.log(randomstring);
    }

// USER GUESSES WHICH LETTER THE APP CHOSE