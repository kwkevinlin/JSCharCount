/**
 * Created by link on 7/6/15.
 */

function clickEvent(){
    var inputText = document.getElementById('inputMessage').value;
    /*
        New line should not be counted as a character (or 2)
        g = global replacement. /replaceThingsHere/
        Replacing:
            \r\n
            \n
            \r
     */
    inputText = inputText.replace(/(\r\n|\n|\r)/g,"");

    //alert(inputText.length);
    document.getElementById('resultBox').innerHTML = inputText.length;
    //value is for form elements, innerHTML for contents of other elements.
}
