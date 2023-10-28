import { Account, Client, Databases } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('653696ada0b50a54f37d'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
export const database = new Databases(client);
