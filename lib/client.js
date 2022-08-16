const contentful = require("contentful-management");
export const client = contentful.createClient({
  // This is the access token for this space. Normally you get the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});
