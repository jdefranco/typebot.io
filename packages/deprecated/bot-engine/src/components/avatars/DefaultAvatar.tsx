import React from 'react'

export const DefaultAvatar = (): JSX.Element => {
  return (
    <figure
      className={
        'flex justify-center items-center rounded-full text-white w-6 h-6 text-sm relative xs:w-10 xs:h-10 xs:text-xl'
      }
      data-testid="default-avatar"
    >
      <img
        src="https://www.chatworth.io/chatworth-icon.png"
        alt="Default Avatar"
        className={
          'rounded-full object-cover absolute top-0 left-0 w-6 h-6 xs:w-full xs:h-full xs:text-xl'
        }
      />
    </figure>
  )
}
