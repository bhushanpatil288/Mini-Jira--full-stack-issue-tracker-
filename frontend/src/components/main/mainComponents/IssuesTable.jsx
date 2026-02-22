import ButtonB from '../../common/ButtonB'
import ButtonBL from '../../common/ButtonBL'
import { RiMoreLine, RiArrowDownSLine } from "@remixicon/react"
import Itable from './issuesComponents/Itable'

const IssuesTable = () => {
  return (
    <div className='mx-5 px-5 mt-4 bg-gray-100 py-3 rounded'>
      <div className='flex justify-between items-center'>

        <div className='flex gap-3'>
          <div className='flex items-center gap-2'>
            <input type="checkbox" />
            <div className='cursor-pointer'>
              <RiArrowDownSLine size={18} />
            </div>
          </div>
          <div>
            <p className='font-semibold'>SCRUM Sprint</p>
          </div>
          <div className='flex items-center'>
            <p className='text-gray-600 text-sm'>11 Feb - 25 Feb (2 work items)</p>
          </div>
        </div>

        <div className='flex gap-3'>
          <div className='flex gap-1'>
            <p className='bg-gray-300 px-3 flex justify-center items-center'>0</p>
            <p className='bg-blue-300 px-3 flex justify-center items-center'>0</p>
            <p className='bg-yellow-100 px-3 flex justify-center items-center'>0</p>
          </div>
          <div className='flex gap-2'>
            <ButtonB text={"Complete sprint"} style={"font-semibold text-gray-800 text-sm"} />
            <ButtonBL icon={RiMoreLine} />
          </div>
        </div>
      </div>


      <Itable />

    </div>
  )
}

export default IssuesTable