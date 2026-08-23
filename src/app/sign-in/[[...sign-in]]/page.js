import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!hasClerk) {
    return (
      <div className="mx-auto max-w-md px-5 py-16 text-center">
        <h1 className="text-xl font-semibold">Clerk not configured</h1>
        <p className="text-sm text-muted-foreground mt-2">Add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to .env.local to enable auth. See https://dashboard.clerk.com/apps</p>
        <p className="text-sm mt-4">Demo profile still works at <a href="/profile" className="underline">/profile</a></p>
      </div>
    );
  }
  return (
    <div className="min-h-[70vh] grid place-items-center px-5 py-10">
      <SignIn />
    </div>
  );
}
