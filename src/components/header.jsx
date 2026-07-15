import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignIn,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  const [search, setSearch] = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch({});
    }
  };

  return (
    <>
      <nav className="py-5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src="/logo.png"
            className="h-20 w-auto object-contain"
            alt="CareerConnect Logo"
          />
        </Link>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-6">
          <SignedOut>
            <Button
              variant="outline"
              className="rounded-full px-6 font-semibold"
              onClick={() => setShowSignIn(true)}
            >
              Sign In
            </Button>
          </SignedOut>

          <SignedIn>
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button
                  variant="destructive"
                  className="rounded-full px-6"
                >
                  <PenBox size={18} className="mr-2" />
                  Post New Job
                </Button>
              </Link>
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Applications"
                  labelIcon={<BriefcaseBusiness size={15} />}
                  href="/my-jobs"
                />

                <UserButton.Link
                  label="Bookmarked Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-jobs"
                />

                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {/* Sign In Modal */}
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;