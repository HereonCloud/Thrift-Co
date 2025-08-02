import { ShoppingCart } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router"

interface DesktopNavigationProps {
    shopMenu: { title: string, href: string }[]
}

const DesktopNavigation = (props: DesktopNavigationProps) => {
    return (
        <NavigationMenu viewport={false} className="justify-betwee md:flex hidden">
            <span className="py-[8px] px-[16px] min-w-[88px] font-bold">THRIFT-CO</span>
            <NavigationMenuList className="flex justify-between w-[100%]">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {props.shopMenu.map((item, key) => (<ListItem to={item.href} key={key} className="hover:bg-hover rounded-xs">{item.title}</ListItem>))}
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/docs">On Sale</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/docs">New Arrivals</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/docs">Brands</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <Link to="/docs" className="py-[8px] px-[16px]"><ShoppingCart width={24} height={24} /></Link>
            </NavigationMenuList>
        </NavigationMenu >
    );
};


const ListItem = ({
    title,
    children,
    to,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) => {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={to}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default DesktopNavigation;
