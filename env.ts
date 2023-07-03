 import { LoadEnv } from '@xpresser/env';

 const env = LoadEnv('.env', {
    castBoolean: true,
    required: ['API_KEY','APP_DOMAIN','APP_PORT'],
    endProcess: false,
});


export default env;
