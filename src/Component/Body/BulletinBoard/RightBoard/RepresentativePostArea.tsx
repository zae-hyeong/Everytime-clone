import React from 'react'

const dummyRepPostTitles: string[] = [
  '실시간 인기 글', 'HOT 게시물', 'BEST 게시판', '학교 소식', '최근 강의평'
]

const RepresentativePostArea:React.FC = () => {
  return (
    <div className='bg-blue-400 row-span-2'>
      <form action="submit">
        <input type="text" placeholder='전체 게시판의 글을 검색하세요!' className='w-full border-2 p-2'/>
      </form>
      
    </div>
  )
}

export default RepresentativePostArea