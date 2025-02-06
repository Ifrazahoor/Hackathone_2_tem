// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "xt68a4tx", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "sknOJT886V8mF5fw7cMvCsRTJlET64WlkrEzxxvu2qpXNRjXnpWUJtMiifBVh2uwot1fGlu1gI4WvLvbaWqywccEljyes0Ie4KEJn46G8x4xKtXjf5bEEBFHFYs0b1ZgIS3caImw3qgTlzgo8QmQV4Gp01FYYjWe049ZOOiynJbxWBiabZ0R",
});