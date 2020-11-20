export default class Donki {
  static async getSpaceWeather() {
    try {
      const response = await fetch(`https://api.nasa.gov/DONKI/notifications?startDate=2020-11-01&endDate=2020-11-08&type=all&api_key=${process.env.API_KEY}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}