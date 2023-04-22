"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = exports.gql = void 0;
exports.gql = require("graphql-tag").gql;
exports.typeDefs = (0, exports.gql) `
  type Query {
    hello: String
  }
`;
//# sourceMappingURL=schema.js.map