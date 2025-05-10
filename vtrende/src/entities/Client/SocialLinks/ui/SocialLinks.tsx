import instagramIcon from "@/public/socialLinks/instagram.svg";
import telegramIcon from "@/public/socialLinks/telegram.svg";
import vkIcon from "@/public/socialLinks/vk.svg";
import whatsappIcon from "@/public/socialLinks/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ISocials } from "../../modal/types/shopTypes";
import { ESocialLinks } from "../model/types/socialLinks";

import classNames from "classnames";
import styles from "./SocialLinks.module.scss";

interface ISocialLinksProps {
  socialLinks: ISocials[];
  className?: string;
}

const showSocialLink = (socialLink: ISocials["social_type"]) => {
  switch (socialLink) {
    case ESocialLinks.whatsapp:
      return (
        <Image src={whatsappIcon} width={32} height={32} alt={socialLink} />
      );
    case ESocialLinks.instagram:
      return (
        <Image src={instagramIcon} width={32} height={32} alt={socialLink} />
      );
    case ESocialLinks.telegram:
      return (
        <Image src={telegramIcon} width={32} height={32} alt={socialLink} />
      );
    case ESocialLinks.vk:
      return <Image src={vkIcon} width={32} height={32} alt={socialLink} />;
  }
};

export const SocialLinks: FC<ISocialLinksProps> = ({
  socialLinks,
  className,
}) => {
  return (
    <div className={classNames(styles.socialLinks, className)}>
      {socialLinks.map((socialLink) => (
        <Link href={socialLink.value} key={socialLink.value} target="_blank">
          {showSocialLink(socialLink.social_type)}
        </Link>
      ))}
    </div>
  );
};
