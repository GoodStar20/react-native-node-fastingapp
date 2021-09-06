import express from "express";
import User from "./Modules/DBCommon/Users/UserSchema";

const router = express.Router();

router.get("/users/all", async (req, res) => {
  const { sort, curpage, subscribed } = req.query;
  const find = subscribed === "true" ? { activeSubscription: subscribed } : {};

  const key = { [`${sort}`]: "asc" };
  const skip = Number(curpage) * 5;

  const counts = await User.countDocuments(find);
  const result = await User.find(find, null, {
    sort: key,
    skip: skip,
    limit: 5,
  });

  res.send({ result: result, counts: counts });
});

router.get("/users/:id", async (req, res) => {
  const { id } = req.params;

  await User.find({ _id: id }, function (err, result) {
    if (err) {
      return;
    }
    res.send(result);
  });
});

router.post("/users/update", async (req, res) => {
  const { id, data } = req.body;

  await User.updateOne(
    { _id: id },
    {
      $set: data,
    },
    { upsert: false },
    function (err) {
      if (err) {
        return err;
      } else {
        res.sendStatus(200);
      }
    }
  );
});

export default router;
