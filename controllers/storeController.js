import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getItems = async (req, res) => {
  return await prisma.storeItem.findMany().then((res) => res.json());
};

const getItemById = async (req, res) => {
 
};

const createPost = (req, res) => {};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

const searchForItems = (req, res) => {};
