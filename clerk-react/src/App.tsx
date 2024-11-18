import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { RootLayout, DashboardLayout } from './layouts';
import { IndexPage, ContactPage, SignInPage, SignUpPage, DashboardPage, InvoicesPage } from './routes';


export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}