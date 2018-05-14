import React from 'react';
import { withRouteData, Link } from 'react-static';
import Moment from 'react-moment';
import Markdown from 'react-markdown';
//

export default withRouteData(({ member }) => (
	<div className="blog-post">
		<Link to="/team/">{'<'} Back</Link>
		<br />
		<h3>{member.data.name}</h3>
		<Moment format="MMMM Do, YYYY">{member.data.date}</Moment>
		<img className="image" src={member.data.thumbnail} alt="" />
		<Markdown source={member.bio} escapeHtml={false} />
	</div>
));
