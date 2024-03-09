import React from 'react'

export const DefaultAvatar = () => (
  <figure
    className={
      'flex justify-center items-center rounded-full text-white w-6 h-6 text-sm relative xs:w-10 xs:h-10 xs:text-xl'
    }
    data-testid="default-avatar"
  >
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={'absolute top-0 left-0 w-6 h-6 xs:w-full xs:h-full xs:text-xl'}
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

