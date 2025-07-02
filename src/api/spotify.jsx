//ojala no se me hubiera ocurrido usarla xd
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

// 2. Obtener canciones 
export async function searchTracks(query) {

    if (!token) {
        await getAccessToken();
    }

    //console.log("Token:", token)

    //aca se puede modificar el limite (lo puse en 10 por si acaso)
    try{
    const res = await axios.get(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=10`,
    {
    headers: {
    Authorization: `Bearer ${token}`,
    },
    }
    );

    //console.log("Respuesta de spotify:", res.data);

    return res.data.tracks.items;
    }
    catch(error){
        //console.error("Error al buscar canciones:", error);
        return [];
    }
}
