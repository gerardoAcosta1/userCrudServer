import User from "../../models/users.model.js";

const getAllUsers = async (req, res) => {

    try {

      const users = await User.findAll();

      res.json(users);

    } catch (error) {

      res.status(400).json(error);
      
    }
  }

const addNewUser = async (req, res) => {

    try {

      const { body } = req;

      const user = await User.create(body);

      res.status(201).json(user);

    } catch (error) {

      res.status(400).json(error);
    }
  }

const getUserById = async (req, res) => {

    try {

      const { id } = req.params;

      const user = await User.findByPk(id);

      res.json(user);

    } catch (error) {

      res.status(400).json(error);
    }
  }

const updateUserById = async (req, res) => {
    try {

      const { id } = req.params;
      const { body } = req;

      const user = await User.update(body, {
        where: { id: id },
      });

      res.json(user);

    } catch (error) {

      res.status(400).json(error);
    }
  }

const deleteUserById = async (req, res) => {
    try {

      const { id } = req.params;
  
      await User.destroy({
        where: { id },
      });

      res.status(204).end(); 

    } catch (error) {

      res.status(400).json(error);
    }
  }

export {

    getAllUsers,
    addNewUser,
    getUserById,
    updateUserById,
    deleteUserById
}