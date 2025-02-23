
var main1 = (a = 0) => () => a;

var main2 = () => {
  const a = 0; 
  return () => a;
};