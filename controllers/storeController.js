const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getItems = async (req, res) => {
  await prisma.storeItem.findMany().then((response) => res.send(response));
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  await prisma.storeItem
    .findUnique({ where: { id: +id } })
    .then((response) => res.send(response));
};

const createItem = async (req, res) => {
  const { title, description, price, categoryId } = req.body;
  try {
    const newItem = await prisma.storeItem.create({
      data: {
        title,
        price,
        description,
        categoryId,
      },
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating item:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the item." });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { title, price, description, categoryId } = req.body;
  const updateData = {};

  if (title) {
    updateData.title = title;
  }

  if (price) {
    updateData.price = price;
  }

  if (description) {
    updateData.description = description;
  }

  if (categoryId) {
    updateData.categoryId = categoryId;
  }

  try {
    const updatedItem = await prisma.storeItem.update({
      where: { id: +id },
      data: updateData,
    });

    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error updating item:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the item." });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await prisma.storeItem.delete({ where: { id: +id } });
    res.status(200).json(deletedItem);
  } catch (e) {
    console.error("Error deleting items", e);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the item." });
  }
};

const searchForItems = async (req, res) => {
  const { query } = req.body
  await prisma.storeItem.findMany({where: {title: query}})
};

module.exports = {
  getItemById,
  getItems,
  updateItem,
  deleteItem,
  searchForItems,
  createItem,
};
