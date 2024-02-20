import React from 'react'

// Import context and provider
import { MyContext } from '../../context'

// Import translations
import translationES from '../../translations/es'
import translationEN from '../../translations/en'
import translationFR from '../../translations/fr'

const Home = () => {
  return (
	<MyContext.Consumer>
		{(context) => (
		  <div className="page page-absolute page-home">
			{
			  (() => {
				if (context.state.language === 'es') {
				  return <div className="page-header">
					<h1 className="page-heading-h1">{translationES.home.h1}</h1>
					<h2 className="page-heading-h2">{translationES.home.h2}</h2>
				  </div>
				} else if (context.state.language === 'fr') {
					return <div className="page-header">
						<h1 className="page-heading-h1">{translationEN.home.h1}</h1>
						<h2 className="page-heading-h2">{translationEN.home.h2}</h2>
					</div>
				  
				} else {
					return <div className="page-header">
						<h1 className="page-heading-h1">{translationFR.home.h1}</h1>
						<h2 className="page-heading-h2">{translationFR.home.h2}</h2>
					</div>
				}
			  })()
			}
		  </div>
		)}
	</MyContext.Consumer>
  )
}

export default Home