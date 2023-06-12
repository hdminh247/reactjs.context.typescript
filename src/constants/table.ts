export const getColorByStatus = (status: any) => {
  switch (status) {
    case "active": {
      return "green";
    }
    case true: {
      return "green";
    }
    case false: {
      return "red";
    }
    case "eligible": {
      return "green";
    }
    case "non-eligible": {
      return "red";
    }
    case "inactive": {
      return "red";
    }
    default: {
      return "green";
    }
  }
};
