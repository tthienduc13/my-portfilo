import React from "react";
import "../Footer/Footer.scss";
import { useTranslation } from "react-i18next";
import "@style/_global.scss";

function Footer() {
  const [t, i18n] = useTranslation("global");
  const info = [
    {
      header: `${t("footer.links")}`,
      content: [
        { href: "#home", title: `${t("nav.home")}` },
        { href: "#about", title: `${t("nav.about")}` },
        { href: "#projects", title: `${t("nav.project")}` },
        { href: "#contact", title: `${t("nav.contact")}` },
      ],
    },
    {
      header: `${t("footer.contact")}`,
      content: [
        { href: "https://github.com/tthienduc13", title: "Github" },
        { href: "https://www.facebook.com/thien.duc.1310", title: "Facebook" },
        {
          href: "https://www.linkedin.com/in/nguyen-le-thien-duc-30aa03251/",
          title: "LinkedIn",
        },
        { href: "mailto:ducnltdev@gmail.com", title: "Gmail" },
      ],
    },
  ];
  return (
    <>
      <div className="footer">
        <div className="footer__container container">
          <div className="footer__container-copyright">
            <div className="copyright-title">DucNLT.dev</div>
            <div className="copyright-desc">© 2023, {t("footer.author")}</div>
          </div>
          <div className="footer__container-content">
            {info.map((info, index) => (
              <div className="content__item">
                <div className="content__item-title">{info.header}</div>
                {info.content.map((content, index) => (
                  <a className="content__item-desc" href={content.href}>
                    {content.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
