"use strict";

var _express = _interopRequireDefault(require("express"));
var _index = require("./routes/index");
var _cors = _interopRequireDefault(require("cors"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _bcrypt = require("bcrypt");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());
app.use(_express.default.json()); // para capturar datos en formato json -> para usar req.body
app.use(_express.default.urlencoded({
  extended: true
})); // para recibir por url encoded (peticion post)

// para las imagenes
app.use(_express.default.static('public'));
// habilitando rutas
app.use('/api', _index.Route);
app.listen(3000, () => {
  console.log("servidor corriendo****");
});