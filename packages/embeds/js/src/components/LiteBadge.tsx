import { onCleanup, onMount } from 'solid-js'

type Props = {
  botContainer: HTMLDivElement | undefined
}

export const LiteBadge = (props: Props) => {
  let liteBadge: HTMLAnchorElement | undefined
  let observer: MutationObserver | undefined

  const appendBadgeIfNecessary = (mutations: MutationRecord[]) => {
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach((removedNode) => {
        if (
          'id' in removedNode &&
          liteBadge &&
          removedNode.id == 'lite-badge'
        ) {
          console.log("Sorry, you can't remove the brand 😅")
          props.botContainer?.append(liteBadge)
        }
      })
    })
  }

  onMount(() => {
    if (!document || !props.botContainer) return
    observer = new MutationObserver(appendBadgeIfNecessary)
    observer.observe(props.botContainer, {
      subtree: false,
      childList: true,
    })
  })

  onCleanup(() => {
    if (observer) observer.disconnect()
  })

  return (
    <a
      ref={liteBadge}
      href={'https://www.chatworth.io/?utm_source=litebadge'}
      target="_blank"
      rel="noopener noreferrer"
      class="lite-badge"
      id="lite-badge"
    >
      <img
        src="https://chatworth.io/favicon.png"
        alt="Chatworth Logo"
        width="20px"
        height="20px"
      />
      <span>Powered by Chatworth</span>
    </a>
  )
}
