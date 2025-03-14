import { LoadingSpinners } from "../../shared";
import { useLabels } from "../hooks";

interface Props{
  selectedLabels: string[]
  onLabelSelected: (label:string) => void;
}
export const LabelPicker = ({selectedLabels, onLabelSelected}:Props) => {
      const { labelsQuery} = useLabels()
  if(labelsQuery.isLoading){
    return (
      <div className="flex justify-center items-center h-52">

        <LoadingSpinners />
      </div>
    )
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
    {
      labelsQuery.data?.map((label) => (
        <span
          onClick={()=>onLabelSelected(label.name)}
          key={label.id}
          className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer
            ${selectedLabels.includes(label.name) ? 'selected-label': '' }
            `}
          style={{ border: `1px solid #${label.color}`, color: `#${label.color}` }}
        >
          {label.name}
        </span>
      ))
    }
    </div>
  );
};
