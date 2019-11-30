import { NowRequest, NowResponse } from '@now/node';

export default (_req: NowRequest, res: NowResponse) => {
  if (_req.query.password && _req.query.password === process.env.OPMC_MEMBER_PASSWORD) {
    res.status(200).send(true)
  } else {
    res.status(200).send(false)
  }
};
