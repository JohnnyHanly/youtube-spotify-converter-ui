import config from "../../../config"

export default async function convertHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;


  const response = await fetch(`${config.apiURL}/playlist/convert/${id}`);
  const json = await response.json();
  
  res.json(json);
}
