import config from "../../../config"

export default async function playlistHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;


  const response = await fetch(`${config.apiURL}/task/${id}`);
  const json = await response.json();
  
  res.json(json);
}
