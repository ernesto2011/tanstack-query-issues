import { useLabels } from "../hooks/useLabels";


export const LabelPicker = () => {
      const { labelsQuery} = useLabels()
  if(labelsQuery.isLoading){
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
      </div>
    )
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
    {
      labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
        >
          {label.name}
        </span>
      ))
    }
      {/* <span
        className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
        style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
      >
        Primary
      </span> */}
    </div>
  );
};
