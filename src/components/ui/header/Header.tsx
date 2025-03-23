
import { ModeToggle } from "@/components/ui/theme/toggle";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import CartLink from "../cart/cart-link";

export default function Header() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full flex justify-between p-4 border-b backdrop-blur">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Catalogue
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/cart" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <CartLink />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ModeToggle />
    </div>
  );
}
