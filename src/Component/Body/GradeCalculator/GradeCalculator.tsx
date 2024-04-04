import * as React from 'react';

export interface IGradeCalculatorProps {
}

export default function GradeCalculator (props: IGradeCalculatorProps) {
  return (
    <div className='text-5xl font-bold flex justify-center items-center'>
      <p className='mt-20'>학점 계산기 페이지입니다.</p>
    </div>
  );
}
