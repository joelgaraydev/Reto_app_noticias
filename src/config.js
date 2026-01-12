export const config = {
  newsApi: {
    API_KEY: import.meta.env.VITE_APP_NEWS_API_KEY,
    API_URL: 'https://newsapi.org/v2'
  },
  authARC: {
    API_URL: 'https://api-sandbox.elcomercio.pe/identity/public/v1'
  },
  firebaseConfig: {
    apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APP_FIREBASE_APPID
  }
}
