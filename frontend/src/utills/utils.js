const retriveIntialData = (intialData) => {
  let info = intialData.reduce((acc, i) => {
    if (i.status !== "fulfilled") {
      return acc;
    }
    acc[i.value.data.results[0].type] = [...i.value.data.results];
    return acc;
  }, {});

  console.log(info);
  return info
};
export { retriveIntialData };
