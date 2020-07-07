import axios from 'axios'
const url = 'https://restcountries.eu/rest/v2'

export default {

  /**
   * Get information about all countries stored on the RestCountries API
   */

  getAllCountries () {
    return axios.get(`${url}/all`)
  }

}
