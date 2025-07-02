// src/api/spotify.js
import axios from "axios";

const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

let token = null;

// 1. Obtener el token de acceso
export async function getAccessToken() {
  const res = await axios.post(
    "https://accounts.spotify.com/api/token",
    "grant_type=client_credentials",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " + btoa(`${clientId}:${clientSecret}`),
      },
    }
  );

  token = res.data.access_token;
  return token;
}

// 2. Obtener canciones populares (por ejemplo: top 10 de un género)
export async function getTopTracks() {
  if (!token) {
    await getAccessToken();
  }

  const res = await axios.get(
    "https://api.spotify.com/v1/browse/new-releases?limit=10",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data.albums.items;
}
