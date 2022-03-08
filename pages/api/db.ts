import { NowRequest, NowResponse } from '@vercel/node';

import db from '../../db.json';

export default function dbHandler(request: NowRequest, response: NowResponse) {
  // Public API

  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  // @ts-ignore
  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );

  const {
    bg,
    description,
    external: externalQuiz,
    questions,
    theme,
    title,
  } = db;
  const external = externalQuiz.length === 0 ? null : externalQuiz;

  response.json({
    bg,
    description,
    external,
    questions,
    theme,
    title,
  });
}
