import genre from "../data/genres";
export interface Genre {
  id: number;
  name: string;
  image_background: string; 
}


const useGenres = ()=>({data: genre, isLoading: false, error: null});
// const useGenres = ()=>useData<Genre>('/genres');

export default useGenres;



