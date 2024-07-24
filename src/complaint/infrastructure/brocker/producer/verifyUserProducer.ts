import { setupRabbitMQ } from '../../../../config/rabbitConfig';

const QUEUE = 'verify_user_id';

export const VerifyUserProducer = (userId: string): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
        const channel = await setupRabbitMQ('', QUEUE);
        const correlationId = generateUuid();
        const replyQueue = (await channel.assertQueue('', { exclusive: true, autoDelete:true,durable:false })).queue;

        channel.consume(
            replyQueue,
            (msg) => {
                if (msg && msg.properties.correlationId === correlationId) {
                    const response = JSON.parse(msg.content.toString());
                    resolve(response.exists);
                    channel.deleteQueue(replyQueue);
                }
            },
            { noAck: true }
        );

        channel.sendToQueue(QUEUE, Buffer.from(userId), {
            correlationId,
            replyTo: replyQueue,
        });
    });
};

const generateUuid = (): string => {
    return Math.random().toString() + Math.random().toString() + Math.random().toString();
};
