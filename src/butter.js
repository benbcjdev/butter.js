// butter.js

var scrollY = undefined;

(function(root){
    var Butter = function() {

        var self = this;

        this.defaults = {
            wrapperId: 'butter',
            wrapperDamper: 0.07,
            cancelOnTouch: false
        }

        this.validateOptions = function(ops) {
            for (var prop in ops) {
                if (self.defaults.hasOwnProperty(prop)) {
                    Object.defineProperty(self.defaults, prop, {value: Object.getOwnPropertyDescriptor(ops, prop).value})
                }
            }
        }

        this.wrapperDamper;
        this.wrapperId;
        this.cancelOnTouch;
        this.wrapper;
        this.wrapperOffset = 0;
        this.animateId;
        this.resizing = false;
        this.active = false;
        this.wrapperHeight;
        this.bodyHeight;
        this.check = false;
    };

    Butter.prototype = {

        init: function(options) {
            if (options) {
                this.validateOptions(options);
            }


            this.active = true;

            this.resizing = false;
            this.wrapperDamper = this.defaults.wrapperDamper;
            this.wrapperId = this.defaults.wrapperId;
            this.cancelOnTouch = this.defaults.cancelOnTouch;

            this.wrapper = document.getElementById(this.wrapperId);

            this.wrapper.style.position = 'fixed';

            this.wrapper.style.width = '100%';

            this.wrapperHeight = this.wrapper.clientHeight;
            document.body.style.height = this.wrapperHeight + 'px';

            window.addEventListener('resize', this.resize.bind(this));
            if (this.cancelOnTouch) {
                window.addEventListener('touchstart', this.cancel.bind(this));
            }
            this.wrapperOffset = 0.0;
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));
        },

        wrapperUpdate: function() {
            scrollY = (document.scrollingElement != undefined) ? document.scrollingElement.scrollTop : (document.documentElement.scrollTop || 0.0);

            if (this.check == true){
                this.wrapperOffset = scrollY;
                this.check = false;
            };
            this.wrapperOffset += (scrollY - this.wrapperOffset) * this.wrapperDamper;

            if (this.active == true){
                this.wrapper.style.transform = 'translate(0,' + (-this.wrapperOffset.toFixed(2)) + 'px)';
            };

        },

        checkResize: function() {
            if (this.wrapperHeight != this.wrapper.clientHeight) {
                this.resize();
            }
        },

        resize: function() {
            var self = this;
            if (!self.resizing) {
                self.resizing = true;
                window.cancelAnimationFrame(self.animateId);
                window.setTimeout(function() {
                    self.wrapperHeight = self.wrapper.clientHeight;
                    if (parseInt(document.body.style.height) != parseInt(self.wrapperHeight)) {
                        document.body.style.height = self.wrapperHeight + 'px';
                    }
                    self.animateId = window.requestAnimationFrame(self.animate.bind(self));
                    self.resizing = false;
                }, 150)
            }
        },

        animate: function() {
            this.checkResize();
            this.wrapperUpdate();
            this.animateId = window.requestAnimationFrame(this.animate.bind(this));
        },

        cancel: function() {
            if (this.active) {
                window.cancelAnimationFrame(this.animateId);

                window.removeEventListener('resize', this.resize);
                window.removeEventListener('touchstart', this.cancel);
                this.wrapper.removeAttribute('style');
                document.body.removeAttribute('style');

                this.active = false;
                this.wrapper = "";
                this.wrapperOffset = 0;
                this.resizing = true;
                this.animateId = "";
            }
        },
        pause: function() {
            if (this.active) {
                window.cancelAnimationFrame(this.animateId);
                this.active = false;
                this.wrapperOffset = 0;
                this.resizing = true;
                this.wrapper.style.position = 'relative';
                this.wrapper.style.transform = 'translate(0px, 0px)';
                this.check = true;
            }
        },
    };

    root.butter = new Butter();

})(this);
