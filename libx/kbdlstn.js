const ioHook = require("iohook");


ioHook.on("keyup", (event) => {


    if (event.keycode == 29) {
        this.ctrlKey = false;
    } else {
        this.ctrlKey = event.ctrlKey;
    }
});