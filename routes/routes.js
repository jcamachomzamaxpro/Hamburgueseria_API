const { MongoClient } = require("mongodb");
const { Router } = require("express");

const router = Router();

const client = new MongoClient(process.env.DDBB256);

const dbName = "Hamburgueseria";
const collections = {
  ingredientes: "Ingredientes",
  chefs: "Chefs",
  categorias: "Categorias",
  hamburguesas: "Hamburguesas",
};

// Endpoint 1
router.get("/endpoint-1", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection.find({ stock: { $lt: 400 } }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 2
router.get("/endpoint-2", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.categorias);
  const result = await collection.find().toArray();
  res.json(result);
  client.close();
});

// Endpoint 3
router.get("/endpoint-3", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.chefs);
  const result = await collection.find({ especialidad: "Carnes" }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 4
router.get("/endpoint-4", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection.updateMany({}, { $mul: { precio: 1.5 } });
  res.json(result);
  client.close();
});

// Endpoint 5
router.get("/endpoint-5", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.burger);
  const result = await collection.find({ chef: "ChefB" }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 6
router.get("/endpoint-6", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.categorias);
  const result = await collection.find().toArray();
  res.json(result);
  client.close();
});

// Endpoint 7
router.get("/endpoint-7", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection.deleteMany({ stock: 0 });
  res.json(result);
  client.close();
});

// Endpoint 8
router.get("/endpoint-8", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.burger);
  const result = await collection.updateOne(
    { nombre: "Clásica" },
    { $push: { ingredientes: "Nuevo Ingrediente :O" } }
  );
  res.json(result);
  client.close();
});

// Endpoint 9
router.get("/endpoint-9", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.burger);
  const result = await collection
    .find({ ingredientes: "Pan integral" })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 10
router.get("/endpoint-10", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.chefs);
  const result = await collection.updateOne(
    { nombre: "ChefC" },
    { $set: { especialidad: "Cocina Internacional" } }
  );
  res.json(result);
  client.close();
});

// Endpoint 11
router.get("/endpoint-11", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection
    .find()
    .sort({ precio: -1 })
    .limit(1)
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 12
router.get("/endpoint-12", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.burger);
  const result = await collection
    .find({ ingredientes: { $ne: "Queso cheddar" } })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 13
router.get("/endpoint-13", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection.updateOne(
    { nombre: "Pan" },
    { $inc: { stock: 100 } }
  );
  res.json(result);
  client.close();
});

// Endpoint 14
router.get("/endpoint-14", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection
    .find({ descripcion: { $regex: /clásico/i } })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 15
router.get("/endpoint-15", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.burger);
  const result = await collection.find({ precio: { $lte: 9 } }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 16
router.get("/endpoint-16", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.chefs);
  const result = await collection.countDocuments();
  res.json({ cantidad_chefs: result });
  client.close();
});

// Endpoint 17
router.get("/endpoint-17", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.categorias);
  const result = await collection
    .find({ descripcion: { $regex: /gourmet/i } })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 18
router.get("/endpoint-18", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.burger);
  const result = await collection.deleteMany({
    $expr: { $lt: [{ $size: "$ingredientes" }, 5] },
  });
  res.json(result);
  client.close();
});

// Endpoint 19
router.get("/endpoint-19", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.chefs);
  const result = await collection.insertOne({
    nombre: "ChefD",
    especialidad: "Cocina Asiática",
  });
  res.json(result);
  client.close();
});

// Endpoint 20
router.get("/endpoint-20", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection.find().sort({ precio: 1 }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 21
router.get("/endpoint-21", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection
    .find({ precio: { $gte: 2, $lte: 5 } })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 22
router.get("/endpoint-22", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection.updateOne(
    { nombre: "Pan" },
    { $set: { descripcion: "Pan fresco y crujiente" } }
  );
  res.json(result);
  client.close();
});

// Endpoint 23
router.get("/endpoint-23", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .find({ $or: [{ ingredientes: "Tomate" }, { ingredientes: "Lechuga" }] })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 24
router.get("/endpoint-24", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.chefs);
  const result = await collection.find({ nombre: { $ne: "ChefA" } }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 25
router.get("/endpoint-25", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection.updateMany(
    { categoria: "Gourmet" },
    { $inc: { precio: 2 } }
  );
  res.json(result);
  client.close();
});

// Endpoint 26
router.get("/endpoint-26", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.ingredientes);
  const result = await collection.find().sort({ nombre: 1 }).toArray();
  res.json(result);
  client.close();
});

// Endpoint 27
router.get("/endpoint-27", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .find()
    .sort({ precio: -1 })
    .limit(1)
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 28
router.get("/endpoint-28", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection.updateMany(
    { categoria: "Clásica" },
    { $push: { ingredientes: "Pepinillos" } }
  );
  res.json(result);
  client.close();
});

// Endpoint 29
router.get("/endpoint-29", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.chefs);
  const result = await collection.deleteMany({
    especialidad: "Cocina Vegetariana",
  });
  res.json(result);
  client.close();
});

// Endpoint 30
router.get("/endpoint-30", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .find({ ingredientes: { $size: 7 } })
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 31
router.get("/endpoint-31", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([
      { $match: { chef: "ChefC", categoria: "Gourmet" } },
      { $sort: { precio: -1 } },
      { $limit: 1 },
    ])
    .toArray();
  res.json(result[0]);
  client.close();
});

// Endpoint 32
router.get("/endpoint-32", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([
      { $unwind: "$ingredientes" },
      { $group: { _id: "$ingredientes", count: { $sum: 1 } } },
    ])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 33
router.get("/endpoint-33", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([{ $group: { _id: "$chef", cantidad: { $sum: 1 } } }])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 34
router.get("/endpoint-34", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([{ $group: { _id: "$categoria", cantidad: { $sum: 1 } } }])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 35
router.get("/endpoint-35", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([
      { $unwind: "$ingredientes" },
      {
        $lookup: {
          from: "ingredientes",
          localField: "ingredientes",
          foreignField: "nombre",
          as: "ingredientesData",
        },
      },
      {
        $group: {
          _id: "$chef",
          costoTotal: { $sum: { $sum: "$ingredientesData.precio" } },
        },
      },
    ])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 36
router.get("/endpoint-36", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const burgerCollection = db.collection(collections.hamburguesas);
  const hamburguesasIng = await burgerCollection.distinct("ingredientes");
  const ingredientesCollection = db.collection(collections.ingredientes);
  const result = await ingredientesCollection
    .find({ nombre: { $nin: hamburguesasIng } })
    .toArray();
  res.json(result);
  client.close();
});
// Endpoint 37
router.get("/endpoint-37", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([
      {
        $lookup: {
          from: "categorias",
          localField: "categoria",
          foreignField: "nombre",
          as: "categoriasData",
        },
      },
      {
        $project: {
          _id: 0,
          categoria: "$categoriasData.nombre",
          descripcion: "$descripcion",
        },
      },
    ])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 38
router.get("/endpoint-38", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([
      { $unwind: "$ingredientes" },
      { $group: { _id: "$chef", ingredientesCount: { $sum: 1 } } },
      { $sort: { ingredientesCount: -1 } },
      { $limit: 1 },
    ])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 39
router.get("/endpoint-39", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([{ $group: { _id: "$categoria", precio: { $avg: "$precio" } } }])
    .toArray();
  res.json(result);
  client.close();
});

// Endpoint 40
router.get("/endpoint-40", async (req, res) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection(collections.hamburguesas);
  const result = await collection
    .aggregate([
      { $group: { _id: "$chef", hamburguesaCara: { $max: "$precio" } } },
      {
        $lookup: {
          from: "chefs",
          localField: "_id",
          foreignField: "nombre",
          as: "chefData",
        },
      },
      { $project: { _id: 0, "chefData.nombre": 1, hamburguesaCara: 1 } },
    ])
    .toArray();
  res.json(result);
});

module.exports = router;
