import jwt from "jsonwebtoken";

const secret = "chave-do-jwt";

export const jwtService = {
  //método signToken que vai servir para assinar um token
  // -> recebe um payload que são os dados que vai passar dentro do Token
  //-> Token possui uma data de expiração. Ele vai se usado pelo font-end para garantir que o usuário tem permissão de acessar determinada rota
  //

  signToken: (payload: string | object | Buffer, expiration: string) => {
    return jwt.sign(payload, secret, {
      expiresIn: expiration,
    });
  },

  verifyToken: (token: string, callbackfn: jwt.VerifyCallback) => {
    jwt.verify(token, secret, callbackfn);
  },
};
