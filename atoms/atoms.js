import {atom} from "recoil";


export const LOGIN_TOKEN_ATOM = atom({
    key : 'LOGIN TOKEN',
    default : typeof window !== "undefined" && localStorage.getItem('token')
})

export const NEW_RELEASES_ALBUMS_ATOM = atom({
    key : 'NEW RELEASES' + Math.random() ,
    default : []
})

export const NEW_RELEASES_ALBUMS_TRACK_ATOM = atom({
    key : 'NEW RELEASES ALBUMS TRACK' + Math.random(),
    default : []
})

export const TRACK_FOR_WEB_PLAY_BACK = atom({
    key : 'TRACK FOR WEB PLAY BACK',
    default : ''
})

export const SPOTIFY_DEVICE_ID_ATOM = atom({
    key : 'SPOTIFY DEVICE ID',
    default : undefined
})

export const SPOTIFY_TRACKS_ID_ATOM = atom({
    key : 'SPOTIFY TRACKS ID',
    default : undefined
})

export const MY_PLAY_LIST_ID_ATOM = atom({
    key : 'MY PLAY LIST ID',
    default : '33gqi6xuZrpWLxHHW1pxyf'
})

