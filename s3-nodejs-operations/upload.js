import { readFile } from "node:fs/promises";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const BUCKET_NAME = "learnaws-rocks";

const s3 = new S3Client({ region: "us-east-1" });

const duckyBuff = await readFile("./duck-gdc7f25a14_1280.jpg");

const putCmd = new PutObjectCommand({
  Bucket: BUCKET_NAME,
  Key: "ducky.jpg",
  // Body: "everything is just simple",
  Body: duckyBuff,
});

const res = await s3.send(putCmd);

console.log(res);
