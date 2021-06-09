const Sauce = require("../models/thing");

exports.like = (req, res, next) => {
  console.log(req.body)
  if (req.body.like == 1) {
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { usersLiked: req.body.userId } },
      { new: true },
    );

    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: +1 } },
    );
    return res.status(200).json({ message: "Sauce liké!" });
    
  } else if (req.body.like == 0) {
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { usersLiked: req.body.userId } },
      { new: true },
    );

    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { likes: -1 } },
      { new: true },
    );
    return res.status(200).json({ message: "Aucun avis" });

  } else if (req.body.like == -1) {
    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { usersDisliked: req.body.userId } },
      { new: true },
    );

    Sauce.findOneAndUpdate(
      { _id: req.params.id },
      { $inc: { dislikes: +1 } },
      { new: true },
    );
    return res.status(200).json({ message: "Sauce disliké" });
  }
};