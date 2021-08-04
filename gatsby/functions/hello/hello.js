exports.handler = async (event, context) => {
  console.log('🚀 ~ file: hello.js ~ line 2 ~ exports.handler= ~ event', event);
  return {
    statusCode: 200,
    body: 'Hello',
  };
};
