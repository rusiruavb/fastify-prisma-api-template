import Fastify from 'fastify';
import pino from 'pino';
import pretty from 'pino-pretty';
import prismaPlugin from './api/plugins/prisma-plugin';
import api from './api';

const logger = pino(
  pretty({
    colorize: true,
    levelFirst: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname',
  }),
);

const createServer = async () => {
  const fastify = Fastify({ logger: logger });

  fastify.get('/', async (request, reply) => {
    return reply.status(200).send({ message: 'Posts API' });
  });

  try {
    await fastify.register(prismaPlugin);
    return (await api(fastify)).start();
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

createServer();
