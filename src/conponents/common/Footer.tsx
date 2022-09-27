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
    </footer>
  );
};

export default Footer;
