export const reorderInSameColumn = (
  sourceCol: any,
  startIndex: number,
  endIndex: number
) => {
  const newTasks = Array.from(sourceCol.task);

  const [removed] = newTasks.splice(startIndex, 1);

  newTasks.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    task: newTasks,
  };

  return newColumn;
};

export const reorderInDiffColumn = (
  sourceCol: any,
  destinationCol: any,
  sourceIndex: number,
  destinationIndex: number
) => {
  const startTasks = Array.from(sourceCol.task);
  const [removed] = startTasks.splice(sourceIndex, 1);
  const newStartCol = { ...sourceCol, task: startTasks };

  const endTasks = Array.from(destinationCol.task);

  endTasks.splice(destinationIndex, 0, removed);
  const endCol = endTasks.map((str: any) => {
    if (str.status !== destinationCol.title) {
      str.status = destinationCol.title;
      return str;
    }
    return str;
  });

  const newEndCol = { ...destinationCol, task: endCol };

  return { newStartCol, newEndCol };
};
