import { useState } from 'react';
import { LoadingSpinners } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { State } from '../interfaces';

export const ListView = () => {
  const [state, setState]= useState<State>(State.All)
  const [selectedLabels, setSelectedLabels] = useState<string[]>([])

  const  {issuesQuery,
    pageNumber,
    nextPage, prevPage

  }= useIssues({
    state:state,
    selectedLabels: selectedLabels
  })
  const issues = issuesQuery.data ?? []
  const onLabelSelected = (label:string)=>{
    if(selectedLabels.includes(label)){
      setSelectedLabels(selectedLabels.filter((l)=> l !== label))
    }else{
      setSelectedLabels([...selectedLabels,label])
    }
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {
          issuesQuery.isLoading
           ? (
            <div className='flex justify-center items-center w-full h-56'>
              <LoadingSpinners />
            </div>
           ):(
            <>
             <IssueList issues={issues} onStateChange={setState} state={state}/>
             <div className='flex justify-between items-center'>
              <button onClick={prevPage} className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>Anterior</button>
              <span>
                {pageNumber}
              </span>
              <button onClick={nextPage} className='p-2 bg-blue-500 rounded-md hover:bg-blue-700 transition-all'>Siguiente</button>
             </div>
            </>
           )
        }
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker
        onLabelSelected={onLabelSelected}
        selectedLabels={selectedLabels}
        />
      </div>
    </div>
  );
};
