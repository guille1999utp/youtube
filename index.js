const {format} = require('date-fns');

exports.handler = async (event) => {

console.log(event);

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from Lambda! ${format(new Date(), 'yyyy-MM-dd HH:mm:ss')}`),
  };
  return response;
};
