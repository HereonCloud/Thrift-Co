import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"



const NavMenu = () => {
	const shopMenu = [{ title: "Men", href: "" }, { title: "Women", href: "" }, { title: "Teens", href: "" }, { title: "Kids", href: "" }]
	return (
		<nav className="w-full px-small py-small sm:px-medium md:px-large">
			<DesktopNavigation shopMenu={shopMenu} />
			<MobileNavigation shopMenu={shopMenu} />
		</nav>
	)
}


export default NavMenu