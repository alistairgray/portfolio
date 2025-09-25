# Using Action Instances with Relay Engine

## Action Dispatch Connector
To use Action Instances with Relay Engine, you will need to use the Action Dispatch Connector by referencing it in your Relay Engine file.
This Action Dispatch endpoint (leanspace-action-dispatch:) will attempt to synchronize your Holding Bay with your Dispatch Plan at a given interval in milliseconds.
### Requirements
• Leanspace credentials
• Holding Bay ID
• Action Dispatch System and Relay Engine services
• Docker (To run the Relay Engine file)
#### Example
Here is a route.yaml file to send an Action Instance. It works by receiving Action Instances from the Action Dispatch System service, which requires your credentials as parameters. As an output, this example creates a log file and saves it locally.
#### Additional parameters
In this example, the parameter maxNumberOfActionInstances (reworked from maxNumberOfCommands) has been used with the value of 1, which means that it will only transmit 1 Action Instance at a time.
You can also use the parameter maxSizeOfBinaryPayloadsInBytes, which controls the maximum size of your binary payload.
You also can use all the parameters related to the SchedulerEndpoint from Camel, except synchronous which is forced to true. The maxNumberOfActionInstances (reworked from maxNumberOfCommands) and maxSizeOfBinaryPayloadsInBytes parameters cannot be set at the same time.
## How it works
When an Action Instance (reworked from Command) is available for consumption in the Leanspace platform the Action Dispatch component (reworked from Command component) will do the following steps automatically:
1. Lock the Holding Bay (reworked from Release Queue).
2. Pull the number of Action Instances (reworked from commands) requested (decided by byte-size or by the number of Action Instances parameter).
3. Create the camelMessage to be available in the processor (see route-public).
When all the camel processors have passed without errors the Action Dispatch component (reworked from Command component) will do the following:
### Acknowledging the Action Instance
If the Action Instance (reworked from Command) being processed is the last Action Instance (reworked from Command) then it will unlock the Holding Bay (reworked from release queue). To understand the status of your Action Instances (reworked from Commands), see here.
If there is an error in one of the camel processors, then you will need to manage the problem resolution manually and acknowledge or unlock the Holding Bay (reworked from Release Queue) by following the API docs here.
Due to the lock in the Holding Bay (reworked from Release Queue), you can have only one Relay Engine configuration (reworked from Route) that processes the Action Instance (reworked from command) for a Holding Bay (reworked from release queue).
Start the Relay Engine configuration - Docker
Now that you have constructed a Relay Engine file (reworked from route file), you need to call it from a Docker compose file or take the Docker run command and paste it into your terminal.
You can access this via the Console, see the tutorial below, or via an API GET request. You will need to ensure that you have Docker installed locally.