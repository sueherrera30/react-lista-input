'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./App.css');

var _componentesListaJsx = require('./componentes/lista.jsx');

var _componentesListaJsx2 = _interopRequireDefault(_componentesListaJsx);

var App = (function (_Component) {
   _inherits(App, _Component);

   function App() {
      _classCallCheck(this, App);

      _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
      this.state = { nuevoItemTextoSuper: "",
         arregloTextoSuper: [],
         nuevoItemTextoInstrumentos: "",
         arregloTextoInstrumentos: []
      };
      this.agregarListaSuper = this.agregarListaSuper.bind(this);
      this.manejarCambioSuper = this.manejarCambioSuper.bind(this);
      this.agregarListaInstrumentos = this.agregarListaInstrumentos.bind(this);
      this.manejarCambioInstrumentos = this.manejarCambioInstrumentos.bind(this);
   }

   _createClass(App, [{
      key: 'manejarCambioSuper',
      value: function manejarCambioSuper(event) {
         var inputValue = event.target.value;
         this.setState({ nuevoItemTextoSuper: inputValue });
      }
   }, {
      key: 'manejarCambioInstrumentos',
      value: function manejarCambioInstrumentos(event) {
         var inputValue = event.target.value;
         console.log(inputValue);
         this.setState({ nuevoItemTextoInstrumentos: inputValue });
      }
   }, {
      key: 'agregarListaSuper',
      value: function agregarListaSuper() {
         var arregloSuper = this.state.arregloTextoSuper;

         arregloSuper.push(this.state.nuevoItemTextoSuper);
         console.log(this.state.nuevoItemTextoSuper);
         this.setState({ arregloTextoSuper: arregloSuper });
      }
   }, {
      key: 'agregarListaInstrumentos',
      value: function agregarListaInstrumentos() {
         var arregloInstrumentos = this.state.arregloTextoInstrumentos;
         arregloInstrumentos.push(this.state.nuevoItemTextoInstrumentos);
         /*actilizar el estado*/
         this.setState({ arregloTextoInstrumentos: arregloInstrumentos });

         /* this.state.arregloTextoInstrumentos.push(this.state.nuevoItemTextoInstrumentos);
          this.setState({nuevoItemTextoIstrumentos:""})*/
      }
   }, {
      key: 'render',
      value: function render() {
         return _react2['default'].createElement(
            'div',
            { className: 'App' },
            _react2['default'].createElement(
               'div',
               null,
               _react2['default'].createElement('input', { type: 'text', onChange: this.manejarCambioSuper }),
               _react2['default'].createElement(
                  'button',
                  { onClick: this.agregarListaSuper },
                  'Enviar'
               ),
               _react2['default'].createElement(_componentesListaJsx2['default'], { colorFondo: '#762d79', colorLetra: '#fff', titulo: 'super', elementosLista: this.state.arregloTextoSuper }),
               _react2['default'].createElement(_componentesListaJsx2['default'], { colorFondo: '#762d79', colorLetra: '#fff', titulo: 'instrumentos', elementosLista: this.state.arregloTextoInstrumentos }),
               _react2['default'].createElement('input', { type: 'text', onChange: this.manejarCambioInstrumentos }),
               _react2['default'].createElement(
                  'button',
                  { onClick: this.agregarListaInstrumentos },
                  'Enviar'
               )
            )
         );
      }
   }]);

   return App;
})(_react.Component);

exports['default'] = App;
module.exports = exports['default'];