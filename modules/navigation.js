function _classCallCheck(instance, Constuctor) {
    if (!(instance instanceof Constuctor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor=props[i];
        descriptor.enumerable=descriptor.enumerable || false;
        descriptor.configurable=true;
        if ("value" in descriptor) descriptor.writable=true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var Navigation = function() {
    function Navigation(el) {
        var _this = this;

        _classCallCheck(this, Navigation);

        this.el=el;
        this.activeMenu = '';
        this.menuToggleButton=el.querySelector('.navigation__mobile-menu-toggle');
        this.menuToggleButtonIcon=this.menuToggleButton.querySelectorAll('svg');
        this.menu=el.querySelector('.navigation__mobile-menu');
        this.mobileMenuItems=this.menu.querySelectorAll('.navigation__mobile-menu-item');
        this.languageToggleButton=el.querySelector('.navigation__language-toggle');
        this.languageSelect=el.querySelector('.navigation__language-select'); // Event listeners for mobile nav & language select

        document.addEventListener('click', function(e) {
            if (e.target.closest('.navigation__mobile-menu-toggle')) {
                _this.toggleMenu(_this.menu);
            } else if (e.target.closest('.navigation__language-toggle')) {
                _this.toggleMenu(_this.languageSelect);
            } else if (_this.activeMenu) {
                _this.toggleMenu(_this.activeMenu);
            }
        }, false);
    }

    _createClass(Navigation, [{ 
        key: "toggleClasses", 
        value: function toggleClasses(element, classA, classB) {
            var classes=element.classList;

            if (classes.contains(classA)) {
                classes.remove(classA);
                classes.add(classB);
            } else if (classes.contains(classB)) {
                classes.remove(classB);
                classes.add(classA);
            } else {
                throw "Can't find class ".concat(classB, "/").concat(classA);
            }
        }
    }, {
        key: "toggleNavIcon", 
        value: function toggleNavIcon() {
            var _this2=this;

            this.menuToggleButtonIcon.forEach(function(element) {
                _this2.toggleClasses(element, 'hidden', 'block');
            });
        }
    }, {
        key: "toggleMenu", 
        value: function toggleMenu(element) {
            var classes=element.classList;

            if (classes.contains('hidden')) {
                // Check if another menu is already open and close it
                if (this.activeMenu) this.closeMenu(this.activeMenu); 
                // If menu is closed, open it
                this.openMenu(element);
            } else if (classes.contains('block')) {
                // If menu is open, close it
                this.closeMenu(element);
            }
        }
    }, {
        key: "closeMenu", 
        value: function closeMenu(element) {
            this.activeMenu='';
            var classes=element.classList;
            //Hide menu
            classes.add('hidden');
            classes.remove('block');
            if (element === this.menu) this.toggleNavIcon();
        }
    }, {
        key: "openMenu", 
        value: function openMenu(element) {
            this.activeMenu=element;
            var classes=element.classList;
            //Show menu
            classes.add('block');
            classes.remove('hidden');
            if (element === this.menu) this.toggleNavIcon();
        }
    }]);

    return Navigation;
}();

export default Navigation;