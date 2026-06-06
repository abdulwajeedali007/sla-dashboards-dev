import axios from 'axios';

const clientId = import.meta.env.VITE_PEGA_CLIENT_ID;
const clientSecret = import.meta.env.VITE_PEGA_CLIENT_SECRET;
const tokenUrl = import.meta.env.VITE_PEGA_TOKEN_URL;

let accessToken: string | null = null;

export const getAccessToken = async () => {
  try {
    // If token already exists
    if (accessToken) {
      return accessToken;
    }

    const response = await axios.post(
      tokenUrl,
      new URLSearchParams({
        grant_type: 'client_credentials',
      }),
      {
        auth: {
          username: clientId,
          password: clientSecret,
        },
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    accessToken = response.data.access_token;

    return accessToken;
  } catch (error) {
    console.error('Token Error', error);
    throw error;
  }
};
