import { UserModel } from "../models/user.model.js";

export const getUser = async (_, res) => {
  try {
    const result = await UserModel.find();
    if (!result) throw err;
    return res
      .status(200)
      .json({ msg: `Usuário retornado com sucesso:`, result });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível buscar os dados devido ao erro: ${err}`,
    });
  }
};

export const addUser = async (req, res) => {
  try {
    const dataToPost = {
      name: req.body.name,
      lastName: req.body.lastName,
      address: req.body.address,
      favoriteProduct: req.body.favoriteProduct,
      email: req.body.email,
      isEmailReceiver: req.body.isEmailReceiver,
    };
    if (!dataToPost) throw err;
    await UserModel.create(dataToPost);
    return res.status(200).json({ msg: `Usuário criado com sucesso` });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível criar o novo usuário devido ao erro: ${err}`,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.findById(id);
    if (!result) throw err;
    return res
      .status(200)
      .json({ msg: `Usuário retornado com sucesso: `, result });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível buscar os dados devido ao erro: ${err}`,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const dataToUpdate = {
      name: req.body.name,
      lastName: req.body.lastName,
      address: req.body.address,
      favoriteProduct: req.body.favoriteProduct,
      email: req.body.email,
      isEmailReceiver: req.body.isEmailReceiver,
    };
    if (!dataToUpdate) throw err;
    await UserModel.findByIdAndUpdate(id, dataToUpdate);
    return res
      .status(200)
      .json({ msg: `Usuário atualizado com sucesso`, dataToUpdate });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível atualizar o usuário devido ao erro: ${err}`,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserModel.findByIdAndDelete(id);
    if (!result) throw err;
    return res
      .status(200)
      .json({ msg: `Usuário deletado com sucesso`, result });
  } catch (err) {
    return res.status(412).json({ msg: `Não foi possível deletar usuário` });
  }
};
