// AWS Lambda handler placeholder
// This will be your main API endpoint handler

export const handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      message: "SoberEase API - Coming Soon",
    }),
  };

  return response;
};
