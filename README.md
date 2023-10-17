# url-shortener
A url shortener backend (using Express and MongoDB)

## Getting Started
To start the project, we will clone it and create a .env file like the example (.env.example) with the port we want to assign and the database connection (MongoDB in this case)

## About the project
This project is the backend, which we can combine with a frontend to make it as interactive and real as possible. To be able to use the project, we will have 3 routes available (v1) where: 
* (GET) - we will indicate a shortened url and we will redirect if it exists
  
    - localhost:8080/api/v1/shortener/af02da0f

* (GET) - we will indicate a shortened url with the ending /statistics and it will indicate how many clicks has taken the indicated url

    - localhost:8080/api/v1/shortener/af02da0f/statistics

* (POST)- through the body we will indicate the url that we want to shorten and it will return the original and the shortened one (8 characters)

    - localhost:8080/api/v1/shortener

      {
        "url": "https://google.com/"
      }

### Validations and sanitizers

* The URL must exists (a fetch call is made to the url to check)
* If starts with http or https, it will be deleted  
* If ends with /, it will also be deleted