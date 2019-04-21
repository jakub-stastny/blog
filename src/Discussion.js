import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import config from './config'

// class Discussion extends React.Component {
//     render() {
//         const disqusConfig = {
//             url: this.props.article.url,
//             identifier: this.props.article.slug,
//             title: this.props.article.title,
//         };

//         return (
//             <div className="article">
//                 <DiscussionEmbed shortname={config.disqusShortname} config={disqusConfig} />
//             </div>
//         );
//     }
// }

export default ({title, slug, url}) =>
  <DiscussionEmbed shortname={config.disqusShortname} config={{url, title, identifier: slug}} />
