function mouseClick(ev) {
    var ev = ev || window.event,
        x = 0,
        y = 0;

    if (ev.pageX) {
        x = ev.pageX;
        y = ev.pageY;
    } else if (ev.clientX) {
        var offsetX = 0, offsetY = 0;
        if (document.documentElement.scrollLeft) {
            offsetX = document.documentElement.scrollLeft;
            offsetY = document.documentElement.scrollTop;
        } else if (document.body) {
            offsetX = document.body.scrollLeft;
            offsetY = document.body.scrollTop;
        }
        x = ev.clientX + offsetX;
        y = ev.clientY + offsetY;
    }
    return {
        x: x,
        y: y
    }
}