export const getLogTypeDisplayName = (history: any) => {
  const type = history?.type;
  switch (type) {
    case "applicationStatus": {
      return "Status";
    }
    case "survey": {
      return `${history.fieldName}`;
    }
    default: {
      return "Status";
    }
  }
};
