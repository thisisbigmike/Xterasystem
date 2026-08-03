import GlobeLogo from './GlobeLogo';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-row">
          <div className="logo">
            <GlobeLogo maskId="footer-globe-mask" />
            Xterasystem
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Risk Disclosure</a>
          </div>
        </div>
        <p className="disclaimer">
          Investing involves risk, including loss of principal. This page is for informational
          purposes and does not constitute investment advice. Availability and eligibility depend on jurisdiction and
          opportunity.
        </p>
      </div>
    </footer>
  );
}
