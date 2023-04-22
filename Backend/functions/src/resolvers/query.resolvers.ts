// import { db } from "../utils";

import { CropsQueryResolver } from "../modules";

// const resolvers = {
//     Query: {
//         // Define your query resolvers here

//         getUserById: async (_:any, __:unknown, context: {user: User}) => {
//             try {
//                 const userDoc = await db.collection('users').doc(userId).get();
//                 if (userDoc.exists) {
//                     const userData = userDoc.data();
//                     return {
//                         userId: userData.userId,
//                         email: userData.email,
//                         displayName: userData.displayName,
//                         profileImageURL: userData.profileImageURL,
//                         role: userData.role,
//                         dateCreated: userData.dateCreated
//                     };
//                 } else {
//                     throw new Error('User not found');
//                 }
//             } catch (error) {
//                 throw new Error('Failed to get user: ' + error);
//             }
//         },

//         getFarmById: async (_, { farmId }) => {
//             try {
//                 const farmDoc = await db.collection('farms').doc(farmId).get();
//                 if (farmDoc.exists) {
//                     const farmData = farmDoc.data();
//                     return {
//                         farmId: farmData.farmId,
//                         userId: farmData.userId,
//                         name: farmData.name,
//                         location: farmData.location,
//                         size: farmData.size,
//                         description: farmData.description,
//                         dateCreated: farmData.dateCreated
//                     };
//                 } else {
//                     throw new Error('Farm not found');
//                 }
//             } catch (error) {
//                 throw new Error('Failed to get farm: ' + error);
//             }
//         },

//         getCropById: async (_, { cropId }) => {
//             try {
//                 const cropDoc = await db.collection('crops').doc(cropId).get();
//                 if (cropDoc.exists) {
//                     const cropData = cropDoc.data();
//                     return {
//                         cropId: cropData.cropId,
//                         farmId: cropData.farmId,
//                         userId: cropData.userId,
//                         type: cropData.type,
//                         stage: cropData.stage,
//                         plantingDate: cropData.plantingDate,
//                         harvestDate: cropData.harvestDate,
//                         healthStatus: cropData.healthStatus,
//                         dateCreated: cropData.dateCreated
//                     };
//                 } else {
//                     throw new Error('Crop not found');
//                 }
//             } catch (error) {
//                 throw new Error('Failed to get crop: ' + error);
//             }
//         },

//         getLivestockById: async (_, { livestockId }) => {
//             try {
//                 const livestockDoc = await db.collection('livestock').doc(livestockId).get();
//                 if (livestockDoc.exists) {
//                     const livestockData = livestockDoc.data();
//                     return {
//                         livestockId: livestockData.livestockId,
//                         farmId: livestockData.farmId,
//                         userId: livestockData.userId,
//                         type: livestockData.type,
//                         quantity: livestockData.quantity,
//                         healthStatus: livestockData.healthStatus,
//                         location: livestockData.location,
//                         dateCreated: livestockData.dateCreated
//                     };
//                 } else {
//                     throw new Error('Livestock not found');
//                 }
//             } catch (error) {
//                 throw new Error('Failed to get livestock: ' + error);
//             }
//         },

//         getWeatherDataById: async (_, { weatherDataId }) => {
//             try {
//                 const weatherDataDoc = await db.collection('weatherData').doc(weatherDataId).get();
//                 if (weatherDataDoc.exists) {
//                     const weatherData = weatherDataDoc.data();
//                     return {
//                         weatherDataId: weatherData.weatherDataId,
//                         farmId: weatherData.farmId,
//                         date: weatherData.date,
//                         temperature: weatherData,
//                         humidity: weatherData.humidity,
//                         rainfall: weatherData.rainfall,
//                         windSpeed: weatherData.windSpeed
//                     };
//                 } else {
//                     throw new Error('Weather data not found');
//                 }
//             } catch (error) {
//                 throw new Error('Failed to get weather data: ' + error);
//             }


//             // ...
//         },

//         // Define your mutation and subscription resolvers here

//     },
// }

export const QueryResolvers = {
    ...CropsQueryResolver
}