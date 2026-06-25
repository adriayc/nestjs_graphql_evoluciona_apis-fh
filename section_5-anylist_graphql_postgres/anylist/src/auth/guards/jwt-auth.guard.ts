import { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

// Custom AuthGuard with GraphQL
export class JwtAuthGuard extends AuthGuard('jwt') {
  // Override method
  getRequest(context: ExecutionContext) {
    // Convert the generic execution context to a GraphQL execution context
    const ctx = GqlExecutionContext.create(context);
    // Extract the standard HTTP request object
    const request = ctx.getContext().req;

    return request;
  }
}
