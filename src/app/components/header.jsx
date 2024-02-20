import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import CSS
import '../styles/components/header.css'
import '../styles/components/links.css'

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en.json'
import translationFR from '../../translations/fr'

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container-fluid">
				<nav className="nav-wrapper">
					{this.props.context.state.isNavOpen && <div className="js-nav nav">
					<ul className="nav-list">
						<li>
						<Link className='link' to="/" onClick={this.props.context.toggleNav}>
							{
							(() => {
								if (this.props.context.state.language === 'es') {
									return translationES.nav.home
								} else if (this.props.context.state.language === 'en') {
									return translationEN.nav.home
								} else {
									return translationFR.nav.home		
								}
							})()
							}
						</Link>
						</li>

						<li>
						<Link className='link' to="/portfolio" onClick={this.props.context.toggleNav}>
						{
							(() => {
								if (this.props.context.state.language === 'es') {
									return translationES.nav.portfolio
								} else if (this.props.context.state.language === 'en') {
									return translationEN.nav.portfolio
								} else {
									return translationFR.nav.portfolio
								}
							})()
							}
						</Link>
						</li>

						<li>
						<Link className='link' to="/about" onClick={this.props.context.toggleNav}>
							{
							(() => {
								if (this.props.context.state.language === 'es') {
									return translationES.nav.about
								} else if (this.props.context.state.language === 'en') {
									return translationEN.nav.about
								} else {
									return translationFR.nav.about
								}
							})()
							}
						</Link>
						</li>

						<li className="nav-languages">
							<a
								className="link"
								onClick={this.props.context.changeLanguage}
								data-language="es"
							>
							ES
							</a>

							<span className="nav-divider">/</span>

							<a
								className="link"
								onClick={this.props.context.changeLanguage}
								data-language="en"
							>
							EN
							</a>

							<span className="nav-divider">/</span>

							<a
								className="link"
								onClick={this.props.context.changeLanguage}
								data-language="fr"
							>
								FR
							</a>
						</li>
					</ul>
					</div>}

					{<button className={this.props.context.state.isNavOpen ? 'nav-toggler nav-toggler--open' : 'nav-toggler'} type="button" aria-label="Toggle navigation" onClick={this.props.context.toggleNav}>
					<span />
					<span />
					<span />
					</button>}
				</nav>
				</div>
			</header>
		)
  }
}

export default Header