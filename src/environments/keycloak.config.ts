import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: 'http://localhost:8080',
  realm: 'myrealm',
  clientId: 'myclient'
};

export default keycloakConfig;