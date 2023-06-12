export const removeUndefinedValue = (data: any) => {
  const newData = {};
  Object.keys(data).map((key) => {
    if (data[key] !== undefined) {
      newData[key] = data[key];
    }
  });

  return newData;
};
