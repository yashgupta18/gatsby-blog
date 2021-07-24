import React from 'react'
import { Link } from 'gatsby'
//Components
import Menu from 'components/Menu'

//styles
import {Wrapper, Logo} from './Header.styles'
//Hooks
import { useConfigQuery } from 'hooks/useConfigQuery'
const Header = ({siteTitle=``}) => {
    const siteConfig=useConfigQuery()
    return (
		<Wrapper>
			<Menu items={siteConfig.menu} />
			<Link to="/">
				<Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
			</Link>
			<div>Theme Button</div>
		</Wrapper>
    )
}

export default Header
