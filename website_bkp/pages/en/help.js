/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const {config: siteConfig, language = ''} = props;
  const {baseUrl, docsUrl} = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
  const langPart = `${language ? `${language}/` : 'en/'}`;
  const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
  const pageUrl = page => `${baseUrl}${langPart}${page}`;

  const supportLinks = [
    {
      content: `[Yes it is. Read this page for details!](${pageUrl(
        'gdpr',
      )})`,
      title: 'Is Diffbot GDPR Compliant?',
    },
    {
      content: `Common errors and their solutions can be found [in these docs](${docUrl('error-intro')})!`,
      title: 'Found an error?',
    },
    {
      content: "Email us directly at [support@diffbot.com](mailto:support@diffbot.com)",
      title: 'Docs still not helping?',
    },
  ];

  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">
          <header className="postHeader">
            <h1>Need help?</h1>
          </header>
          <p>See below for the most common issues and questions!</p>
          <GridBlock contents={supportLinks} layout="threeColumn" />
        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
