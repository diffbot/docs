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

  return (
    <div className="docMainWrapper wrapper-wide">
      <Container className="mainContainer documentContainer postContainer">
        <div className="post">

        <iframe src="https://kg.diffbot.com/kg/enhance_endpoint/fixtures/ontdocs.html"  frameBorder="0" width="100%"></iframe>

        </div>
      </Container>
    </div>
  );
}

module.exports = Help;
