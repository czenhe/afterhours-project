/**
 * Footer
 */
type link = {
  Name: string;
  Address: string;
};

const Footer: React.FC = () => {
  const SnsLink: link[] = [
    {
      Name: ``,
      Address: ``,
    },
  ];

  return (
    <footer className={"globalFooter"}>
      <ul className={"footerNav"}>
        {SnsLink.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.Address} target={`_blank`} rel={`noreferrer`}>
                {link.Name}
              </a>
            </li>
          );
        })}
      </ul>
      <small>&copy; czenhe 2022.</small>
      <style jsx>{`
          .footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}
      `}</style>
    </footer>
  );
};

export default Footer;
