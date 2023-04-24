/**
 * manage firebase admin configuration
 */

import admin from "firebase-admin"

admin.initializeApp({projectId: "opher-4f2a6"});


const db = admin.firestore();

export {db,admin}
