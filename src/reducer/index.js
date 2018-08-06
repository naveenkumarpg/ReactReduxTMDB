let initdata = {
  'loader': true,
  'movieslist': {},
  'moviedata': {},
  'error': false,
  'errorlabel': ''
};

module.exports =  function counter(state = initdata, action) {
  switch (action.type) {
    
  case 'DATAUPDAE':
    return Object.assign({}, state, action.item);

  case 'ERROR':
    return Object.assign({}, state, action.payload);

  default:
    return state;
  }
};