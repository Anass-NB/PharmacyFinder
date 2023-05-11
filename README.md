# PharmacyFinder
>This is a mobile application designed to help users find the nearest pharmacies to their current location. The app uses the user's device location to fetch a list of pharmacies within a certain radius and sorts them by distance. The user can then view the details of each pharmacy, such as name, address, and phone number.
>The app also allows users to report whether a pharmacy is open or closed, providing other users with up-to-date information on the availability of the pharmacy. Users can also search for specific pharmacies by name, making it easier to find the one they need.

>Overall, this app aims to help users quickly and easily locate nearby pharmacies and make informed decisions about where to go for their healthcare needs.

<img src='https://user-images.githubusercontent.com/110456240/234850504-8f6461c8-25a1-4948-b851-ac77e50b1270.jpeg' height="30%" width="30%" />


<img src='https://user-images.githubusercontent.com/110456240/234850755-ba5a5771-9b42-4ab0-80fe-a3b140987056.jpeg' height="30%" width="30%" />


## Installation

```sh
https://github.com/Anass-NB/PharmacyApp.git
cd PharmacyApp
```

## Starting with the web project : (Laravel Application)
1. Copy .env.example file to .env file
    ```sh
    cp .env.example .env
    ```
1. Create database `pharmacy_api` (you can change database name)


1. Go to `.env` file 
    - set database credentials (`DB_DATABASE=pharmacy_api`, `DB_USERNAME=root`, `DB_PASSWORD=`)
    > Make sure to follow your database username and password

1. Install PHP dependencies 
    ```sh
    composer install
    ```

1. Generate key 
    ```sh
    php artisan key:generate
    ```

1. install front-end dependencies
    ```sh
    npm install && npm run build
    ```

1. Run migration
    ```sh
    php artisan migrate
    ```

### Run the web app
1. Run migration
   ```sh
    php artisan serv
    ```

## Mobile Application

1. change your directory to the mobile directory `cd pharmacyMobile`
1. set the ip address of your machine if you are working with local server 
    ```sh
     .env
    ```
    in .env file set the ip address of your server(in your case set ip address of your machine)
2. Run `npm install` in the folder, this will install all npm required packages.
3. To Run the app `npm run start`




