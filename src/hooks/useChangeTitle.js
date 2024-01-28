import { useEffect } from "react";

const useChangeTitle = (newTitle) => {
  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);
};

export default useChangeTitle;
