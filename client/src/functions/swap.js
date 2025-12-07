const swap = (i, j, setItems) => {
  setItems(prev => {
    const newArr = [...prev];
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    return newArr;
  });
};

export default swap;