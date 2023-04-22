/**
 * manage firebase admin configuration
 */

import admin from "firebase-admin"

admin.initializeApp()

export const db = admin.firestore();
