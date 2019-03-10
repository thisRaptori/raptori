import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'minireset.css'
import '../../styles.css'

import { Footer, Header } from 'src/components'
import Waves from './Waves'
import { Below, Main } from './styles'

const Layout = ({ belowTheWaves, children, content }) => (
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
					<Main>
						{children}
						{content}
					</Main>
				</div>
				<Waves />
				{belowTheWaves ? <Below>{belowTheWaves}</Below> : null}
				<Footer />
			</>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
