import service from './items.service';
import asyncErrorBoundary from '../errors/asyncErrorBoundary';



async function itemExists(req, res, next) {
  const item = await service.read(req.params.item_id);
  if (item) {
    res.locals.item = item;
    return next();
  }
  next({ status: 400, message: "item cannot be found." });
}

async function create(req, res, next) {
  const newItem = { ...req.body.data };
  const data = await service.create(newItem);
  res.status(201).json({ data: data });
}

async function list(req, res) {
  const data = await service.list();
  res.json({ data: data });
}

async function read(req, res) {
  const { item: data } = res.locals;
  res.json({ data });
}

async function update(req, res) {
  const updatedItem = {
    ...req.body.data,
    item_id: res.locals.item.item_id,
  };
  const data = await service.update(updatedItem);
  res.json({ data });
}

async function destroy(req, res) {
  const { item } = res.locals;
  await service.delete(item.item_id);
  res.sendStatus(204);
}

export default {
  create: [asyncErrorBoundary(create)],
  read: [asyncErrorBoundary(itemExists), asyncErrorBoundary(read)],
  update: [asyncErrorBoundary(itemExists), asyncErrorBoundary(update)],
  delete: [asyncErrorBoundary(itemExists), asyncErrorBoundary(destroy)],
  list: [asyncErrorBoundary(list)],
};
