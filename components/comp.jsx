const linkColor = "#113344";

export default ({ children, className }) => (
  <>
    <span className={className}>{children}</span>
    <style jsx>{`
      .link {
        color: ${linkColor};
      }
    `}</style>
  </>
);
