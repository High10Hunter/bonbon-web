import React, { useState } from 'react'
import PlanChatbot from './PlanChatbot'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocketchat } from '@fortawesome/free-brands-svg-icons'

const ChatbotBubble = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(() => !isChatOpen)
  }

  return (
    <div className='fixed bottom-5 right-5 z-50 m-3 flex flex-col items-center'>
      {isChatOpen ? (
        <PlanChatbot onClose={toggleChat} />
      ) : (
        <div className='flex flex-col items-center space-y-2'>
          {/* <div className='rounded-full bg-white px-3 py-1 text-sm text-gray-600 shadow-lg'>
            Need help? Chat with us!
          </div> */}
          <button
            className='flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-none bg-green-500 text-white shadow-2xl'
            onClick={toggleChat}
          >
            <FontAwesomeIcon icon={faRocketchat} size='3x' />
          </button>
        </div>
      )}
    </div>
  )
}

export default ChatbotBubble
