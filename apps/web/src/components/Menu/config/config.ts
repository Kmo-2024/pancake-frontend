import { ChainId } from '@pancakeswap/chains'
import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POOL_SUPPORTED_CHAINS } from '@pancakeswap/pools'
import { SUPPORTED_CHAIN_IDS as POSITION_MANAGERS_SUPPORTED_CHAINS } from '@pancakeswap/position-managers'
import { SUPPORTED_CHAIN_IDS as PREDICTION_SUPPORTED_CHAINS } from '@pancakeswap/prediction'
import {
  DropdownMenuItems,
  DropdownMenuItemType,
  EarnFillIcon,
  EarnIcon,
  GameIcon,
  MenuItemsType,
  MoreIcon,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & {
  hideSubNav?: boolean
  overrideSubNavItems?: DropdownMenuItems['items']
  matchHrefs?: string[]
}
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & {
  hideSubNav?: boolean
  image?: string
  items?: ConfigMenuDropDownItemsType[]
  overrideSubNavItems?: ConfigMenuDropDownItemsType[]
}

export const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/',
      hideSubNav: true,
      items: [
        {
          label: t('Swap'),
          href: '/',
        },
        // {
        //   label: t('Perps'),
        //   href: getPerpetualUrl({
        //     chainId,
        //     languageCode,
        //     isDark,
        //   }),
        //   confirmModalId: 'perpConfirmModal',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        // {
        //   label: t('Options'),
        //   href: getOptionsUrl(),
        //   confirmModalId: 'optionsConfirmModal',
        //   type: DropdownMenuItemType.EXTERNAL_LINK,
        // },
        // {
        //   label: t('Buy Crypto'),
        //   href: '/buy-crypto',
        // },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Earn'),
      href: '/liquidity/pools',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: [ChainId.BSC, ChainId.ETHEREUM],
      overrideSubNavItems: [
        {
          label: t('Farm / Liquidity'),
          href: '/liquidity/pools',
          supportChainIds: [ChainId.BSC, ChainId.ETHEREUM],
        },
        {
          label: t('Position Manager'),
          href: '/position-managers',
          supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
        },
        {
          label: t('CAKE Staking'),
          href: '/cake-staking',
          supportChainIds: [ChainId.BSC],
        },
        {
          label: t('Syrup Pools'),
          href: '/pools',
          supportChainIds: POOL_SUPPORTED_CHAINS,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
      items: [
        {
          label: t('Farm / Liquidity'),
          href: '/liquidity/pools',
          matchHrefs: ['/liquidity/positions', '/farms'],
          supportChainIds: [ChainId.BSC, ChainId.ETHEREUM],
        },
        {
          label: t('Position Manager'),
          href: '/position-managers',
          supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
        },
        {
          label: t('Staking'),
          items: [
            {
              label: t('CAKE Staking'),
              href: '/cake-staking',
            },
            {
              label: t('Syrup Pools'),
              href: '/pools',
              supportChainIds: POOL_SUPPORTED_CHAINS,
            },
          ].map((item) => addMenuItemSupported(item, chainId)),
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Play'),
      icon: GameIcon,
      href: '/prediction',
      overrideSubNavItems: [
        {
          label: t('Prediction'),
          href: '/prediction',
        },
        {
          label: t('Lottery'),
          href: '/lottery',
        },
      ],
      items: [
        {
          status: { text: t('New'), color: 'success' },
          label: t('Springboard'),
          href: 'https://springboard.pancakeswap.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
        {
          label: t('Prediction'),
          href: '/prediction',
          image: '/images/decorations/prediction.png',
          supportChainIds: PREDICTION_SUPPORTED_CHAINS,
        },
        {
          label: t('Lottery'),
          href: '/lottery',
          image: '/images/decorations/lottery.png',
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: '',
      href: '/info',
      icon: MoreIcon,
      hideSubNav: true,
      items: [
        {
          label: t('Voting'),
          image: '/images/voting/voting-bunny.png',
          items: [
            /*  {
              label: t('Proposals'),
              href: '/proposals',
              icon: ProposalsIcon,
              fillIcon: ProposalsFillIcon,
              supportChainIds: PROPOSAL_SUPPORTED_CHAINS,
            }, */
            {
              label: t('Gauges'),
              href: '/gauges-voting',
              supportChainIds: [ChainId.BSC],
            },
          ].map((item) => addMenuItemSupported(item, chainId)),
        },
        {
          type: DropdownMenuItemType.DIVIDER,
        },
        {
          label: t('Docs'),
          href: 'https://docs.pancakeswap.finance',
          type: DropdownMenuItemType.EXTERNAL_LINK,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
