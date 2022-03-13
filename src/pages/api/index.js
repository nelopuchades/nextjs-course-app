import nc from 'next-connect';

const handler = nc()
    .get((req, res) => {
      res.json({ message: 'Ok with GET' });
    })
    .post((req, res) => {
      res.json({ message: 'Ok with POST' });
    });

export default handler;
