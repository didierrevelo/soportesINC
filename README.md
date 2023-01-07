<h1 align="center">SoportesINC</h1>

# CHALLENGE BACKEND - NodeJs-TypeScript-PostGresql-Express🚀

## Objective

A service order system needs to be built for a company that provides maintenance and installation services for TV brackets. Customers can make a service request by generating a ticket through the system, to which a token must be generated and a technician must be randomly assigned to attend the request.

Finally, technicians can see the assigned orders and it is necessary to have an endpoint that returns the technician's services in JSON format with the list.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install the project.

```
git clone https://github.com/didierrevelo/soportesINC.git
cd soportesINC
npm install
npm run start
```

The challenge documentation is available using swagger through the endpoint:

- /documentation

### Route

```http://localhost:{puerto}/soportesinc```

## Swagger Documentation

```http://localhost:3000/documentation/```

## .env configuration

```bash
# working port of the express
PORT=
# NoSQL database connection path
MONGODB_URI=
# public file connection path 
PUBLIC_URL=
# secret key of JSON WEB TOKEN 
JWT_SECRET=
# information required for the connection with the SQL database
NAME_DB=
USER_NAME=
PASSWORD=
HOST=
DIALECT=
```
