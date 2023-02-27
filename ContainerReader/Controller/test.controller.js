const axios = require("axios");
exports.getAll = async (req, res) => {
  try {
    const natures = await axios.get(process.env.DIR);
    //res.send(natures);
    console.log(natures.data);
    res.status(200).send(natures.data);
  } catch (error) {
    res.status(500).send({
      message: `error : ${error.message}`,
    });
  }
};
