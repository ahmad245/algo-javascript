// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

// Given the starting HTML tag, find the appropriate end tag which your editor should propose.

// If you are not familiar with HTML, consult with this note.

// Example

// For startTag = "", the output should be htmlEndTagByStartTag(startTag) = "";

// For startTag = "", the output should be htmlEndTagByStartTag(startTag) = "".

// Hints

// split()
// toString()


function htmlEndTagByStartTag(startTag = '') {
    if (startTag.endsWith('>') && startTag.startsWith('<')) {
        let firstWorld = startTag.split(' ')[0];
        let world = firstWorld.substring(1);
        if (world.endsWith('>')) {
            world = world.replace('>', '');
        }
        return '</' + world + '>';
    } else if (startTag.startsWith('"') && startTag.endsWith('"') || startTag.startsWith("'") && startTag.endsWith("'")) {
        return startTag[0] + '' + startTag[startTag.length - 1];
    }

}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))