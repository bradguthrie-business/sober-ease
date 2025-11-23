// AWS Lambda handler placeholder
// this will be the main API endpoint handler

// eslint-disable-next-line no-unused-vars
export const handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "API - Coming Soon",
    }),
  };

  return response;
};
