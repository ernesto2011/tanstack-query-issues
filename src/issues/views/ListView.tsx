import { LoadingSpinners } from '../../shared';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';

export const ListView = () => {
  const  {issueQuery}= useIssues()
  const issues = issueQuery.data ?? []
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {
          issueQuery.isLoading
           ? (
            <div className='flex justify-center items-center w-full h-56'>
              <LoadingSpinners />
            </div>
           ):(
             <IssueList issues={issues}/>
           )
        }
      </div>

      <div className="col-span-1 px-2">
        <LabelPicker />
      </div>
    </div>
  );
};
