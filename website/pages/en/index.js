/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : 'en/'}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div class="fixedHeaderContainer" style={{backgroundColor: '#fa383e'}}>
          <div class="headerWrapper wrapper"><header style={{textAlign: 'center', display: 'block', paddingTop: '5px'}}><a style={{display: 'block'}} target="_blank" href="https://docs.diffbot.com/docs/en/explain-letsencrypt-certificate-expiration">SSL Error? Read here for why and how to solve it!</a></header>
          </div>
        </div>
        <div className="homeSplashFade" style={{paddingTop:"40px"}}>
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/diffbot.png`} />
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            {/* <Button href="#try">Try It Out</Button>
            <Button href={docUrl('intro.html')}>Example Link</Button>
            <Button href={docUrl('doc2.html')}>Example Link 2</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align={props.align || 'center'}
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        {/* <h2>Structured, understandable docs</h2> */}
        {/* <MarkdownBlock>Inspired by <a href="https://www.divio.com/blog/documentation/">Divio's Documentation breakdown</a></MarkdownBlock> */}
      </div>
    );

    const TryOut = () => (
      <Block id="try" align="left">
        {[
          {
            content:
              'Use our standard APIs to process expected data online into structured JSON. Alternatively, learn to customize the API to your liking and extract truly unique and useful content. Train our engine and help us help you get the results you need!',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Learn API Customization',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark" align="left">
        {[
          {
            content:
              'Inject custom execution logic and headers into websites being processed to truly customize the output or log into paywalled websites with our crawler!',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'JavaScript and Header Injection',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="dark" align="left">
        {[
          {
            content:
              'Automatically process and parse any type of content online to get back structured JSON. Ingest the data into your system and filter, aggregate, process, sell or analyze to your liking!',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Learn how to crawl entire domains',
          },
        ]}
      </Block>
    );

    const docUrl = page => baseUrl + 'docs/' + (language ? `${language}/` : 'en/') + page;

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Extract Structured Data from Web Pages',
            image: `${baseUrl}img/read.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl('api-basics-index')} style='text-decoration: underline'>Extraction</a>`,
          },
          {
            content: 'Crawl and Extract Entire Domains',
            image: `${baseUrl}img/howto.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl('cb-basics-index')} style='text-decoration: underline'>Crawling</a>`,
          },          
          {
            content: 'Query the Whole Web and Enhance Your Own Data',
            image: `${baseUrl}img/code.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl('kg-index')} style='text-decoration: underline'>Knowledge Graph</a>`,
          },          
          {
            content: 'Problems? Errors? Solutions here!',
            image: `${baseUrl}img/books.svg`,
            imageAlign: 'top',
            title: `<a href=${docUrl('error-intro')} style='text-decoration: underline'>Debugging</a>`,
          }
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
          <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
