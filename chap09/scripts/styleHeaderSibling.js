function styleHeaderSibling() {
    if (!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    for (var i=0;i<headers.length;i++){
        //var elem = getNextElement(headers[i].nextSibling);
        addClass(getNextElement(headers[i].nextSibling),"intro");
        //this.style.fontWeight ="normal";
        //this.style.fontSize = "1.2em";
    }
}
function getNextElement(node) {
    // Here maybe nodeType should be 3, otherwise, the return is null and next add Class will come to be error.
    
    if (node.nodeType ==3) {
        return node;
    }
    if (node.nextSibling){
        getNextElement(node.nextSibling);
    }
    return null;
}
function addClass(element,value){
    if( !element.className ){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;
    }
}

addLoadEvent(styleHeaderSibling);