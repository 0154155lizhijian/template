const list = [{mark: 'data', AAA: 'bbb'}];


const newList = list.map(item => ({newParams: '123', ...item}));


console.log(newList);
