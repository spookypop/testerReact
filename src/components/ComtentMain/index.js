import React from 'react'
//引入路由
import {Route, Switch} from 'react-router-dom'

class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/' component={global.Main}/>
					<Route exact path='/page/SprintList' component={global.sprintlist}/>
					<Route exact path='/test/form' component={global.TestForm}/>
					<Route exact path='/testcaseList' component={global.TescasetList}/>
				</Switch>
			</div>
		)
	}
}

export default ContentMain