const repeatString = function(word, times) {

    let text = ''
    if (times < 0){
        return 'ERROR'
    } else {
        for (i = 0; i < times; i++) {
            text = text += word
        }
    return text
    }
};

// Do not edit below this line
module.exports = repeatString;
