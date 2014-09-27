exports.pins = {
    led: {type: "Digital", direction: "output"}
};

exports.configure = function() {
    this.led.init();
    
    //trace("led init");
}

exports.turnOn = function() {
    this.led.write(	1 );
    //trace("turn");
}
		
exports.turnOff = function() {
    this.led.write( 0 );
}