import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/nextjs';
import BlogAdmin from '../../components/admin/BlogAdmin';
import UserAdmin from '../../components/admin/UserAdmin';

export default function AdminPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <SignedOut>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <SignIn path="/admin" routing="path" />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Panel</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlogAdmin />
          <UserAdmin />
        </div>
      </SignedIn>
    </main>
  );
}
