const videoGamesData = [
  {
    title: 'Call of Duty',
    rating: 'M'
  },
  {
    title: 'Mortal Kombat',
    rating: 'M'
  },
  {
    title: 'Wii Tennis',
    rating: 'E'
  }
]

module.exports = {
  getGames (req, res, next) {
    return res.status(200).json(videoGamesData);
  }
}
