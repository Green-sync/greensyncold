/**
 * manage firebase admin configuration
 */

import admin from "firebase-admin"

admin.initializeApp({projectId: "opher-4f2a6"});


export const db = admin.firestore();
