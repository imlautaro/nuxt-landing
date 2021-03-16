import { VercelRequest, VercelResponse } from '@vercel/node'

export default (req: VercelRequest, res: VercelResponse): void => {
	res.status(200).send('pong!')
}
