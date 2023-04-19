const admin = require("firebase/admin");
const { env } = process;
admin.initializeApp({ projectId: env.PROJECT_ID });
const db = admin.firestore();
module.exports = { db };
