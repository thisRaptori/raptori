import React from 'react'

import { useIsMobile } from 'src/hooks'
import { MobileNav } from './styles'

const SubNav = ({ children, footerIsVisible }) => {
	const isMobile = useIsMobile()

	return isMobile ? (
		<MobileNav
			className="background transition"
			footerIsVisible={footerIsVisible}
		>
			{children}
		</MobileNav>
	) : (
		children
	)
}

export default SubNav
