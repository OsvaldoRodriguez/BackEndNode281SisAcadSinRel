"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nodemailer = _interopRequireDefault(require("nodemailer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  createTransport() {
    const transport = _nodemailer.default.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      // el pass se genera en autentificacion en 2 pasos
      auth: {
        user: 'sistemasacademicos281@gmail.com',
        pass: 'hrufumwgddgujlsi'
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    return transport;
  },
  async enviarCorreo(data) {
    const datos_correo = data;
    const transporter = this.createTransport();
    // console.log("antes de enviar", datos_correo);
    const info = await transporter.sendMail({
      from: 'sistemasacademicos281@gmail.com',
      to: datos_correo.email,
      subject: datos_correo.subject,
      text: datos_correo.text
    }, function (error, info) {
      if (error) {
        console.log(error);

        // return res.status(401).json({mensaje : "No se envio el correo"});
      } else {
        // console.log("mensaje enviado correctamente", info.response);

        // return res.status(200).json({mensaje : "Todo OK"});
      }
    });
    // console.log("mensaje sent ", info.messageId);
    return;
  }
};
exports.default = _default;