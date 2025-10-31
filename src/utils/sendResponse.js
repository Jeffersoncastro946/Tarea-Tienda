export const sendResponse = ({
  res,
  message,
  statucode = 200,
  data = null,
}) => {
  return res.status(statucode).json({
    success: statucode < 300,
    message,
    data,
  });
};
