import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";
//import { GithubLabel } from "../interfaces";

export const useLabels = ()=>{
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 hora

        // placeholderData:[
        //     {
        //         "id":1109407645,
        //         "node_id":"MDU6TGFiZWwxMTA5NDA3NjQ1",
        //         "url":"https://api.github.com/repos/facebook/react/labels/Component:%20Suspense",
        //         "name":"Component: Suspense",
        //         "color":"8ffcd6",
        //         "default":false
        //     }satisfies GithubLabel,
        //     {"id":1249821345,"node_id":"MDU6TGFiZWwxMjQ5ODIxMzQ1","url":"https://api.github.com/repos/facebook/react/labels/Component:%20ESLint%20Rules","name":"Component: ESLint Rules","color":"f7afdb","default":false,"description":""}
        // ]
      })
      return {
        labelsQuery,
      }
}