import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: ['/admin((?!_next|api).*)'], // Only protect /admin and its subroutes
};
