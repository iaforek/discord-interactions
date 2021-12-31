'use strict';

const nacl = require('tweetnacl');

// Your public key can be found on your application in the Developer Portal
const PUBLIC_KEY = 'APPLICATION_PUBLIC_KEY';

module.exports.hello = async (event) => {
  console.log(event); // You can find event in AWS CloudWatch Logs

  const signature = event.headers['x-signature-ed25519']; // Discord sends this header lowercased.
  const timestamp = event.headers['x-signature-timestamp']; // Discord sends this header lowercased.
  const { body } = event;

  let isVerified;
  let error;
  try {
    isVerified = nacl.sign.detached.verify(
      Buffer.from(timestamp + body),
      Buffer.from(signature, 'hex'),
      Buffer.from(PUBLIC_KEY, 'hex')
    );
  } catch (e) {
    error = e;
  }

  if (error || !isVerified) {
    return { statusCode: 401, body: 'invalid request signature' };
  }

  // Return ACK for PING
  return {
    statusCode: 200,
    body: JSON.stringify({
      type: 1,
    }),
  };
};
