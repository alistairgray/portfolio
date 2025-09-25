# Creating your custom Action Serializer Plugin with ADS Development Kit (ADK)

This tutorial covers how to write the custom Action Serializer Plugin. You will need this plugin to serialize your action instances into binary, so that they can be interpreted by your Target Unit software. Whilst the Platform does have a default Action Serializer Plugin (for testing purposes), this custom plugin is the one you should use.
If you are familiar with creating custom processors in the Relay Engine service, this tutorial should feel very familiar as there are some overlaps.

## Tutorial Prerequisites
• You have locally installed Maven and Java 11
• The plugin development should be within a Maven project
• Also, all the preparation and system set-up details can be found in the same chapter of the Writing and uploading a custom processor tutorial on Relay Engine service located here.

## Project Set up
When authoring any Java plugin for the Leanspace platform, you must bundle all of the dependencies of the plugin into an Uber-Jar (also known as a Fat Jar). This will be the basis of this tutorial.
ADS Development Kit (ADK)
The Leanspace Action Dispatch System Development Kit (ADK) provides a sample project showing how to accomplish this using Maven to build the project, and the maven-shade-plugin to build the Uber-Jar. You can find out more about the SDK in the next section below.
Importing the ADS Development Kit (ADK) to your project
Once you have completed the project set up, you will need to import the ADS Development Kit (ADK). The ADS Development Kit (ADK) is a starter development kit developed and maintained by Leanspace.
How to import the SDK
In this section, you will need to import the SDK by adding the dependency within Maven.
Update Maven settings
Within your Maven settings (either $M2_HOME/conf/settings.xml or ${user.home}/.m2/settings.xml) modify the configuration to include the url to the sdk and your Leanspace credentials. The ${TOKEN} should be replaced with the access token provided by the Leanspace support. Be aware that the user-specific settings.xml is dominant.
settings.xml example
Update POM.XML
Now that the settings have been completed, you will need to update your pom.xml file. It’s purpose is to include the SDK, the plugin to build with Maven, a plugin for detecting vulnerabilities, and a plugin to create a fatJar. You need to perform this step as it will allow you to create your own action serializer plugin and package it together so that it works correctly with Leanspace.
Checking for vulnerabilities
To check for vulnerabilities, we recommend to use the maven plugin dependency-check-maven which generates a report named 'dependency-check-report.html' in the 'target/' directory of the project. Leanspace ensures that no security issues pose threats when using this SDK. In some libraries, there are detected vulnerabilities, but which are no threat. For example, in spring-core-5.3.23.jar, there is one detected vulnerability: NVD - CVE-2016-1000027. Be aware that false positives can be generated, so you will need to read the vulnerabilities descriptions carefully (ex: for the library spring-cloud-aws-core-2.2.6.RELEASE.jar which is referenced in our SDK).
Creating an Action Serializer
Now that you have set up the project and its dependencies, it is now time for you to create your own action serializer plugin.
Action Serializer Interface Implementation
To create your own action serializer plugin you need to implement an Action Serializer interface. An interface in Java is a blueprint of a class that contains static constants and abstract methods. It's like a contract that implementing classes must fulfill.
About the Action Serializer
The Action Serializer interface contains one abstract method, serializeAction() (reworked from transformCommand()), which must be implemented by any class that uses this interface. The method takes an ActionSerializationParameters object (reworked from CommandTransformationParameters) as a parameter and returns an ActionSerializationResult object (reworked from CommandTransformationResult).
Breakdown of what the  method does
It transforms an action instance (reworked from command) to a binary format that can be read by the Target Unit (reworked from asset) to which you want to transmit this action instance.
If there are any issues during the serialization process, it throws a SerializationException (reworked from TransformationException). This exception contains a list of serialization errors (reworked from transformationErrors) which can be included in the returned ActionSerializationResult.
If the serialization is successful, it returns the action binary. This is an ActionSerializationResult object which includes a binary representation of the action instance. This binary can be stored along with the Action Instance.
If the transformation fails, it returns a list of errors. These errors can be passed to the method that called serializeAction() for further handling. The class implementing this interface must be stateless. The Action Serializer object is not stored in memory between executions of the serializeAction function.
The ActionSerializationParameters object contains the Action Instance (reworked from Command). This Action Instance contains all of the information required to model a teleaction for your spacecraft based on Action Blueprint (reworked from Command Definition).
An Action Instance has the following attributes (reworked from Command attributes):
ATTRIBUTE
TYPE
ALWAYS PRESENT
DESCRIPTION
PROVIDED BY
id
UUID
yes
Internal id of the Action Instance in our database
System
name
String
yes
Action Instance name (human readable)
Inherited from Action Blueprint
identifier
String
yes
Action Instance identifier
Inherited from Action Blueprint
actionMetadata (reworked from CommandMetadata)
ActionMetadata
no
Action Instance metadata
Inherited from Action Blueprint
actionArguments (reworked from CommandArguments)
ActionArguments
no
Action Instance arguments
Definition Inherited from Action Blueprint. Values completed by User when adding Action Instance to the Holding Bay (reworked from Queue).
payload
byte array
no
Action Instance transmission payload
System (via the Action Serializer)
executionTime
Instant
no
Execution time of the Action Instance
System
Handling errors of your plugin
Your Action Serializer Plugin should catch all and not throw any exceptions. If an error occurs within your plugin, the plugin should handle the error, and return a list of Serialization Errors (reworked from TransformationErrors) to the caller.
The text description of the Serialization Errors will be returned to the user, who is staging the action instance to the Holding Bay (reworked from Release Queue). If the error list is non-empty, then the action serialization is considered failed, and the action instance is not saved in the Holding Bay.
Preparing your custom plugin to work with Leanspace
So far you have learned how to create the dependencies and write your own custom plugin. The final step involved is to take your plugin and build a jar file, in this tutorial’s case, using the Maven service.
Starting
Open Maven from your sidebar, and under the Lifecycle tab, choose the options clean and install. Then hit run.
Accessing the Jar file
Once you have confirmed that the build has been successful, you can navigate to your jar file within the target folder.
If you are not happy with your plugin name, you cannot edit the jar file name as it will not match the internal name. Instead, go into your pom.xml file and add <finalName>yourPluginsName</finalName> on the first line under the build tags. You will then need to repeat the previous step of running clean and install to rebuild the file.
Testing your Action Serializer Plugin
You have two options to test your Action Serializer Plugin. You can use Leanspace’s test endpoint, or you can attach your newly created plugin to the Holding Bay (reworked from release queue) and try to add an action instance to one of the dispatch plans (reworked from command sequences) linked to the Holding Bay.
Testing without linking to a Holding Bay
The Leanspace Plugins repository provides an endpoint to test your Action Serializer Plugins without linking them to the Holding Bay.
Testing with linking to a Holding Bay
Another way to test if your Action Serializer Plugin functions well, is to attach it to the Holding Bay, create a Dispatch Plan linked to this bay, and then create an Action Instance inside of this Dispatch Plan. Your plugin will be executed at the action instance creation. If you want to properly test your Action Serializer, you have to define the Action Blueprint and Action Instance compatible with your Target Unit software.