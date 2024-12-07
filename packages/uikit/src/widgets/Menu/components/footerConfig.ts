import { ContextApi } from "@pancakeswap/localization";
import { FooterLinkType } from "../../../components/Footer/types";

export const footerLinks: (t: ContextApi["t"]) => FooterLinkType[] = (t) => [
  {
    label: t("Ecosystem"),
    items: [
      {
        label: t("Trade"),
        href: "https://pancakeswap.finance/swap",
      },
      {
        label: t("Earn"),
        href: "https://pancakeswap.finance/liquidity/pools",
      },
      {
        label: t("Play"),
        href: "https://pancakeswap.finance/prediction",
      },
    ],
  },
  {
    label: t("About"),
    items: [
      {
        label: t("Documentation"),
        href: "https://docs.pancakeswap.finance/",
      },
      {
        label: t("Tokenomics"),
        href: "https://docs.pancakeswap.finance/governance-and-tokenomics/cake-tokenomics",
      },
      {
        label: t("Terms Of Service"),
        href: "https://pancakeswap.finance/terms-of-service",
      },
    ],
  },
];
