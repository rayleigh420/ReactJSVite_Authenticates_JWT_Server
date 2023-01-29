import axios from "axios";

export const signUp = async (data) => {
  console.log("API: ", data);
  try {
    let result = await axios.post(
      "https://vc02vv-3000.preview.csb.app/signUp",
      data
    );
    console.log("Result: ", result);
  } catch (e) {
    console.log(e);
  }
};

// module.exports = {
//   signUp,
// };
