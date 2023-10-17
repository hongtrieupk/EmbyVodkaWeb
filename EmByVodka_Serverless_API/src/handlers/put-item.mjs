import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

import ProductModel from '../model/product-model.mjs';

const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const tableName = process.env.PRODUCT_TABLE;

export const putItemHandler = async (event) => {
    if (event.httpMethod !== 'POST') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }

    console.info('received:', event);

    const body = JSON.parse(event.body);
    if (!body.id || !body.name) {
        throw new Error(`Bad request, Invalid product data`);
    }

    const product = Object.assign(new ProductModel(), body);

    var params = {
        TableName: tableName,
        Item: product
    };

    try {
        const data = await ddbDocClient.send(new PutCommand(params));
        console.log("Success - item added or updated", data);
    } catch (err) {
        console.log("Error", err.stack);
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(body)
    };

    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
