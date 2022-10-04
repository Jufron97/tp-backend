
import auth0_config from "../../auth0_config.json"

export const environment = {
  production: false,
  dev : {
    domain : auth0_config.domain,
    clientId: auth0_config.clientId,
    redirectUri: window.location.origin,   
    audience : auth0_config.audience,
    ApiClientSecret: auth0_config.ApiClientSecret,
    ApiClientId: auth0_config.ApiClientId
  }
};