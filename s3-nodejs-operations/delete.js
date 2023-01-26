import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

const BUCKET_NAME = "learnaws-rocks";

const s3 = new S3Client({ region: "us-east-1" });

const delCmd = new DeleteObjectCommand({
  Bucket: BUCKET_NAME,
  Key: "ducky.jpg",
});

const res = await s3.send(delCmd);

console.log(res);
