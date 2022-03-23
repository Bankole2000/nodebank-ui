import axios from "axios";
import { env } from "../utils/config";
console.log({env})
const endpoint = `${env.baseUrl}/nodbank-waitlist`;
export default {
  // Gets all waitlisted email
  getWaitlist: async function() {
    return await axios.get(endpoint);
  },

  addToWaitlist: async function(waitlistData) {
    return await axios.post(endpoint, waitlistData);
  }

}