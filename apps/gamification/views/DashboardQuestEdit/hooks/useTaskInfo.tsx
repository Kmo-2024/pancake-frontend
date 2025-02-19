import { useTranslation } from '@pancakeswap/localization'
import {
  BunnyFillIcon,
  DiscordIcon,
  InstagramIcon,
  LanguageIcon,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@pancakeswap/uikit'
import { useCallback } from 'react'
import { TaskType } from 'views/DashboardQuestEdit/type'

export const useTaskInfo = (primaryColor: boolean = false, iconSize: number = 20) => {
  const { t } = useTranslation()
  const color = primaryColor ? 'primary' : '#7A6EAA'
  const size = `${iconSize}px`

  const taskIcon = useCallback(
    (social: TaskType) => {
      switch (social) {
        case TaskType.MAKE_A_SWAP:
        case TaskType.ADD_LIQUIDITY:
        case TaskType.PARTICIPATE_LOTTERY:
        case TaskType.HOLD_A_TOKEN:
        case TaskType.MAKE_A_PREDICTION:
          return <BunnyFillIcon color={color} width={size} height={size} />
        case TaskType.X_LIKE_POST:
        case TaskType.X_FOLLOW_ACCOUNT:
        case TaskType.X_REPOST_POST:
          return <TwitterIcon color={color} width={size} height={size} />
        case TaskType.TELEGRAM_JOIN_GROUP:
          return <TelegramIcon color={color} width={size} height={size} />
        case TaskType.DISCORD_JOIN_SERVER:
          return <DiscordIcon color={color} width={size} height={size} />
        case TaskType.YOUTUBE_SUBSCRIBE:
          return <YoutubeIcon color={color} width={size} height={size} />
        case TaskType.IG_LIKE_POST:
        case TaskType.IG_COMMENT_POST:
        case TaskType.IG_FOLLOW_ACCOUNT:
          return <InstagramIcon color={color} width={size} height={size} />
        case TaskType.VISIT_BLOG_POST:
          return <LanguageIcon color={color} width={size} height={size} />
        default:
          return null
      }
    },
    [color, size],
  )

  const taskNaming = useCallback(
    (social: TaskType) => {
      switch (social) {
        case TaskType.MAKE_A_SWAP:
          return t('Make a swap')
        case TaskType.HOLD_A_TOKEN:
          return t('Hold a token')
        case TaskType.ADD_LIQUIDITY:
          return t('Add liquidity')
        case TaskType.PARTICIPATE_LOTTERY:
          return t('Participate in a lottery')
        case TaskType.MAKE_A_PREDICTION:
          return t('Make a prediction')
        case TaskType.X_LIKE_POST:
        case TaskType.IG_LIKE_POST:
          return t('Like the post')
        case TaskType.X_FOLLOW_ACCOUNT:
        case TaskType.IG_FOLLOW_ACCOUNT:
          return t('Follow the account')
        case TaskType.X_REPOST_POST:
          return t('Repost the post')
        case TaskType.TELEGRAM_JOIN_GROUP:
          return t('Join Telegram Group')
        case TaskType.DISCORD_JOIN_SERVER:
          return t('Join Discord Server')
        case TaskType.YOUTUBE_SUBSCRIBE:
          return t('Subscribe to the channel')
        case TaskType.IG_COMMENT_POST:
          return t('Comment on the post')
        case TaskType.VISIT_BLOG_POST:
          return t('Visit the blog post')
        default:
          return ''
      }
    },
    [t],
  )

  const taskInputPlaceholder = useCallback(
    (social: TaskType) => {
      switch (social) {
        case TaskType.X_LIKE_POST:
        case TaskType.X_REPOST_POST:
          return t('X post link')
        case TaskType.X_FOLLOW_ACCOUNT:
          return t('X account link')
        case TaskType.TELEGRAM_JOIN_GROUP:
          return t('Telegram group link')
        case TaskType.DISCORD_JOIN_SERVER:
          return t('Discord server link')
        case TaskType.YOUTUBE_SUBSCRIBE:
          return t('YouTube channel link')
        case TaskType.IG_LIKE_POST:
        case TaskType.IG_COMMENT_POST:
          return t('Instagram post link')
        case TaskType.IG_FOLLOW_ACCOUNT:
          return t('Instagram account link')
        case TaskType.VISIT_BLOG_POST:
          return t('Blog post link')
        case TaskType.MAKE_A_PREDICTION:
          return t('Prediction link')
        default:
          return ''
      }
    },
    [t],
  )

  const socialAccountIdName = useCallback(
    (social: TaskType) => {
      switch (social) {
        case TaskType.X_LIKE_POST:
        case TaskType.X_REPOST_POST:
          return t('Post Id')
        case TaskType.DISCORD_JOIN_SERVER:
          return t('Server Id')
        case TaskType.TELEGRAM_JOIN_GROUP:
          return t('Channel Id')
        default:
          return t('Account Id')
      }
    },
    [t],
  )

  const userActionButtonText = useCallback(
    (social: TaskType) => {
      switch (social) {
        case TaskType.MAKE_A_SWAP:
          return t('Swap')
        case TaskType.HOLD_A_TOKEN:
          return t('Get')
        case TaskType.ADD_LIQUIDITY:
          return t('Add')
        case TaskType.X_LIKE_POST:
        case TaskType.IG_LIKE_POST:
          return t('Like')
        case TaskType.X_REPOST_POST:
          return t('Repost')
        case TaskType.X_FOLLOW_ACCOUNT:
        case TaskType.IG_FOLLOW_ACCOUNT:
          return t('Follow')
        case TaskType.TELEGRAM_JOIN_GROUP:
        case TaskType.DISCORD_JOIN_SERVER:
          return t('Join')
        case TaskType.YOUTUBE_SUBSCRIBE:
          return t('Subscribe')
        case TaskType.IG_COMMENT_POST:
          return t('Comment')
        case TaskType.VISIT_BLOG_POST:
          return t('Visit the post')
        case TaskType.MAKE_A_PREDICTION:
          return t('Make a Bet')
        default:
          return ''
      }
    },
    [t],
  )

  return {
    taskIcon,
    taskNaming,
    taskInputPlaceholder,
    socialAccountIdName,
    userActionButtonText,
  }
}
