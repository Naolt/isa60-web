import {
  IconBrandFacebook,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";

export const icons: {
  [key: string]: JSX.Element;
} = {
  youtube: <IconBrandYoutube size={24} className=" text-white" />,
  email: <IconMail size={24} className=" text-white" />,
  facebook: <IconBrandFacebook size={24} className=" text-white" />,
  telegram: <IconBrandTelegram size={24} className=" text-white" />,
  whatsapp: <IconBrandWhatsapp size={24} className=" text-white" />,
};
export const iconsFooter: {
  [key: string]: JSX.Element;
} = {
  youtube: (
    <IconBrandYoutube className="hover:text-yellow-500 text-primary transition-colors duration-75 ease-in-out" />
  ),
  email: (
    <IconMail className="hover:text-yellow-500 text-primary transition-colors duration-75 ease-in-out" />
  ),
  facebook: (
    <IconBrandFacebook className="hover:text-yellow-500 text-primary transition-colors duration-75 ease-in-out" />
  ),
  telegram: (
    <IconBrandTelegram className="hover:text-yellow-500 text-primary transition-colors duration-75 ease-in-out" />
  ),
  whatsapp: (
    <IconBrandWhatsapp className="hover:text-yellow-500 text-primary transition-colors duration-75 ease-in-out" />
  ),
};
