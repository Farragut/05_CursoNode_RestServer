const jwt = require('jsonwebtoken');

let verificarToken = (req, res, next) => {
    let token = req.get('token'); //nombre del header a enviar

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario;
        next();
    });
};


let verificarAdmin = (req, res, next) => {
    let token = req.get('token'); //nombre del header a enviar

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }

        req.usuario = decoded.usuario;
        let role = req.usuario.role;
        if (role === 'ADMIN_ROLE') {
            next();
        } else {
            return res.json({
                ok: false,
                err: {
                    message: 'El usuario no es administrador'
                }
            })
        }
    });
};

module.exports = {
    verificarToken,
    verificarAdmin
};