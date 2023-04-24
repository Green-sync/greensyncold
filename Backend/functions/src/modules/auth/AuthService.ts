/**
 * 
 */


import { Response, Request } from "express";
import { admin } from "../../utils";
export class AuthService {
  static getAuthData(req: Request, resp: Response) {
    throw new Error("Method not implemented.");
  }
  /**
   * Exportd Authorization overload function
   */
  static isAuthorized = (opts: {
    hasRole: Array<'admin' | 'farmer' | 'consumer'>,
    allowSameUser: boolean
  }) => {
    return (req: Request, res: Response, next: Function) => {
      const { role, uid, user_id } = res.locals

      if (opts.allowSameUser && user_id && uid === user_id)
        return next();

      if (!role)
        return res.status(403).send({ message: 'Forbidden', success: false });

      if (opts.hasRole.includes(role))
        return next();

      return res.status(403).send({ message: 'Forbidden', success: false });
    }
  }
  static async isAuthenticated(req: Request, res: Response, next?: any) {
    const { authorization } = req.headers;

    if (!authorization) {
      return null
    }

    if (!authorization.startsWith("AgriTechGreen")) {
      return null
    }

    const split = authorization.split("AgriTechGreen ");
    if (split.length !== 2) {
      return null
    }

    const token = split[1];

    try {
      const decodedToken: any = await admin.auth().verifyIdToken(token);
      res.locals = { ...res.locals, uid: decodedToken.uid, role: decodedToken.role, email: decodedToken.email, fullName: decodedToken.displayName  };
      return res.locals
    } catch (err) {
      return null
    }
  }
  static async customRoles(req: Request, res: Response) {
    const { uid, role } = req.body;
    try {
      const user = await admin.auth().setCustomUserClaims(uid, { role });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).send({ message: "SetCustom Roles Endpoint", error });
    }
  }
}