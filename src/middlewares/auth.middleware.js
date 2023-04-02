// para verificar si tiene acceso con el token
import jwt from 'jsonwebtoken'
// next es si deja pasar o no deja pasar
export const auth = function (req, res, next) {
    let token = null;
    if(req.headers.authorization){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token){
        return res.status(401).json({auth: false, mensaje : "No se proporciono el Token de Seguridad"});
    }

    // entonces si tiene token
    jwt.verify(token, 'MI_CODIGO_SECRETO', (error, decode) => {
        if(error)
            return res.status(401).json({mensaje : "El Token ya caduco", auth : false});
        // todo bien -> puede ingresar
        req = decode.nom_usuario; // recuperando el usuario
        next();
    });
}