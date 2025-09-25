# Staging Action Instances via a Holding Bay

This tutorial will teach you how to prepare and transmit the action instances via the holding bay. There are two sections that will be covered: configuration and transmission. The configuration section covers how to create a holding bay and to set up a transmission.
## Prerequisites
• An existing Target Unit within the Target Registry service.
• Knowledge of the Relay Engine service or an alternative transmission/agent system.
• Knowledge of Java.
• Knowledge of Docker (if using the Relay Engine service).
## Steps
This section will cover how to:
Configuration
• Create and test your serialization plugin.
• Create a holding bay.
Transmission
• Create one or multiple action blueprints for your Target Unit.
• Create a dispatch plan linked to your holding bay.
• Create action instances inside of your dispatch plan.
• Reorder all action instances or change the position of one action instance in a dispatch plan if needed. You can also move one or multiple action instances from your current dispatch plan to another one. However, you need to create this other dispatch plan before performing the move.
• Stage your action instances to the holding bay.
Configuration Phase
### Create an Action Blueprint
This is your first starting point when working with the Action Dispatch System. By creating an Action Blueprint, you are creating a base template to use when creating an action instance. As Action Blueprints are linked to a Target Unit from the Target Registry service, you will need to ensure that you have created and configured a Target Unit prior to creating an Action Blueprint.
Create an Action Serialization Plugin
Now that an Action Blueprint has been created, you will need to create a plugin to transform the action instances into a binary format. This plugin will serialize the action payload. For the full tutorial, go here.
Create a Holding Bay
Holding Bays are a way to prepare for your upcoming pass. At this stage, the work required is to create the configuration, which contains your Target Unit ID and the type of action serialization that will occur during the pass phase.
You also have the option to have NO_SERIALIZATION (if you want to generate binary outside of the Action Dispatch System) or to initiate a TEST. In these cases, the action instances from the dispatch plan will not be transformed using a custom plugin. If you choose USE_PLUGIN, you must create and upload your custom Serialization Plugin and link it to the Holding Bay.
Part of the response from the creation of the Holding Bay will give you an ID, which you will need for creating a Dispatch Plan.
Create a Dispatch Plan and add Action Instances to it
Dispatch Plans are how you group the action instances that you wish to send to your Target Unit. They are linked to a Holding Bay. You will first need to create the Dispatch Plan before adding action instances to it.
Adding State to the Dispatch Plan
This is a recommended step if you plan to use the Relay Engine service, which enables you to update the state of your Dispatch Plan when the processing steps have been completed. The state is a string data type, so you can choose what to call each state. You can simply modify the original Dispatch Plan to reflect the addition.
Create and add Action Instances to the Dispatch Plan
Now that the Dispatch Plan has been created, you can use the ID that was given in the response to its creation. In this step, you will create an Action Instance that is based off of an Action Blueprint.
Execution Time For the tutorial’s purposes, the execution time has been included for when the Target Unit should execute the action at a specific point. Arguments As arguments have dynamic values, you only have to modify them within attributes object associated with the Action Blueprint.
Stage your Dispatch Plan to the Holding Bay
This tutorial is now at the end of the pre-transmission phase. At this stage, all of the configuration has been completed. Now you need to update the holding bay with the dispatch plan (known as enqueue in the original API).
Once you have completed this step, you will have ready:
• The Target Unit to receive your action instances.
• A sequence of action instances, which contain their execution times.
Lock your Holding Bay (Optional)
While locking your Holding Bay is an optional step, if you are not using the Relay Engine service it is recommended that you perform this action. If you are using the Relay Engine service, you should not lock the Holding Bay as the Relay Engine service will manage the lock/unlock process for you. You can use a lock so that you will be the only authorized person to send or ‘retrieve’ the action instances for transmission. That way you will have complete control over the transmission.
To initiate the lock, you only need to send the PUT request to the appropriate endpoint. In response, you will receive the lock ID that you can use to lock and unlock.
‘Retrieving’ Action Payloads from your Holding Bay for transmission
At this point, you are now in the pass phase. The goal with this step is to take one or more action instances (up to 100 action instances at a time) out of the holding bay and send them to the transmission service. In the tutorial’s case, it is to send them to the Relay Engine service.
Once this has been sent, it is now up to the Relay Engine service (or your transmission service) to handle the processing and transmission of your data flows to your Target Unit.
Transmitting your Action Instances with Relay Engine
In this part of the tutorial, you will learn how to manage the flow of the action instance from your ground software to your Target Unit. To do this, it is strongly recommended that you are familiar with how to build a Route file.
The goals with this tutorial are to:
• Build a Route file, which will centralize your data flows.
• Demonstrate how a Route functions.
• Understand and reference the processors in the Route file.
• Understand and use the Action Dispatch Connector (Reworked from Command Connector).
• Run the Route file in Docker.
Data Transformation Configuration
At the top of the Route file, in the beans section, processors are listed.
Action State Processor
First is the Action State Processor. It’s default behavior is to modify the state of the Dispatch Plan so that you can keep track of the transmission.
Action Metadata Processor
Second is the Action Metadata Processor. This is a way for you to update the metadata of your Holding Bay. A use case would be to track the number of times an action instance has been transited through Relay Engine.
Flow for when your action instance(s) is received by Relay Engine
When your action instances are received by the Relay Engine service, a number of things happen in parallel.
Holding Bay Lock
The first is a lock to your Holding Bay. If you are using the Relay Engine service with the Action Dispatch System, you do not need to lock the holding bay as the Relay Engine service will do it automatically. Once it detects that there are no further action instances to send, then the holding bay will be unlocked.
Acknowledgements
The Relay Engine service will send acknowledgements to two areas:
1. State: A field that you can specify when creating a Dispatch Plan.
2. Status: An internal Leanspace field that you can query via an API call.
Updating State
The Action State Processor updates your Action Instance’s State within the Holding Bay. This will occur when all of the processing steps have been completed successfully.
Querying the status of your Action Instance transmissions
The Status is an internal field handled by the Action Dispatch System. When your action instances have been successfully transmitted, the Relay Engine service will update the status of your action instances.
You can check the status using several scenarios:
• Holding Bay Summary: Gives a summary of how many action instances are enqueued (ready to be retrieved) and how many have been retrieved but not yet acknowledged.
• Read the enqueued action instances: Allows you to "read" the enqueued Action Instances.
• Check which Action Instances have been retrieved but not yet acknowledged: Useful to check if the action instances have been successfully transmitted by the Relay Engine service.
• Retrieve a page of action instances according to provided filters: If you want to know if an action instance has been acknowledged, or its status during the transmission, use this endpoint and filter by status. The types of statuses include:
    ◦ STAGED
    ◦ QUEUED
    ◦ POPPED (Retrieved)
    ◦ ABORTED
