import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'minireset.css'
import '../../styles.css'

import { Footer, Header } from 'src/components'
import { useIsVisible } from 'src/hooks'
import Waves from './Waves'
import { Below, Main } from './styles'

const Layout = ({ belowTheWaves, children }) => {
	const [footerRef, footerIsVisible] = useIsVisible()

	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQuery {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={data => (
				<>
					<Header
						footerIsVisible={footerIsVisible}
						siteTitle={data.site.siteMetadata.title}
					/>
					<div className="background transition">
						<Main>{children}</Main>
					</div>
					<Waves />
					<div ref={footerRef} />
					{belowTheWaves ? <Below>{belowTheWaves}</Below> : null}
					<Footer />
				</>
			)}
		/>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
