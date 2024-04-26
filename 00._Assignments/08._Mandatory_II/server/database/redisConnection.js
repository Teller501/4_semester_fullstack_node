import { createClient } from 'redis';

const client = createClient({
    password: '9ovYOTYGvyeZoqvee3gomuwh3YZDkPH7',
    socket: {
        host: 'redis-15046.c300.eu-central-1-1.ec2.redns.redis-cloud.com',
        port: 15046
    }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

export default client;