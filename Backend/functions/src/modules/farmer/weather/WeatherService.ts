import { db } from "../../../utils";

export class WeatherService {

  static async addWeather(Weather: any) {
      try {
        
          await db.collection("WeatherData").add(Weather)
        return {
          message: "Weather details successfully added", success: true,
        
        };
      } catch (error) {
        return {
          message: `${error} failed to add Weather details`, success: false,
        };
      }
    }

  static async getAllWeathersData(user: any) {
      try {
        const WeatherDataArray: any = [];
        const WD = await db.collection("WeatherData").get()
        // Loop through the documents in the IotDevice collection and push their data into the IotDeviceArray
        WD.forEach((doc) => {
          WeatherDataArray.push({ id: doc.id, ...doc.data() });
        });
        return WeatherDataArray
    } catch (error) {
        return {
            message: `${error} failed to retrieve Iotdevices`, success: false,
        };
    }
  }  

}

/*export class WeatherService {
  static addWeather(weather: any) {
      throw new Error("Method not implemented.");
  }
  static async getWeatherData() {
    try {
      const querySnapshot = await db.collection("WeatherData").get();
      const weatherData: any[] = [];
      querySnapshot.forEach((doc: any) => {
        weatherData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return {
        message: "Weather data retrieved successfully",
        success: true,
        data: weatherData,
      };
    } catch (error) {
      return {
        message: `${error} failed to retrieve weather data`,
        success: false,
        data: null,
      };
    }
  }
}
export {db}*/



