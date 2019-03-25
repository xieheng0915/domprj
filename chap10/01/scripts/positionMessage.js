function positionMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message01")) return false;
    var elem = document.getElementById("message01");
    elem.style.position = "absolute";
    elem.style.left = "500px";
    elem.style.top = "500px";
    elem.style.fontWeight="bold";
    elem.style.fontSize="1.6em";
    elem.style.color="red";
    moveElement("message01",100,50,10);
    var elem = document.getElementById("message02");
    elem.style.position = "absolute";
    elem.style.left = "200px";
    elem.style.top = "100px";
    elem.style.fontWeight="bold";
    elem.style.fontSize="1.6em";
    elem.style.color="blue";
    moveElement("message02",500,500,10);
}
addLoadEvent(positionMessage);