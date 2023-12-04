module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'local',
        providerOptions: {
          sizeLimit: 10000000,
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });
