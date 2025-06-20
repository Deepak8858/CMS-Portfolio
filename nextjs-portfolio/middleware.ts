import { withClerkMiddleware } from '@clerk/nextjs/server';

export default withClerkMiddleware();

export const config = {
  matcher: ['/admin((?!_next|api).*)'], // Only protect /admin and its subroutes
};
