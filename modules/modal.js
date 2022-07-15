function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

var Modal = function() {
    function Modal(el) {
        var _this=this;

        _classCallCheck(this, Modal);

        this.el=el;
        this.button=this.getActivator();
        this.dataAttr=el.dataset.modalActivate;
        this.modal=document.querySelector("[data-modal=\"".concat(this.dataAttr, "\"]"));
        this.outer='.modal-overlay';
        this.closeButton='.modal-close-button'; 
        
        // Event Listeners
        document.addEventListener('click', function(e) {
            if (e.target === _this.button) {
                _this.toggleModal(e, 'remove');
            } else if (e.target.closest(_this.outer) || e.target.closest(_this.closeButton)) {
                _this.toggleModal(e, 'add');
            }
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape") {
                _this.toggleModal(e, 'add');
            }
        });
    }

    _createClass(Modal, [{
        key: "getActivator", 
        value: function getActivator() {
            var element;

            if (this.el.children.length) {
                var childElements=this.el.children;
                Object.values(childElements).forEach(function(node) {
                    if (node.nodeName === 'A' || node.nodeName === 'BUTTON') {
                        element=node;
                    }
                });
                return element;
            } else {
                return this.el;
            }
        }
    }, {
        key: "toggleModal", 
        value: function toggleModal(event, toggleState) {
            event.preventDefault();
            this.modal.classList[toddleState]('hidden');
        }
    }]);

    return Modal;
}();

export default Modal;