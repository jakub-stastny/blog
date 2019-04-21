import React, { Fragment } from 'react';

// TODO: Use h1, but put it into some <article or what is being used for this and tweak the styles so it isn't that big.
// ["title", "tags", "digest", "published_at", "slug", "excerpt", "path", "links"]
// {title: "zen", slug: "zen", path: "/tags/zen"}
export default (props) => <Fragment>
  <h2><a href={props.path}>{props.title}</a></h2>
  <p>
    {props.excerpt}
  </p>
</Fragment>
