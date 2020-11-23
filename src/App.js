
import {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './components/soptify';
import Player from './components/Player';
import {useDataLayerValue} from './DataLayer'
import SpotifyWebApi from "spotify-web-api-js"

const spotify = new SpotifyWebApi();

function App() {
//  const [token, setToken] = useState(null)
 const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
      const hash = getTokenFromUrl();
      // window.location.hash = '';
      const _token = hash.access_token;
      if(_token){
        dispatch({
          type:'SET_TOKEN',
          token: _token
        })
        // setToken(_token);
        
        spotify.setAccessToken(_token)
        spotify.getMe().then((user) =>{
          dispatch({
            type:'SET_USER',
            user: user
          }
          );
        });

        spotify.getUserPlaylists().then((playlists)=>{
          dispatch({
            type:'SET_PLAYLIST',
            playlists:playlists
          })
        })
        spotify.getPlaylist('7EKbKsQsIptEsiW3HgyWeL').then((res)=>{
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: res,
          })
        })
      }
  }, [])



  return (
    <div className="app">
      { 
        token ? <Player spotify={spotify} /> : <Login />
      }
      </div>
  );
}

export default App;
