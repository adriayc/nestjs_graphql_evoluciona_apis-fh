import { registerEnumType } from '@nestjs/graphql';

export enum ValidRoles {
  admin = 'admin',
  user = 'user',
  superUser = 'superUser',
}

// Resgiste enum type on GraphQL
registerEnumType(ValidRoles, {
  name: 'ValidRoles',
  description: `Roles permitidos [${ValidRoles.admin}, ${ValidRoles.user}, ${ValidRoles.superUser}] para la enumeración`,
});
