import { FC } from "react";
import { LogOut, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import MyCartBtn from "./MyCartBtn";
import { useTheme } from "../../providers/theme-provider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/features/auth/authSlice";
import MyWishlistBtn from "./myWishBtn";
import { ModeToggle } from "../ui/mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
// import Profile from "../../pages/profile/Profile";
import { Button } from "../ui/button";
import Shop_FilterSheet from "../Shop/Shop_FilterSheet";
interface NavItem {
  label: string;
  href: string;
}
const navItems: NavItem[] = [
  { label: "Shop", href: "/shop" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const Navbar: FC = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const handleLogout = () => {
    dispatch(logout());
  };

  const isSystemDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const logoUrl =
    theme === "dark"
      ? "/logo.png"
      : theme === "light"
      ? "/logo-black.png"
      : isSystemDark
      ? "/logo.png"
      : "/logo-black.png";
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background h-[68px]">
      <section className="!py-0">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and company name */}
          <Link to={"/"} className="flex items-center gap-1">
            <img className="w-9 object-cover" src={logoUrl} alt="" />
            <span className="text-lg font-semibold">CycleWave</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            {user && user?.role === "ADMIN" ? (
              <Link
                to="/dashboard"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              ""
            )}
            {/* Cart Button */}
            <MyWishlistBtn />
            <MyCartBtn />

            {/* Authentication */}
            <ModeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-muted w-8 h-8 p-0"
                  >
                    <User className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-56">
                  <Link to="/profile">
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  {/* {user.role === 'user' &&  */}
                  <Link to="/my-orders">
                    <DropdownMenuItem className="cursor-pointer">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      <span>My Orders</span>
                    </DropdownMenuItem>
                  </Link>
                  {/* } */}
                  {user && user.role === "ADMIN" ? (
                    <Link to="/dashboard">
                      <DropdownMenuItem className="cursor-pointer">
                        <span>Dashboard</span>
                      </DropdownMenuItem>
                    </Link>
                  ) : (
                    ""
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer text-destructive focus:text-destructive"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
            {/* Theme toggle button */}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            {/* Cart Button for Mobile */}
            <MyWishlistBtn />
            <MyCartBtn />

            <ModeToggle />
            <Shop_FilterSheet />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
