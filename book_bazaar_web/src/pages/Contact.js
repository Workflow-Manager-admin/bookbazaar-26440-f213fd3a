import React from "react";

/**
 * Contact page with static support info.
 */
// PUBLIC_INTERFACE
function Contact() {
  return (
    <div className="hero">
      <div className="subtitle">Contact Info</div>
      <h1 className="title">Get in Touch</h1>
      <div className="description">
        Email us at{" "}
        <a
          href="mailto:support@bookbazaar.com"
          style={{ color: "var(--accent-color)" }}
        >
          support@bookbazaar.com
        </a>
        <br />
        We usually respond within 1 business day.
      </div>
    </div>
  );
}

export default Contact;
