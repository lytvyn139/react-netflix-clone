# Netflix clone

[Live here](https://nflx.netlify.app/) for an **unknown period** of time.
Full stack ReactJS web application, clone of world's leading streaming entertainment service Netflix.

-   Allows you to watch movies and television shows whenever you want, on any device.
-   Used Firebase, for secure access to the database directly from client-side code.

## Stack used:

-   ReactJS
-   React Styled Components
-   Firebase (Firestore & Auth)
-   Netlify

## Installation

```cs
git clone https://github.com/lytvyn139/react-netflix-clone
```

To run it you must have Firebase account.
Go to `https://console.firebase.google.com/u/0/` and create new project. Create local file: `/src/lib/firebase.prod.js` and fill in config object with your data.

```cs
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

const config = {
    apiKey: "YOUR KEY",
    authDomain: "YOUR DOMAIN",
    databaseURL: "URL",
    projectId: "ID",
    storageBucket: "storage",
    messagingSenderId: "XXX",
    appId: "XXX"
};
const firebase = Firebase.initializeApp(config);
seedDatabase(firebase);
export { firebase };
```

after the run you might want to comment that line `seedDatabase(firebase);` so it will not put same info twice on refresh.

## Usage

Finally download the dependencies and run the project

```cs
npm i
npm run
```

## Author

IURII LYTVYN

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Screenshot

![](src/img/demo.png)
