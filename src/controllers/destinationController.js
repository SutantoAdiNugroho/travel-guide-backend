const prisma = require('../config/prisma');

exports.getAllDestinations = async (req, res, next) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    const destinations = await prisma.destination.findMany({
      take: Number(limit),
      skip: Number(offset),
      select: { id: true, name: true, location: true, imageUrl: true, shortDescription: true, category: true }
    });
    res.json({ success: true, data: destinations });
  } catch (err) {
    next(err);
  }
};

exports.getDestinationById = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) return res.status(400).json({ message: 'Invalid ID' });

    const destination = await prisma.destination.findUnique({ where: { id } });
    if (!destination) return res.status(404).json({ message: 'Destination not found' });

    res.json({ success: true, data: destination });
  } catch (err) {
    next(err);
  }
};