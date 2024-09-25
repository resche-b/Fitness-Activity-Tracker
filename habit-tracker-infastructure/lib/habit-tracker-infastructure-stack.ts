import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';


export class HabitTrackerInfastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const sleepLogsTable = new dynamodb.Table(this, 'SleepLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'LogTimestamp', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    const waterLogsTable = new dynamodb.Table(this, 'WaterLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'LogTimestamp', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    const caloriesLogsTable = new dynamodb.Table(this, 'CaloriesLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'LogTimestamp', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    const stepLogsTable = new dynamodb.Table(this, 'StepsLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'LogTimestamp', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    const weightLogsTable = new dynamodb.Table(this, 'WeightLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'LogTimestamp', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    // Define Lambda function for sleep logs (Example for sleepLogs)
    const sleepLogsLambda = new lambda.Function(this, 'SleepLogsHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: 'lambda-sleep-logs.handler',  // Pointing to the correct file and handler function
      code: lambda.Code.fromAsset('Lambda'), // Folder where your Lambda code is located
      environment: {
        SLEEP_LOGS_TABLE_NAME: sleepLogsTable.tableName,  // Pass table name as an environment variable
      },
    });

    sleepLogsTable.grantReadWriteData(sleepLogsLambda);

    const api = new apigateway.RestApi(this, 'Habit-Tracker-Api', {
      restApiName: 'Habit-Tracker-API',
    });

    const sleepLogsResource = api.root.addResource('sleeplogs');
    
    sleepLogsResource.addMethod('GET', new apigateway.LambdaIntegration(sleepLogsLambda));
    sleepLogsResource.addMethod('POST', new apigateway.LambdaIntegration(sleepLogsLambda));
    sleepLogsResource.addMethod('PUT', new apigateway.LambdaIntegration(sleepLogsLambda));
    sleepLogsResource.addMethod('DELETE', new apigateway.LambdaIntegration(sleepLogsLambda));

  }
}
