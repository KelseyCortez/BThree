# BThree ![](favicon.ico)

## About

* This app was developed in an effort to provide a way for people to feel secure in their ability to send an emergency message to a list of contacts in an emergency situation

* B3 is an abbreviation for the codename “Bravo, Bravo, Bravo” which is a signal sent over passenger ship radio to alert crew to a fire or other serious incident on board without alarming passengers. Our team thought this would be a great name for our app because we wanted our users to have security in knowing that no matter where they are they can keep those closest to them on alert without giving rise to a situation. We envisioned our app as kind of a standby for those situations between Immediate Danger and “just taking precaution”.

## Table of Contents

* [About](#about)
* [Installation](#installation)


## Installation

Fork/clone from [Github](https://github.com/JackSkiles/BThree).


```bash
npm install
npm run db:reset
npm run dev (from main folder)
npm start (from ./client)
```


## Usage

Creating an account from the opening screen creates a user account in the DB encrypting the user's password.The user needs to add 3 emergency contacts, a message to send their contacts, and a voice command phrase to trigger. The feed screen is for conversations with other users to discuss safe practices or places to keep clear of. The "Panic Button" is on the feed screen and it sends a text message with your location and preset message to your emergency contacts.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## Tech used

```bash
|   React/Redux	|   JavaScript	|
|	Express |	sequelze|
|   	Socket.io|   bcrypt	|
|   Twillio	|   Google Maps API	|
|   Bootstrap	|   Axios	|
|   CSS	|   HTML	|

```





## DEV Team

- [Kelsey Cortez](https://github.com/KelseyCortez)
- [David Foster](https://github.com/dlfosterii)
- [Parker Jackson](https://github.com/parkerjacks)
- [Zahria Shannon](https://github.com/zahriazoey)
- [Jack Skiles](https://github.com/JackSkiles)




## License
[MIT](https://choosealicense.com/licenses/mit/)