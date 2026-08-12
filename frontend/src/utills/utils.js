const retriveIntialData = (intialData) => {
    
  let info = Object.values(intialData).reduce((acc, i) => {
    let categories = i.results.map((category) => {
      return category;
    });
    acc = [...acc, ...categories];
    return acc;
  }, []);

  return info;
};

export { retriveIntialData };
