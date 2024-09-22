import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class TrackerDatabaseStack extends cdk.Stack {
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

    const todoTable = new dynamodb.Table(this, 'TodoLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'TaskID', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    const monetaryLogsTable = new dynamodb.Table(this, 'MonetaryLogsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'TransactionID', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });

    const goalsTable = new dynamodb.Table(this, 'GoalsTable', {
      partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'GoalID', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, 
    });
  }
}
