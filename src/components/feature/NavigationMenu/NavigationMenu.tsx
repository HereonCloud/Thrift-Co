import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"



const NavMenu = () => {
	const shopMenu = [{ title: "Men", href: "" }, { title: "Women", href: "" }, { title: "Teens", href: "" }, { title: "Kids", href: "" }]
	return (
		<nav className="w-full px-4 py-4 sm:px-8 md:px-16">
			<DesktopNavigation shopMenu={shopMenu} />
			<MobileNavigation shopMenu={shopMenu} />
		</nav>
	)
}


export default NavMenu