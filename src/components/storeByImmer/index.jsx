import { memo } from 'react';
import { useImmer } from 'use-immer';
const StoreByImmer = () => {
  const [person, updatePerson] = useImmer({ name: 'wl', age: 112 });
  const updateName = (name) => {
    updatePerson((draft) => {
      draft.name = name;
    });
  };
  const addOneAge = () => {
    updatePerson((draft) => {
      ++draft.age;
    });
  };
  return <></>;
};

export default memo(StoreByImmer);
