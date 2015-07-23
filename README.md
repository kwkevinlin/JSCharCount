# JSCharCount
Character Count Tool web application built using Bootstrap and JavaScript

**Detailed documentary please read:**  
http://linkevin.me/character-count-tool-bootstrap-javascript/

**Notice**  
This application is designed specifically to not consider _newlines_ as characters. 

```
line1
line2
```

Should thus return as 10 (characters) and not 12.

```javascript
     /*
        New line should not be counted as a character (or 2)
        Replacing:
            \r\n
            \n
            \r
     */
    inputText = inputText.replace(/(\r\n|\n|\r)/g,"");
```
