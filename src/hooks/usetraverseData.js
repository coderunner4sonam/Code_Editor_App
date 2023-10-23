function usetraverseData() {
  function insert(explorerData, name, isFolder, id) {
    if (explorerData.id === id && name) {
      explorerData.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder,
        items: [],
      });
      return explorerData;
    }
    let newData = explorerData.items.map((ele,ind)=>{
      return insert(ele, name, isFolder, id);
    })
    return {...explorerData, items:newData}
  };
  return {insert};
}

export default usetraverseData;

