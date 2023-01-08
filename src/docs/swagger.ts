import swaggerJsdoc from 'swagger-jsdoc'

const swaggerDefinition = {
  openapi: '3.0.3',
  info: {
    title: 'API Documentation soportesINC',
    version: '1.0.0',
    description: 'api for maintenance services management, installation and repair of tv stands.'
  },
  servers: [
    {
      url: 'http://localhost:3001/soportesinc'
    }
  ],
  paths: {
    '/auth/registerTech': {
      post: {
        tags: [
          'auth'
        ],
        summary: 'Register new technician',
        description: 'create new Tecnician object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/registerTech'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'Register new technician ',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/registerTech'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/auth/registerUser': {
      post: {
        tags: [
          'auth'
        ],
        summary: 'Register new user',
        description: 'create new user object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/registerUser'
              }
            }
          }
        },
        responses: {
          201: {
            description: 'created user object ',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/registerUser'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/auth/loginTech': {
      post: {
        tags: [
          'auth'
        ],
        summary: 'Login a technician',
        description: 'This route is used to start the session and returns an object with the start information and the token. this session token should be used to authenticate the session from the rest of the application.',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/loginTech'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'logged technician object, includes login token, user id and role. ',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/loginTech'
                }
              }
            }
          },
          403: {
            description: 'USER_NOT_FOUND'
          }
        }
      }
    },
    '/auth/loginUser': {
      post: {
        tags: [
          'auth'
        ],
        summary: 'Login a User',
        description: 'This route is used to start the session and returns an object with the start information and the token. this session token should be used to authenticate the session from the rest of the application.',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/loginUser'
              }
            }
          }
        },
        responses: {
          200: {
            description: 'logged User object, includes login token, user id and role. ',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/loginUser'
                }
              }
            }
          },
          403: {
            description: 'USER_NOT_FOUND'
          }
        }
      }
    },
    '/item': {
      get: {
        tags: [
          'item'
        ],
        summary: 'get all items',
        description: 'this route is used to get all items, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          200: {
            description: 'return the object of items. '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/item/{id}': {
      get: {
        tags: [
          'item'
        ],
        summary: 'get a item by id ',
        description: 'this route is used to get all items, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of item to return',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of item '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/item?order={parameter}': {
      get: {
        tags: [
          'item'
        ],
        summary: 'get all items',
        description: 'this route is used to get all items, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'parameter',
            in: 'path',
            description: 'use the word ASC or DESC in parameter',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of item '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/item/create': {
      post: {
        tags: [
          'item'
        ],
        summary: 'create item',
        description: 'create new item object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/items'
              }
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          201: {
            description: 'create new item object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/items'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/item/put/{id}': {
      put: {
        tags: [
          'item'
        ],
        summary: 'Update item',
        description: 'update item object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/items'
              }
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the item you want to update',
            required: true
          }
        ],
        responses: {
          201: {
            description: 'update item object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/items'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/item/delete/{id}': {
      delete: {
        tags: [
          'item'
        ],
        summary: 'delete item',
        description: 'Delete item object',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the item you want to delete',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'Item with id 1 was deleted'
          },
          500: {
            description: 'ERROR_DELETE_ITEM'
          }
        }
      }
    },
    '/services': {
      get: {
        tags: [
          'services'
        ],
        summary: 'get all services',
        description: 'this route is used to get all services, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          200: {
            description: 'return the object of services. '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/services/{id}': {
      get: {
        tags: [
          'services'
        ],
        summary: 'get a item by id ',
        description: 'this route is used to get all services, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of services to return',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of services '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/services?order={parameter}': {
      get: {
        tags: [
          'services'
        ],
        summary: 'get all services',
        description: 'this route is used to get all services, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'parameter',
            in: 'path',
            description: 'use the word ASC or DESC in parameter',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of service '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/services/create': {
      post: {
        tags: [
          'services'
        ],
        summary: 'create service',
        description: 'create new service object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/services'
              }
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          201: {
            description: 'create new service object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/services'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/services/put/{id}': {
      put: {
        tags: [
          'services'
        ],
        summary: 'Update service',
        description: 'update service object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/services'
              }
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the item you want to update',
            required: true
          }
        ],
        responses: {
          201: {
            description: 'update service object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/services'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/services/delete/{id}': {
      delete: {
        tags: [
          'services'
        ],
        summary: 'delete services',
        description: 'Delete services object',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the services you want to delete',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'Item with id 1 was deleted'
          },
          500: {
            description: 'ERROR_DELETE_SERVICE'
          }
        }
      }
    },
    '/user': {
      get: {
        tags: [
          'user'
        ],
        summary: 'get all user',
        description: 'this route is used to get all user, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          200: {
            description: 'return the object of user. '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/user/{id}': {
      get: {
        tags: [
          'user'
        ],
        summary: 'get a item by id ',
        description: 'this route is used to get all user, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of user to return',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of user '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/user?order={parameter}': {
      get: {
        tags: [
          'user'
        ],
        summary: 'get all user',
        description: 'this route is used to get all user, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'parameter',
            in: 'path',
            description: 'use the word ASC or DESC in parameter',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of service '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/user/put/{id}': {
      put: {
        tags: [
          'user'
        ],
        summary: 'Update service',
        description: 'update service object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/registerUser'
              }
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the item you want to update',
            required: true
          }
        ],
        responses: {
          201: {
            description: 'update service object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/registerUser'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/user/delete/{id}': {
      delete: {
        tags: [
          'user'
        ],
        summary: 'delete user',
        description: 'Delete user object',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the user you want to delete',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'Item with id 1 was deleted'
          },
          500: {
            description: 'ERROR_DELETE_USER'
          }
        }
      }
    },
    '/technicians': {
      get: {
        tags: [
          'technicians'
        ],
        summary: 'get all technicians',
        description: 'this route is used to get all technicians, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        responses: {
          200: {
            description: 'return the object of technicians. '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/technicians/{id}': {
      get: {
        tags: [
          'technicians'
        ],
        summary: 'get a item by id ',
        description: 'this route is used to get all technicians, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of technicians to return',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of technicians '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/technicians?order={parameter}': {
      get: {
        tags: [
          'technicians'
        ],
        summary: 'get all technicians',
        description: 'this route is used to get all technicians, you need to be logged in and use the session token in Authorize.',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'parameter',
            in: 'path',
            description: 'use the word ASC or DESC in parameter',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'return the object of technician '
          },
          401: {
            description: 'Unauthorized'
          }
        }
      }
    },
    '/technicians/put/{id}': {
      put: {
        tags: [
          'technicians'
        ],
        summary: 'Update technician',
        description: 'update technician object',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/registerTech'
              }
            }
          }
        },
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the item you want to update',
            required: true
          }
        ],
        responses: {
          201: {
            description: 'update technician object',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/registerTech'
                }
              }
            }
          },
          403: {
            description: 'HANDLE_VALIDATION_ERROR'
          }
        }
      }
    },
    '/technicians/delete/{id}': {
      delete: {
        tags: [
          'technicians'
        ],
        summary: 'delete technicians',
        description: 'Delete technicians object',
        security: [
          {
            bearerAuth: []
          }
        ],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'enter the id of the technicians you want to delete',
            required: true
          }
        ],
        responses: {
          200: {
            description: 'Item with id 1 was deleted'
          },
          500: {
            description: 'ERROR_DELETE_TECHNICIAN'
          }
        }
      }
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    },
    schemas: {
      registerUser: {
        type: 'object',
        required: [
          'fullName',
          'documentNumber',
          'email',
          'cellPhone',
          'address',
          'password'
        ],
        properties: {
          fullName: {
            type: 'string'
          },
          documentNumber: {
            type: 'number'
          },
          email: {
            type: 'string'
          },
          cellPhone: {
            type: 'number'
          },
          address: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      registerTech: {
        type: 'object',
        required: [
          'fullName',
          'documentNumber',
          'email',
          'cellPhone',
          'address',
          'password'
        ],
        properties: {
          fullName: {
            type: 'string'
          },
          documentNumber: {
            type: 'number'
          },
          email: {
            type: 'string'
          },
          cellPhone: {
            type: 'number'
          },
          address: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      loginUser: {
        type: 'object',
        required: [
          'email',
          'password'
        ],
        properties: {
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      loginTech: {
        type: 'object',
        required: [
          'email',
          'password'
        ],
        properties: {
          email: {
            type: 'string'
          },
          password: {
            type: 'string'
          }
        }
      },
      items: {
        type: 'object',
        required: [
          'reference',
          'name',
          'amount',
          'description'
        ],
        properties: {
          reference: {
            type: 'string'
          },
          name: {
            type: 'string'
          },
          amount: {
            type: 'number'
          },
          description: {
            type: 'string'
          }
        }
      },
      services: {
        type: 'object',
        required: [
          'typeService',
          'visitDay',
          'done',
          'comments'
        ],
        properties: {
          typeService: {
            type: 'enum(instalacion, mantenimiento, reparacion)'
          },
          visitDay: {
            type: 'date(YYYY-MM-DD)'
          },
          done: {
            type: 'boolean'
          },
          comments: {
            type: 'string'
          }
        }
      }
    }
  }
}

const options = {
  swaggerDefinition,
  apis: []
}

const openApiConfig = swaggerJsdoc(options)

export { openApiConfig }
