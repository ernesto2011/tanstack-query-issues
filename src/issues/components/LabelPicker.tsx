import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

export const LabelPicker = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels
  })
  if(labelsQuery.isLoading){
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    )
  }
  return (
    <>
      <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span>
    </>
  );
};
