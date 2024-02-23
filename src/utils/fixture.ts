interface TypeRef {
    kind: string;
    name?: string | null;
    ofType?: TypeRef | null;
  }
  
  interface InputValue {
    name: string;
    description: string | null;
    type: TypeRef;
    defaultValue: string | null;
  }
  
  interface Field {
    name: string;
    description: string | null;
    args: InputValue[];
    type: TypeRef;
    isDeprecated: boolean;
    deprecationReason: string | null;
  }
  
  interface GraphQLType {
    kind: string;
    name: string;
    description?: string | null;
    fields?: Field[] | null;
    inputFields?: InputValue[] | null;
    interfaces?: GraphQLType[] | null;
    enumValues?: any[] | null;
    possibleTypes?: any[] | null;
    ofType?: TypeRef | null;
  }
  
  interface Schema {
    queryType: { name: string };
    mutationType: null;
    subscriptionType: null;
    types: GraphQLType[];
    directives: any[];
  }
  
  interface SchemaFixture {
    data: {
      __schema: Schema;
    };
  }


export const SCHEMA_FIXTURE: SchemaFixture = {
    "data": {
      "__schema": {
        "queryType": {
          "name": "Root"
        },
        "mutationType": null,
        "subscriptionType": null,
        "types": [
          {
            "kind": "OBJECT",
            "name": "Root",
            "description": null,
            "fields": [
              {
                "name": "allFilms",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "FilmsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "film",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "filmID",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "allPeople",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PeopleConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "person",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "personID",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "allPlanets",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PlanetsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "planet",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "planetID",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Planet",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "allSpecies",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "SpeciesConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "species",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "speciesID",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Species",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "allStarships",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "StarshipsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starship",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "starshipID",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Starship",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "allVehicles",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "VehiclesConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicle",
                "description": null,
                "args": [
                  {
                    "name": "id",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "vehicleID",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "ID",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "Vehicle",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "node",
                "description": "Fetches an object given its ID",
                "args": [
                  {
                    "name": "id",
                    "description": "The ID of an object",
                    "type": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "SCALAR",
                        "name": "ID",
                        "ofType": null
                      }
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "INTERFACE",
                  "name": "Node",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "String",
            "description": "The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Int",
            "description": "The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. ",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilmsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "films",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Film",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PageInfo",
            "description": "Information about pagination in a connection.",
            "fields": [
              {
                "name": "hasNextPage",
                "description": "When paginating forwards, are there more items?",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "hasPreviousPage",
                "description": "When paginating backwards, are there more items?",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "startCursor",
                "description": "When paginating backwards, the cursor to continue.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "endCursor",
                "description": "When paginating forwards, the cursor to continue.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Boolean",
            "description": "The `Boolean` scalar type represents `true` or `false`.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Film",
            "description": "A single film.",
            "fields": [
              {
                "name": "title",
                "description": "The title of this film.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "episodeID",
                "description": "The episode number of this film.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "openingCrawl",
                "description": "The opening paragraphs at the beginning of this film.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "director",
                "description": "The name of the director of this film.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "producers",
                "description": "The name(s) of the producer(s) of this film.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "releaseDate",
                "description": "The ISO 8601 date format of film release at original creator country.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "speciesConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "FilmSpeciesConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starshipConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "FilmStarshipsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicleConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "FilmVehiclesConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "characterConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "FilmCharactersConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "planetConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "FilmPlanetsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "created",
                "description": "The ISO 8601 date format of the time that this resource was created.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edited",
                "description": "The ISO 8601 date format of the time that this resource was edited.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": "The ID of an object",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [
              {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            ],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "INTERFACE",
            "name": "Node",
            "description": "An object with an ID",
            "fields": [
              {
                "name": "id",
                "description": "The id of the object.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": [
              {
                "kind": "OBJECT",
                "name": "Planet",
                "ofType": null
              },
              {
                "kind": "OBJECT",
                "name": "Species",
                "ofType": null
              },
              {
                "kind": "OBJECT",
                "name": "Starship",
                "ofType": null
              },
              {
                "kind": "OBJECT",
                "name": "Vehicle",
                "ofType": null
              },
              {
                "kind": "OBJECT",
                "name": "Person",
                "ofType": null
              },
              {
                "kind": "OBJECT",
                "name": "Film",
                "ofType": null
              }
            ]
          },
          {
            "kind": "OBJECT",
            "name": "Planet",
            "description": "A large mass, planet or planetoid in the Star Wars Universe, at the time of\n0 ABY.",
            "fields": [
              {
                "name": "name",
                "description": "The name of this planet.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "diameter",
                "description": "The diameter of this planet in kilometers.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "rotationPeriod",
                "description": "The number of standard hours it takes for this planet to complete a single\nrotation on its axis.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "orbitalPeriod",
                "description": "The number of standard days it takes for this planet to complete a single orbit\nof its local star.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "gravity",
                "description": "A number denoting the gravity of this planet, where \"1\" is normal or 1 standard\nG. \"2\" is twice or 2 standard Gs. \"0.5\" is half or 0.5 standard Gs.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "population",
                "description": "The average population of sentient beings inhabiting this planet.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "climates",
                "description": "The climates of this planet.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "terrains",
                "description": "The terrains of this planet.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "surfaceWater",
                "description": "The percentage of the planet surface that is naturally occuring water or bodies\nof water.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "residentConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PlanetResidentsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "filmConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PlanetFilmsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "created",
                "description": "The ISO 8601 date format of the time that this resource was created.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edited",
                "description": "The ISO 8601 date format of the time that this resource was edited.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": "The ID of an object",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [
              {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            ],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "Float",
            "description": "The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). ",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PlanetResidentsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PlanetResidentsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "residents",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PlanetResidentsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Person",
            "description": "An individual person or character within the Star Wars universe.",
            "fields": [
              {
                "name": "name",
                "description": "The name of this person.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "birthYear",
                "description": "The birth year of the person, using the in-universe standard of BBY or ABY -\nBefore the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is\na battle that occurs at the end of Star Wars episode IV: A New Hope.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "eyeColor",
                "description": "The eye color of this person. Will be \"unknown\" if not known or \"n/a\" if the\nperson does not have an eye.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "gender",
                "description": "The gender of this person. Either \"Male\", \"Female\" or \"unknown\",\n\"n/a\" if the person does not have a gender.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "hairColor",
                "description": "The hair color of this person. Will be \"unknown\" if not known or \"n/a\" if the\nperson does not have hair.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "height",
                "description": "The height of the person in centimeters.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "mass",
                "description": "The mass of the person in kilograms.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "skinColor",
                "description": "The skin color of this person.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "homeworld",
                "description": "A planet that this person was born on or inhabits.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Planet",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "filmConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PersonFilmsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "species",
                "description": "The species that this person belongs to, or null if unknown.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Species",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starshipConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PersonStarshipsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicleConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "PersonVehiclesConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "created",
                "description": "The ISO 8601 date format of the time that this resource was created.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edited",
                "description": "The ISO 8601 date format of the time that this resource was edited.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": "The ID of an object",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [
              {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            ],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PersonFilmsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PersonFilmsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "films",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Film",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PersonFilmsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Species",
            "description": "A type of person or character within the Star Wars Universe.",
            "fields": [
              {
                "name": "name",
                "description": "The name of this species.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "classification",
                "description": "The classification of this species, such as \"mammal\" or \"reptile\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "designation",
                "description": "The designation of this species, such as \"sentient\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "averageHeight",
                "description": "The average height of this species in centimeters.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "averageLifespan",
                "description": "The average lifespan of this species in years.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "eyeColors",
                "description": "Common eye colors for this species, null if this species does not typically\nhave eyes.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "hairColors",
                "description": "Common hair colors for this species, null if this species does not typically\nhave hair.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "skinColors",
                "description": "Common skin colors for this species, null if this species does not typically\nhave skin.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "language",
                "description": "The language commonly spoken by this species.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "homeworld",
                "description": "A planet that this species originates from.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Planet",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "personConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "SpeciesPeopleConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "filmConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "SpeciesFilmsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "created",
                "description": "The ISO 8601 date format of the time that this resource was created.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edited",
                "description": "The ISO 8601 date format of the time that this resource was edited.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": "The ID of an object",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [
              {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            ],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "SpeciesPeopleConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SpeciesPeopleEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "people",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "SpeciesPeopleEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "SpeciesFilmsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SpeciesFilmsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "films",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Film",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "SpeciesFilmsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "SCALAR",
            "name": "ID",
            "description": "The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `\"4\"`) or integer (such as `4`) input value will be accepted as an ID.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PersonStarshipsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PersonStarshipsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starships",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Starship",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PersonStarshipsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Starship",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Starship",
            "description": "A single transport craft that has hyperdrive capability.",
            "fields": [
              {
                "name": "name",
                "description": "The name of this starship. The common name, such as \"Death Star\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "model",
                "description": "The model or official name of this starship. Such as \"T-65 X-wing\" or \"DS-1\nOrbital Battle Station\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starshipClass",
                "description": "The class of this starship, such as \"Starfighter\" or \"Deep Space Mobile\nBattlestation\"",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "manufacturers",
                "description": "The manufacturers of this starship.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "costInCredits",
                "description": "The cost of this starship new, in galactic credits.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "length",
                "description": "The length of this starship in meters.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "crew",
                "description": "The number of personnel needed to run or pilot this starship.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "passengers",
                "description": "The number of non-essential people this starship can transport.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "maxAtmospheringSpeed",
                "description": "The maximum speed of this starship in atmosphere. null if this starship is\nincapable of atmosphering flight.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "hyperdriveRating",
                "description": "The class of this starships hyperdrive.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "MGLT",
                "description": "The Maximum number of Megalights this starship can travel in a standard hour.\nA \"Megalight\" is a standard unit of distance and has never been defined before\nwithin the Star Wars universe. This figure is only really useful for measuring\nthe difference in speed of starships. We can assume it is similar to AU, the\ndistance between our Sun (Sol) and Earth.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cargoCapacity",
                "description": "The maximum number of kilograms that this starship can transport.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "consumables",
                "description": "The maximum length of time that this starship can provide consumables for its\nentire crew without having to resupply.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "pilotConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "StarshipPilotsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "filmConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "StarshipFilmsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "created",
                "description": "The ISO 8601 date format of the time that this resource was created.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edited",
                "description": "The ISO 8601 date format of the time that this resource was edited.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": "The ID of an object",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [
              {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            ],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "StarshipPilotsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StarshipPilotsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "pilots",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "StarshipPilotsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "StarshipFilmsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StarshipFilmsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "films",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Film",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "StarshipFilmsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PersonVehiclesConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PersonVehiclesEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicles",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Vehicle",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PersonVehiclesEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Vehicle",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "Vehicle",
            "description": "A single transport craft that does not have hyperdrive capability",
            "fields": [
              {
                "name": "name",
                "description": "The name of this vehicle. The common name, such as \"Sand Crawler\" or \"Speeder\nbike\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "model",
                "description": "The model or official name of this vehicle. Such as \"All-Terrain Attack\nTransport\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicleClass",
                "description": "The class of this vehicle, such as \"Wheeled\" or \"Repulsorcraft\".",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "manufacturers",
                "description": "The manufacturers of this vehicle.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "costInCredits",
                "description": "The cost of this vehicle new, in Galactic Credits.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "length",
                "description": "The length of this vehicle in meters.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Float",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "crew",
                "description": "The number of personnel needed to run or pilot this vehicle.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "passengers",
                "description": "The number of non-essential people this vehicle can transport.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "maxAtmospheringSpeed",
                "description": "The maximum speed of this vehicle in atmosphere.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cargoCapacity",
                "description": "The maximum number of kilograms that this vehicle can transport.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "consumables",
                "description": "The maximum length of time that this vehicle can provide consumables for its\nentire crew without having to resupply.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "pilotConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "VehiclePilotsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "filmConnection",
                "description": null,
                "args": [
                  {
                    "name": "after",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "first",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "before",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "String",
                      "ofType": null
                    },
                    "defaultValue": null
                  },
                  {
                    "name": "last",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    },
                    "defaultValue": null
                  }
                ],
                "type": {
                  "kind": "OBJECT",
                  "name": "VehicleFilmsConnection",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "created",
                "description": "The ISO 8601 date format of the time that this resource was created.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edited",
                "description": "The ISO 8601 date format of the time that this resource was edited.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "id",
                "description": "The ID of an object",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "ID",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [
              {
                "kind": "INTERFACE",
                "name": "Node",
                "ofType": null
              }
            ],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "VehiclePilotsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "VehiclePilotsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "pilots",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "VehiclePilotsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "VehicleFilmsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "VehicleFilmsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "films",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Film",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "VehicleFilmsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PlanetFilmsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PlanetFilmsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "films",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Film",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PlanetFilmsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Film",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmSpeciesConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilmSpeciesEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "species",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Species",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmSpeciesEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Species",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmStarshipsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilmStarshipsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starships",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Starship",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmStarshipsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Starship",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmVehiclesConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilmVehiclesEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicles",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Vehicle",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmVehiclesEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Vehicle",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmCharactersConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilmCharactersEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "characters",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmCharactersEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmPlanetsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "FilmPlanetsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "planets",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Planet",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "FilmPlanetsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Planet",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PeopleConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PeopleEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "people",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Person",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PeopleEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Person",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PlanetsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PlanetsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "planets",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Planet",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "PlanetsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Planet",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "SpeciesConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "SpeciesEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "species",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Species",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "SpeciesEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Species",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "StarshipsConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "StarshipsEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "starships",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Starship",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "StarshipsEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Starship",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "VehiclesConnection",
            "description": "A connection to a list of items.",
            "fields": [
              {
                "name": "pageInfo",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PageInfo",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "edges",
                "description": "Information to aid in pagination.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "VehiclesEdge",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "totalCount",
                "description": "A count of the total number of objects in this connection, ignoring pagination.\nThis allows a client to fetch the first five objects by passing \"5\" as the\nargument to \"first\", then fetch the total count so it could display \"5 of 83\",\nfor example.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "vehicles",
                "description": "A list of all of the objects returned in the connection. This is a convenience\nfield provided for quickly exploring the API; rather than querying for\n\"{ edges { node } }\" when no edge data is needed, this field can be be used\ninstead. Note that when clients like Relay need to fetch the \"cursor\" field on\nthe edge to enable efficient pagination, this shortcut cannot be used, and the\nfull \"{ edges { node } }\" version should be used instead.",
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Vehicle",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "VehiclesEdge",
            "description": "An edge in a connection.",
            "fields": [
              {
                "name": "node",
                "description": "The item at the end of the edge",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "Vehicle",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "cursor",
                "description": "A cursor for use in pagination",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Schema",
            "description": "A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.",
            "fields": [
              {
                "name": "types",
                "description": "A list of all types supported by this server.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__Type"
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "queryType",
                "description": "The type that query operations will be rooted at.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "mutationType",
                "description": "If this server supports mutation, the type that mutation operations will be rooted at.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "subscriptionType",
                "description": "If this server support subscription, the type that subscription operations will be rooted at.",
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "directives",
                "description": "A list of all directives supported by this server.",
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__Directive"
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Type",
            "description": "The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.",
            "fields": [
              {
                "name": "kind",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "__TypeKind",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "fields",
                "description": null,
                "args": [
                  {
                    "name": "includeDeprecated",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                    },
                    "defaultValue": "false"
                  }
                ],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Field",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "interfaces",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "possibleTypes",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__Type",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "enumValues",
                "description": null,
                "args": [
                  {
                    "name": "includeDeprecated",
                    "description": null,
                    "type": {
                      "kind": "SCALAR",
                      "name": "Boolean",
                      "ofType": null
                    },
                    "defaultValue": "false"
                  }
                ],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__EnumValue",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "inputFields",
                "description": null,
                "args": [],
                "type": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "__InputValue",
                      "ofType": null
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ofType",
                "description": null,
                "args": [],
                "type": {
                  "kind": "OBJECT",
                  "name": "__Type",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "ENUM",
            "name": "__TypeKind",
            "description": "An enum describing what kind of type a given `__Type` is.",
            "fields": null,
            "inputFields": null,
            "interfaces": null,
            "enumValues": [
              {
                "name": "SCALAR",
                "description": "Indicates this type is a scalar.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "OBJECT",
                "description": "Indicates this type is an object. `fields` and `interfaces` are valid fields.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INTERFACE",
                "description": "Indicates this type is an interface. `fields` and `possibleTypes` are valid fields.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "UNION",
                "description": "Indicates this type is a union. `possibleTypes` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "ENUM",
                "description": "Indicates this type is an enum. `enumValues` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "INPUT_OBJECT",
                "description": "Indicates this type is an input object. `inputFields` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "LIST",
                "description": "Indicates this type is a list. `ofType` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "NON_NULL",
                "description": "Indicates this type is a non-null. `ofType` is a valid field.",
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Field",
            "description": "Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "args",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__InputValue"
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "type",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "isDeprecated",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deprecationReason",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__InputValue",
            "description": "Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "type",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "__Type",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "defaultValue",
                "description": "A GraphQL-formatted string representing the default value for this input value.",
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__EnumValue",
            "description": "One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "isDeprecated",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "deprecationReason",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          },
          {
            "kind": "OBJECT",
            "name": "__Directive",
            "description": "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL’s execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
            "fields": [
              {
                "name": "name",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "description",
                "description": null,
                "args": [],
                "type": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "args",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "OBJECT",
                        "name": "__InputValue"
                      }
                    }
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "onOperation",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "onFragment",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              },
              {
                "name": "onField",
                "description": null,
                "args": [],
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "isDeprecated": false,
                "deprecationReason": null
              }
            ],
            "inputFields": null,
            "interfaces": [],
            "enumValues": null,
            "possibleTypes": null
          }
        ],
        "directives": [
          {
            "name": "include",
            "description": "Directs the executor to include this field or fragment only when the `if` argument is true.",
            "args": [
              {
                "name": "if",
                "description": "Included when true.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "onOperation": false,
            "onFragment": true,
            "onField": true
          },
          {
            "name": "skip",
            "description": "Directs the executor to skip this field or fragment when the `if` argument is true.",
            "args": [
              {
                "name": "if",
                "description": "Skipped when true.",
                "type": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                },
                "defaultValue": null
              }
            ],
            "onOperation": false,
            "onFragment": true,
            "onField": true
          }
        ]
      }
    }
  }
  