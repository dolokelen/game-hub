import usePlatform from "./usePlatform";

export const useFindPlatform = (id?: number) => {
  const { data } = usePlatform();
  return data?.results.find((p) => p.id === id);
};
