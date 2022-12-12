const getNames = function () {
  const names = ["Łukasz", "Piotr", "Anna"];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });

};

export default getNames;