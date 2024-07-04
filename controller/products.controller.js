import { ProductsModel } from "../models/products.model.js";

export const getProducts = async (_, res) => {
  try {
    const result = await ProductsModel.find();
    if (!result) throw err;
    return res
      .status(200)
      .json({ msg: `Produtos retornados com sucesso: `, result });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível retornar os produtos devido ao erro: `,
      err,
    });
  }
};

export const addProducts = async (req, res) => {
  try {
    const dataToPost = {
      name: req.body.name,
      price: req.body.price,
      isPromo: req.body.isPromo,
      category: req.body.category,
    };
    if (!dataToPost) throw err;
    const result = await ProductsModel.create(dataToPost);
    return res
      .status(200)
      .json({ msg: `Produtos adicionados com sucesso: `, result });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível criar o novo produto devido ao erro: `,
      err,
    });
  }
};

export const getProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ProductsModel.findById(id);
    if (!result) throw err;
    return res
      .status(200)
      .json({ msg: `Produto com id ${id} retornado com sucesso: `, result });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível retornar o produto de id ${id} devido ao erro: `,
      err,
    });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const dataToUpdate = {
      name: req.body.name,
      price: req.body.price,
      isPromo: req.body.isPromo,
      category: req.body.category,
    };
    if (!dataToUpdate) throw err;
    await ProductsModel.findByIdAndUpdate(id, dataToUpdate);
    return res.status(200).json({
      msg: `Produto com id ${id} atualizado com sucesso: `,
      dataToUpdate,
    });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível atualizar o produto de id ${id} devido ao erro: `,
      err,
    });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await ProductsModel.findByIdAndDelete(id);
    if (!result) return;
    return res
      .status(200)
      .json({ msg: `Produto com id ${id} deletado com sucesso: `, result });
  } catch (err) {
    return res.status(412).json({
      msg: `Não foi possível deleter o produto de id ${id} devido ao erro: `,
      err,
    });
  }
};
