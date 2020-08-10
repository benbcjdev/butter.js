// butter.js

var Butter = function(wrapperDamper, wrapperId) {

    var defaults = {
        wrapperId: 'butter',
        wrapperDamper: 0.08,
    }

    this.wrapperDamper = wrapperDamper || defaults.wrapperDamper;
    this.wrapperId = wrapperId || defaults.wrapperId;

    this.wrapper;
    this.wrapperOffset = 0;
    this.animateId;
    this.resizing = false;
    
};

Butter.prototype = {
    init: function() {
        this.wrapper = document.getElementById(this.wrapperId);
        this.wrapper.style.position = 'fixed';
        this.wrapper.style.width = '100%';

        document.body.style.height = this.wrapper.clientHeight + 'px';

        window.addEventListener('resize', this.resize.bind(this));
        this.wrapperOffset = window.scrollY;
        this.animateId = window.requestAnimationFrame(this.animate.bind(this));
    },

    wrapperUpdate: function() {
        var scrollY = document.body.scrollTop || window.scrollY;
        this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;
        this.wrapper.style.transform = 'translate3d(0,' + (-this.wrapperOffset.toFixed(2)) + 'px, 0)';
    },

    resize: function() {
        var self = this;
        if (!self.resizing) {
            self.resizing = true;
            cancelAnimationFrame(self.animateId);
            window.setTimeout(function() {
                if (parseInt(document.body.style.height) != parseInt(self.wrapper.clientHeight)) {
                    document.body.style.height = self.wrapper.clientHeight + 'px';
                }
                animateId = window.requestAnimationFrame(self.animate.bind(self));
                self.resizing = false;
            }, 150)
        }
    },

    animate: function() {
        this.wrapperUpdate();
        this.animateId = requestAnimationFrame(this.animate.bind(this));
    },

    cancel: function() {
        cancelAnimationFrame(this.animateId);
        window.removeEventListener('resize', this.resize.bind(this));
        this.wrapper.removeAttribute('style');
        document.body.removeAttribute('style');

        this.wrapper = "";
        this.wrapperOffset = 0;
        this.resizing = true;
        this.animateId = "";
    }
}

var butter = new Butter();
butter.init();