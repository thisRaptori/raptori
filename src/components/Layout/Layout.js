import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'minireset.css'
import '../../styles.css'

import { Footer, Header } from 'src/components'
import Waves from './Waves'
import { Main } from './styles'

const Layout = ({ children, belowTheWaves }) => (
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
				<Header siteTitle={data.site.siteMetadata.title} />
				<div className="background transition">
					<Main>{children}</Main>
				</div>
				<Waves />
				{belowTheWaves}
				<Footer />
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
