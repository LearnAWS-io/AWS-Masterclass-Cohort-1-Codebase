import { writeFile } from "node:fs/promises";

import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const BUCKET_NAME = "learnaws-rocks";

const s3 = new S3Client({ region: "us-east-1" });

const getCmd = new GetObjectCommand({
  Bucket: BUCKET_NAME,
  Key: "ducky.jpgg",
});

try {
  const res = await s3.send(getCmd);
  await writeFile("ducky.jpg", res.Body);
  console.log("ducky downloaded");
} catch (error) {
  console.log("something went wrong:", error.message);
}
