import { isMobile } from '@/utils/isMobileSignal'

export const DefaultAvatar = () => {
  return (
    <figure
      class={
        'flex justify-center items-center rounded-full text-white relative ' +
        (isMobile() ? 'w-6 h-6 text-sm' : 'w-10 h-10 text-xl')
      }
      data-testid="default-avatar"
    >
      <img
        src="https://www.chatworth.io/chatworth-icon.png"
        alt="Default Avatar"
        class={
          'rounded-full object-cover ' +
          (isMobile() ? ' w-6 h-6 text-sm' : 'w-full h-full text-xl')
        }
      />
    </figure>
  )
}
