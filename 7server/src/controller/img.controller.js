const {models} = require("../libs/sequelize")

const createImg = async (req, res) => {
  try {

    const { userId, img } = req.body;

    // Verificar si el usuario ya cargó la misma imagen
    const existingImg = await models.Img.findOne({
      where: { userId, img },
    });

    if (existingImg) {
      return res.status(400).json({
        success: false,
        message: "El usuario ya cargó esta imagen previamente.",
      });
    }

    const newImg = await models.Img.create(req.body);

    const person = await models.Person.findOne({
      where: {
        id: userId
      },
    });
    
    if (person) {
      person.totalPoints = person.totalPoints + 1;
      await person.save(); // ✅ Guardás los cambios en la base de datos
    }


    res.json({ success: true, data: newImg });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};



const getImgByidUser = async (req, res) => {
  try {

    const { userId } = req.body;

    // Verificar si el usuario ya cargó la misma imagen
    const totalImgs = await models.Img.findAll({
      where: { userId:userId },
    });


    res.json({ success: true, data: totalImgs });

  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
    createImg,
    getImgByidUser
};