module.exports.allAccess = async (req, res) => {
  res.status(200).send({ message: "Public Content" });
};
module.exports.userBoard = async (req, res) => {
  res.status(200).send({ message: "User Board" });
};

module.exports.adminBoard = async (req, res) => {
  res.status(200).send({ message: "Admin Board" });
};

module.exports.moderatorBoard = async (req, res) => {
  res.status(200).send({ message: "Moderator Board" });
};
