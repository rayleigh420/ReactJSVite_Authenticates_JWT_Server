import axios from "axios";

let signUp = async (data) => {
  try {
    let result = Qaxios.post("https://vc02vv-3000.preview.csb.app/", data);
    console.log(result);
  } catch (e) {}
};

export default signUp
