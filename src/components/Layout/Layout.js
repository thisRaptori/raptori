import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import 'minireset.css'
import '../../styles.css'

import { Footer, Header, WaveSection } from 'src/components'
import { useIsVisible, useWindowWidth } from 'src/hooks'
import { Below, Footer as FooterStyles, Main, Wrapper } from './styles'

const Layout = ({ belowTheWaves, children }) => {
	const [footerRef, footerIsVisible] = useIsVisible()
	const width = useWindowWidth()

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
					<Wrapper className="background transition">
						<Main>{children}</Main>
						<FooterStyles as="div" width={width}>
							<WaveSection topOnly>
								<div ref={footerRef} />
								{belowTheWaves ? (
									<Below>{belowTheWaves}</Below>
								) : null}
								<Footer />
							</WaveSection>
						</FooterStyles>
					</Wrapper>
				</>
			)}
		/>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
