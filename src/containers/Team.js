import React from 'react';
import { withRouteData, Link } from 'react-static';
//

export default withRouteData(({ team }) => (
  <div>
    <h1>Our team!</h1>
    <br />
    All members:
    <ul>
      {team.map(member => (
        <li key={member.data.slug}>
          <Link to={`/team/member/${member.data.slug}`}> {member.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
));
