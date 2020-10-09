const getUrlNames = (url) => {
  // split the url by ?
  var [names, params] = url.split("?");
  // then split the url by / and get all names in an array
  var names = names.split("/");
  // check if there is a / in the beginning of the url if so remove the first element equal to ''
  if (names[0] === "") {
    names = names.slice(1);
  }
  // check if the url has params if so split then by &
  if (params) {
    params = params.split("&");
    // return names and params
    return { names, params };
  }
  // return only names
  return { names };
};

const getParams = (params) => {
  // this method add params to the hash
  var param = {};
  for (let i = 0; i < params.length; i++) {
    const [key, index] = params[i].split("=");
    if (key && index) {
      param = { ...param, [key]: index };
    }
  }
  return param;
};
// function that hash the URL
const hashURL = (url) => {
  const { names, params } = getUrlNames(url);

  if (
    // test if names are invalid
    !/\d/g.test(names[0]) || // Digit
    !/\d/g.test(names[3]) || // Digit
    !/\w/g.test(names[2]) || // Word
    names[2] === "api" // name must be api
  ) {
    console.log("Invalid URL");
  } else {
    var hash = { version: names[0], collection: names[2], id: names[3] };
    if (params) {
      hash = { ...hash, ...getParams(params) };
    }
    console.log(hash);
  }
};

//examples
const url = "/4/api/dogs/4";
const url2 = "/4/api/dogs/4?order=desc&limit=20";
const url3 = "6/api/listings/4?maxqty=25&order=asc&limit=100";
const url4 = "4/y/dff/e?cable=3";
const url5 = "/4/y/3";
const url6 = "/4/api/animals/4";
hashURL(url); // { version: '4', collection: 'dogs', id: '4' }
hashURL(url2); // { version: '4', collection: 'dogs', id: '4', order: 'desc',limit: '20' }
hashURL(url3); // {version: '6',collection: 'listings',id: '4',maxqty: '25',order: 'asc',limit: '100'}
hashURL(url4); // Invalid URL
hashURL(url5); // Invalid URL
hashURL(url6); // { version: '4', collection: 'animals', id: '4' }
