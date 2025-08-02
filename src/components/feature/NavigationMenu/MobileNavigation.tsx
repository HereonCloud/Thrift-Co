import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, ShoppingCart } from 'lucide-react';
import { Link } from "react-router";

interface MobileNavigationProps {
    shopMenu: { title: string, href: string }[]
}

const MobileNavigation = (props: MobileNavigationProps) => {
    return (
        <nav className="flex justify-between items-center py-[6px] md:hidden">
            <div className="flex items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger><Menu /></DropdownMenuTrigger>
                    <DropdownMenuContent className="ml-[6px]">
                        <DropdownMenuSub>
                            <DropdownMenuSubTrigger>Shop</DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="ml-[6px]">
                                {props.shopMenu.map((item, key) => (
                                    <DropdownMenuItem key={key}>
                                        <Link to={item.href}>{item.title}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuSubContent>
                        </DropdownMenuSub>
                        <DropdownMenuItem>On Sale</DropdownMenuItem>
                        <DropdownMenuItem>New Arrivals</DropdownMenuItem>
                        <DropdownMenuItem>Brands</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <span className=" min-w-[88px] font-bold">THRIFT-CO</span>
            </div>
            <Link to="/docs"><ShoppingCart width={24} height={24} /></Link>
        </nav>
    );
};

export default MobileNavigation;
