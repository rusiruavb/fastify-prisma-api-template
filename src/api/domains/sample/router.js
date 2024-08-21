const sampleRouter = async (fastify) => {
  fastify.route({
    method: 'GET',
    url: '/',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
            params: {
              type: 'object',
              properties: {
                id: { type: 'string' },
              },
            },
          },
        },
        500: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler: async (request, reply) => {
      return reply.status(200).send({ message: 'Sample API' });
    },
  });

  fastify.route({
    method: 'GET',
    url: '/params',
    schema: {
      title: 'Sample API with params',
      description: 'Sample API with params',
      querystring: {
        type: 'object',
        required: ['id'],
        properties: {
          id: { type: 'string', nullable: false },
        },
      },
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
            params: {
              type: 'object',
              properties: {
                id: { type: 'string' },
              },
            },
          },
        },
      },
    },
    handler: async (request, reply) => {
      return reply
        .status(200)
        .send({ message: 'Sample API', params: request.query });
    },
  });
};

export default sampleRouter;
