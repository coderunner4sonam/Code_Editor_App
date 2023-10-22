export function usetraverseData() {
  return function insert(explorerData, name, isFolder, id) {
    if (explorerData.id === id && name) {
      explorerData.items.unshift({
        id: new Date().getTime(),
        name: name,
        isFolder: true,
        items: [],
      });
      return explorerData;
    }
    let newData = explorerData.items.map((ele,ind)=>{
      return insert(ele, name, isFolder, id);
    })
    return {...explorerData, items:newData}
  };
}

