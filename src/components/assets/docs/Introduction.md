# Introduction: Action Instances with Holding Bays

Action Instances with Holding Bays is a new paradigm introduced to the Action Dispatch System. The change means that the Action Instances that you create are ordered in Dispatch Plans.

This new approach is currently under development and there are goals to integrate Dispatch Plans with the Passes service for transmission planning.

When Action Instances need to be transmitted, they are staged from the Dispatch Plans to the Holding Bay. The Holding Bay creates a set of API calls, which allows a transmission component to execute the transmission at its specified time. The Holding Bays will be natively integrated with the service, Relay Engine (the transmission component).

The complexity of converting the logical Action Instances to the appropriate binary data is handled by a Serialization Plugin (binary generation per Action Instance). The creation of the final transmission payload is delegated to a transmission component, and therefore there is no such thing as Protocol Transformers in the Holding Bays API suite.

To build your Action Serializer, you need to use the ADS Development Kit (ADK) provided by the Action Dispatch System. The Holding Bay paradigm is compatible only with ADS Development Kit (ADK).
Action Instances are created based on Action Blueprints. The same Action Blueprints can also be used to create ## Action Instances within Command Queues.
You can find a usage example on the Holding Bay API Workflow page.

The new paradigm in the Action Dispatch System is based on the Holding Bays. As mentioned before, the Holding Bay is an entity on which we rely for the Action Instances transmission.
When you start using this paradigm, the first thing that you create for your Target Unit is a Holding Bay. For each Target Unit you can create only one Holding Bay.

The Holding Bay fulfills multiple functions:
• Keeps the information about the plugin and the serialization strategy used for the Action Instances binary generation.
• Can keep transmission metadata, such as number of packets, Action Instances, bytes sent to the Target Unit since the beginning.
• Place where Action Instances are referenced for the transmission. The transmission component (natively Relay Engine service) is retrieving Action Instances from the Holding Bay.
• The Dispatch Plans are attached to a Holding Bay.
For high transmission performance, the transmission phase mainly consists of staging the Action Instances in a Holding Bay and then retrieving them. This ensures good transmission performance, as the preparation actions are taking place in the Dispatch Plans.

## Action Serialization Strategy
On a Holding Bay, it is possible to specify which serialization strategy should be applied on the Action Instances that were not transmitted yet.
Here is how the serialization strategy choice impacts the binary generation:
• NO_SERIALIZATION: If you want to generate binary outside of the Action Dispatch System, choose this option. In this case, no plugin is required and no binary will be generated in the Action Dispatch System.
• TEST: If you want to test the transmission workflow without getting a binary that fits the format awaited by your Target Unit, choose this option. A built-in plugin will be used, so there is no need to link to a custom plugin. The binary will contain: command_identifier, execution_time, metadata and arguments.
• USE_PLUGIN: If you would like to generate a binary for a standalone, you must choose this option. You will need to create and upload your custom Serialization Plugin and then link it to the Holding Bay. The generated binary in this case will fit the needs of your Target Unit, as your plugin will be developed to properly do it.

## Dispatch Plan

A Dispatch Plan is an entity in which Action Instances live. Each Dispatch Plan is linked to a single Holding Bay and to one specific Target Unit. In a Dispatch Plan, you can create Action Instances from your Action Blueprints, update, and delete them.

### Changing the order of Action Instances
You can also change the order of Action Instances in a Dispatch Plan. This order is respected afterwards by the Holding Bay for the transmission (unless there are some specific rules in the transmission component). You can move Action Instances between the Dispatch Plans of one Holding Bay.
Once you have created a Dispatch Plan and added your chosen Action Instances you then need to reference them in the Holding Bay. Before this point, you can change the order of the Action Instances, but after referencing them, they will be locked and no further actions, such as changing the order, can take place.

This locking is to keep the proper history of actions on Action Instances. Even if they were not transmitted but just removed from the Holding Bay, the Dispatch Plan stays blocked and cannot be used again.

### Action Instances
In this paradigm, Action Instances are created inside of the Dispatch Plans. New Action Instances, or as we call them DP-Action Instances (DP stands for Dispatch Plan) provide more information compared to the Commands in Command Queues.

New Action Instances have the following new fields:
• dispatchPlanId and holdingBayId which helps to identify where the Action Instance belongs.
• activityId - in case an Action Instance was created from an activity, we can see from which activity it was created.
• stagedAt, transmittedAt, abortedAt helps to follow the Action Instance in time through its lifecycle.
• tags - on new Action Instances tags can be added.
• state - you can define and manage your own Action Instances lifecycle (the Action Dispatch System internal lifecycle is handled by the status field).
• transmission related fields including metadata, binary or json payload.
Even though all the Action Instances live in the Dispatch Plans, you are still able to retrieve all the Action Instances of the Target Unit (upcoming and past) independently of the sequence