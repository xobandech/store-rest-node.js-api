const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getItems = async (req, res) => {
  await prisma.storeItem.findMany().then(response => res.send(response));
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  await prisma.storeItem
    .findUnique({ where: { id: +id } })
    .then(response => res.send(response))
};

const createItem = async (req, res) => {
  const { title, price, description, categoryId } = req.body;

  try {
    const newItem = await prisma.storeItem.create({
      data: {
        title,
        description,
        price,
        category: { connect: { id: categoryId } },
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
  await prisma.storeItem.update({
    where: { id: id },
    data: {
      title: title && title,
      price: price && price,
      description: description && description,
      categoryId: categoryId,
    },
  });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  await prisma.storeItem.delete({ where: { id } });
};

const searchForItems = async (req, res) => {};

module.exports = {
  getItemById,
  getItems,
  updateItem,
  deleteItem,
  searchForItems,
  createItem,
};
