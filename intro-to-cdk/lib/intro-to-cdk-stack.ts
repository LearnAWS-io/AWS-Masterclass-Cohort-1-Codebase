import * as cdk from "aws-cdk-lib";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class IntroToCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, "IntroToCDKBucket", {
      bucketName: "i-love-aws-101",
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    // import an existing bucket
    const rocksBucket = Bucket.fromBucketAttributes(
      this,
      "ImportedAWSRocksBucket",
      {
        bucketName: "learnaws-rocks",
      }
    );

    new CfnOutput(this, "bucket-name", {
      value: rocksBucket.bucketName,
    });
  }
}
