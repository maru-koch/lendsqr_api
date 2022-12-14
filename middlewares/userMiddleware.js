
const isHEX = h => !isNaN(parseInt(h, 16));
const RFC4122Len = [8, 4, 4, 4, 12];

exports.isValidID = (req, res, next) => {

  // validates if the user ID is correct
    const userID = req.params.user_id;
  const codePointLenght = userID.length;

  if (codePointLenght !== 36) {
    res.status(404).json({message:"Invalid User ID"})
  };

  // Must have 5 groups
  const groups = userID.split("-");
  if (groups.length !== 5) {
    res.status(404).json({message:"Invalid User ID"})
  }

  // RFC defines 5 groups of 8-4-4-4-12 codepoints chars each
  const lenMatch = groups.map(gr => [...gr].length).every((len, i) => len === RFC4122Len[i]);
    if (!lenMatch){
    res.status(404).json({message:"Invalid User ID"})
    };

   next();

};