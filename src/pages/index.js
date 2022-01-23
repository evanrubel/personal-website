import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};
const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};
const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};
const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

// data
const links = [
  {
    text: "LinkedIn",
    url: "https://linkedin.com/in/evanrubel",
    description: "My education, work experience, and skills.",
    color: "#2466C2",
  },
  {
    text: "GitHub",
    url: "https://github.com/evanrubel",
    description: "My projects.",
    color: "#242A2f",
  },
  {
    text: "Email",
    url: "mailto:evanrubel1@gmail.com",
    description: "Feel free to reach out!",
    color: "#EA4335",
  },
];

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Evan Rubel</title>
      <h1 style={headingStyles}>
        Hi there, I'm Evan!
        {/* <br />
        <span style={headingAccentStyles}>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span> */}
      </h1>
      {/* <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p> */}
      <p style={paragraphStyles}>
        <span role="img" aria-label="Construction emoji">
          🚧
        </span>{" "}
        This site is currently under construction.
        <span role="img" aria-label="Construction emoji">
          {" "}
          🚧
        </span>
        <br />
        <br />
        In the meantime, feel free to check out the links below to learn more
        about me.
      </p>
      <ul style={listStyles}>
        {links.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a style={linkStyle} href={link.url}>
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
