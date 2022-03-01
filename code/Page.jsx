import PropTypes from "prop-types";
import React from "react";

/**
 * The page layout component
 */
const Page = ({
  title,
  stylesheet,
  header,
  main,
  footer,
  script,
  _relativeURL,
  _ID,
}) => (
  <html className="no-js" lang="en-ca">
    <head>
      <title>Cuttlebelle - {title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=Sue+Ellen+Francisco&display=swap"
        rel="stylesheet"
      />

      {/* 
		# Favicon code
		<link rel="icon" href="/favicon.ico" sizes="any">
		<link rel="icon" href="/icon.svg" type="image/svg+xml">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
		<link rel="manifest" href="/manifest.webmanifest"></link>
		*/}

      {stylesheet != undefined ? (
        <link
          rel="stylesheet"
          href={_relativeURL(`/assets/css/${stylesheet}.css`, _ID)}
        />
      ) : null}
    </head>
    <body>
      <div className="top">
        <header role="banner">{header}</header>

        <main>{main}</main>
      </div>

      <footer>{footer}</footer>

      <script
        src={_relativeURL(
          `/assets/js/${process.env.__mainJS__ || "main.js"}`,
          _ID
        )}
      />
      {script != undefined ? (
        <script src={_relativeURL(`/assets/js/${script}.js`, _ID)} />
      ) : null}
    </body>
  </html>
);

Page.propTypes = {
  /**
   * title: Homepage
   */
  title: PropTypes.string.isRequired,

  /**
   * main: (partials)(5)
   */
  main: PropTypes.node.isRequired,

  /**
   * footer: (partials)(2)
   */
  footer: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
