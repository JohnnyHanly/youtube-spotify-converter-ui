export default function playlistHandler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  res.json({ PlaylistID: id });
}
