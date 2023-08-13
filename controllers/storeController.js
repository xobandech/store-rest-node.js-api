import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getItems = async (req, res) => {
  return await prisma.storeItem.findMany().then((res) => res.json());
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  return await prisma.storeItem
    .findUnique({ where: { id: id } })
    .then((res) => res.json());
};
const createItem = async (req, res) => {
    const { title, price, description, categoryId } = req.body;
  
    try {
      const newItem = await prisma.storeItem.create({
        data: {
          title,
          description,
          price,
          category: { connect: { id: categoryId } }
        },
      });
  
      res.status(201).json(newItem);
    } catch (error) {
      console.error('Error creating item:', error);
      res.status(500).json({ error: 'An error occurred while creating the item.' });
    }
  };
  
  module.exports = { createItem };
  

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

const searchForItems = (req, res) => {};
