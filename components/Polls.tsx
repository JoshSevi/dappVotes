/* eslint-disable @next/next/no-img-element */
import { formatDate, truncate } from '@/services/blockchain'
import { PollStruct } from '@/utils/types'
import { useRouter } from 'next/router'
import React from 'react'

const Polls: React.FC<{ polls: PollStruct[] }> = ({ polls }) => {
  return (
    <div>
      {/* <h1 className="text-center text-[34px] font-[550px] mb-5">meow</h1> */}

      <div className="grid grid-cols-1 xl:grid-cols-3 pb-7 gap-[62px] sm:w-2/3 xl:w-5/6 mx-auto">
        {polls.map((poll, i) => (
          <Poll key={i} poll={poll} />
        ))}
      </div>
    </div>
  )
}
const Poll: React.FC<{ poll: PollStruct }> = ({ poll }) => {
  const navigate = useRouter()
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full">
      <div
        className="h-[392px] gap-[10px] md:w-[580px] md:h-[280px]
            grid grid-cols-1 md:flex justify-start w-full"
      >

        <div
          className="w-full h-[257px] gap-[14px] rounded-[24px] space-y-5
                md:w-[352px] md:h-[280px] bg-[#151515] bg-opacity-50 px-[15px] py-[18px] md:px-[22px]"
        >
          <h1 className="text-[18px] font-[600px]">
            {truncate({ text: poll.title, startChars: 30, endChars: 0, maxLength: 33 })}
          </h1>
          <p className="text-[14px] font-[400px]">
            {truncate({ text: poll.description, startChars: 104, endChars: 0, maxLength: 107 })}
          </p>

          <div className="flex justify-between items-center gap-[8px]">
            <div
              className="h-[26px] bg-[#2c2c2c] rounded-full py-[4px] px-[12px]
                text-[12px] font-[400px]"
            >
              {formatDate(poll.startsAt)}
            </div>

            <div className="h-[32px] w-[119px] gap-[5px] flex items-center">
              <div className="h-[32px] w-[32px] rounded-full bg-[#2c2c2c]" />
              <p className="text-[12px] font-[400px]">
                {truncate({ text: poll.director, startChars: 4, endChars: 4, maxLength: 11 })}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate.push('/polls/' + poll.id)}
            className="h-[44px] w-full rounded-full transition-all duration-300 bg-[#17A34A] hover:bg-green-400"
          >
            Enter
          </button>
        </div>
      </div>
    </div>
  )
}

export default Polls
