// NextAuth.js configuration for authentication
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // Add more providers as needed
  ],
  // Add role-based access control and callbacks as needed
};

export default NextAuth(authOptions);
