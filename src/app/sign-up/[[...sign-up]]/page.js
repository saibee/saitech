import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const hasClerk = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!hasClerk) {
    return (
      <div className="mx-auto max-w-md px-5 py-16 text-center">
        <h1 className="text-xl font-semibold">Clerk not configured</h1>
        <p className="text-sm text-muted-foreground mt-2">Add Clerk keys to .env.local. Meanwhile try the demo profile at /profile.</p>
      </div>
    );
  }
  return (
    <div className="min-h-[70vh] grid place-items-center px-5 py-10">
      <SignUp />
    </div>
  );
}
