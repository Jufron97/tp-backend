
import auth0_config from "../../auth0_config.json"

export const environment = {
  production: false,
  auth : {
    domain : auth0_config.domain,
    clientId: auth0_config.clientId,
    redirectUri: window.location.origin,   
    audience : auth0_config.audience,
  },
  dev: {
    serverUrl : auth0_config.audience,
  },
};