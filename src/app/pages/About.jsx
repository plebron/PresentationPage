import React from 'react'

// Import context and provider
import { MyContext } from '../../context'

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en'
import translationFR from '../../translations/fr'

// Import CSS
import '../../app/styles/grid.css'
import '../../app/styles/components/links.css'
import '../../app/styles/pages/about.css'

const About = () => {
  return (
	<MyContext.Consumer>
	  {(context) => (
		<div className="page page-absolute page-about">
		  <div className="container">
			{
			  (() => {
				if (context.state.language === 'es') {
				  return <div>
					<h1 className="page-heading-h2">{translationES.about.h1}</h1>
					<p className="page-text">{translationES.about.p}</p>
				  </div>
				} else if (context.state.language === 'en') {
					return <div>
						<h1 className="page-heading-h2">{translationEN.about.h1}</h1>
						<p className="page-text">{translationEN.about.p}</p>
					</div>
				  
				} else {
					return <div>
						<h1 className="page-heading-h2">{translationFR.about.h1}</h1>
						<p className="page-text">{translationFR.about.p}</p>
					</div>
				}
			  })()
			}

			<div className="about__contact">
			  <div className="row">
				<div className="col-md-6 col-lg-4">
				  <h2 className="page-heading-h4">
					<span>E-mail:</span>

					<br/>

					<a className="link" href="mailto:email@jakestuart.com">lebronpedro03@gmail.com</a>
				  </h2>
				</div>

				<div className="col-md-6 col-lg-4">
				  <h2 className="page-heading-h4">
					<span>Twitter:</span>

					<br/>

					<a className="link" href="">@pdro_lebron</a>
				  </h2>
				</div>

				<div className="col-md-6 col-lg-4">
				  <h2 className="page-heading-h4">
					<span>Dribbble:</span>

					<br/>

					<a className="link" href="">pedro_lebron</a>
				  </h2>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  )}
	</MyContext.Consumer>
  )
}

export default About