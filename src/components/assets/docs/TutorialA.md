# Creating your custom Widget Plugin with the Widget SDK

This tutorial covers how to write the custom widget transformer plugin. You will need this plugin to transform your widgets into binary, so that they can be interpreted by your banana software.

Whilst there is a default widget transformer plugin (for testing purposes), this custom plugin is the one you should use.

> If you are familiar with creating custom widgets, this tutorial should feel very familiar as there are some overlaps. 

## Tutorial Prerequisites 
* You have locally installed Maven and Java 11
* The plugin development should be within a Maven project

# Project Set up
When authoring any Java plugin for the platform, you must bundle all of the dependencies of the plugin into an Uber-Jar (also known as a Fat Jar). This will be the basis of this tutorial.

## The Plugin SDK
The Widgets Plugin SDK provides a sample project showing how to accomplish this using Maven to build the project, and the maven-shade-plugin to build the Uber-Jar. You can find out more about the SDK in the next section below.

Also, all the preparation and system set-up details can be found in the same chapter of the Writing and uploading a custom processor tutorial on Routes service located here.

### Importing the Widgets Plugin SDK V2 to your project
Once you have completed the project set up, you will need to import the Widgets Plugin SDK v2.

> The Widgets Plugin SDK v2 is a starter development kit developed and maintained by Widgets Corp. 

### How to import the SDK
In this section, you will need to import the SDK by adding the Widgets-plugins-sdk within Maven as a dependency. Here’s how:

### Update Maven settings
Within your Maven settings (either $M2_HOME/conf/settings.xml or ${user.home}/.m2/settings.xml) modify the configuration to include the url to the sdk: https://maven.pkg.github.com/widgets/widgets-plugins-sdk and your Widgets Corp credentials.

The ${TOKEN} should be replaced with the access token provided by the Widgets Corp support.

> Be aware that the user-specific settings.xml is dominant

Here is an example of how it should look:

### settings.xml example
```xml
<settings>
  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>
  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>github</id>
          <url>https://maven.pkg.github.com/widget/widget-plugins-sdk</url>
        </repository>
      </repositories>
    </profile>
  </profiles>
  <servers>
    <server>
        <id>github</id>
        <username>widget-support</username>
        <password>${TOKEN}</password>
    </server>
  </servers>
</settings>
```

## Update POM.XML
Now that the settings have been completed, you will need to update your pom.xml file. It’s purpose is to include the SDK, the plugin to build with Maven, a plugin for detecting vulnerabilities, and a plugin to create a fatJar.

> You need to perform this step as it will allow you to create a your own Widgets transformer plugin and package it together so that it works correctly with Widget.

Here is an example of the pom.xml configuration:

```xml
<properties>
    <Widgets-plugins-sdk.version>2.1.2</Widgets-plugins-sdk.version>
    <maven-compiler-plugin.version>3.8.1</maven-compiler-plugin.version>
    <maven-shade-plugin.version>3.4.1</maven-shade-plugin.version>
    <dependency-check-maven.version>6.1.1</dependency-check-maven.version>
  </properties>

  <dependencies>

    <!-- Import Widgets plugin SDK -->
    <dependency>
      <groupId>io.widgets.plugins</groupId>
      <artifactId>widgets-plugins-sdk</artifactId>
      <version>${widgets-plugins-sdk.version}</version>
    </dependency>

  </dependencies>

  <build>
    <plugins>
      <!-- To build with maven -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>${maven-compiler-plugin.version}</version>
        <configuration>
          <source>11</source>
          <target>11</target>
        </configuration>
      </plugin>

      <!-- to build an überjar -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>${maven-shade-plugin.version}</version>
        <configuration>
          <createDependencyReducedPom>false</createDependencyReducedPom>
        </configuration>
        <executions>
          <execution>
            <phase>package</phase>
            <goals>
              <goal>shade</goal>
            </goals>
          </execution>
        </executions>
      </plugin>

      <!-- To detect vulnerabilities -->
      <plugin>
        <groupId>org.owasp</groupId>
        <artifactId>dependency-check-maven</artifactId>
        <version>${dependency-check-maven.version}</version>
        <executions>
          <execution>
            <goals>
              <goal>check</goal>
            </goals>
          </execution>
        </executions>
      </plugin>

    </plugins>
  </build>
```

### Checking for vulnerabilities

To check for vulnerabilities, we recommend to use the maven plugin dependency-check-maven which generates a report named ' dependency-check-report.html' in the 'target/' directory of the project. Widget Corp ensures that no security issues pose threats when using this SDK. In some libraries, there are detected vulnerabilities (see description below), but which are no threat :

> In spring-core-5.3.23.jar, there is one detected vulnerability: [NVD - CVE-2016-1000027](https://nvd.nist.gov/vuln/detail/CVE-2016-1000027).

Be aware that false positives can be generated, so you will need to read the vulnerabilities descriptions carefully (ex: for the library spring-cloud-aws-core-2.2.6.RELEASE.jar which is referenced in our SDK).

## Creating a Widgets transformer

Now that you have set up the project and its dependencies, it is now time for you to create your own Widgets transformer plugin.

### Widgets Transformer Interface Implementation

To create your own Widgets transformer plugin you need to implement a Widgets Transformer interface.

> #### Background
>
> An interface in Java is a blueprint of a class that contains static constants and abstract methods. It allows different classes to be able to use the same method(s) but execute them in their own way. It's like a contract that implementing classes must fulfill.

### About the Widgets Transformer
The `WidgetsTransformer` interface contains one abstract method, `transformWidgets()`, which must be implemented by any class that uses this interface. The method takes a `WidgetsTransformationParameters` object as a parameter and returns a `WidgetsTransformationResult` object.

## Breakdown of what the transformWidgets() method does
It transforms a Widgets to a binary format that can be read by the asset to which you want to transmit this Widgets.

If there are any issues during the transformation process, it throws a `TransformationException`. This exception contains a list of `transformationErrors` which can be included in the returned `WidgetsTransformationResult`.

If the transformation is successful, it returns the Widgets binary. This is a WidgetsTransformationResult object which includes a binary representation of the Widgets. This binary can be stored along with the Widgets.

If the transformation fails, it returns a list of errors. These errors can be passed to the method that called `transformWidgets()` for further handling.

> #### Important
>
> The class implementing this interface must be stateless. The Widgets Transformer object is not stored in memory between executions of the transformWidgets function.

Here is how this interface looks like:

```java
package io.widgets.plugins.customwidget.model.transformation.widget;

import io.widgets.plugins.customwidget.model.transformation.TransformationException;

/**
 * Interface to be implemented by any Widgets Transformer Plugin.
 */
public interface WidgetsTransformer {

  /**
   * Transform one Widgets to a binary readable by the asset you want to transmit this Widgets.
   *
   * <p>For exception handling, the Util class {@link TransformationException TransformationException} is provided
   * for easy error propagation inside the business logic code. Such an exception contains a list of transformationErrors
   * which can be put on the returned WidgetsTransformationResult.
   *
   * @param parameters The Widgets transformation parameters
   *
   * @return the Widgets binary which is persisted along the Widgets if the transformation is successful<br>
   *     a list of errors to be forwarded up to the caller if the transformation cannot be done
   */
  WidgetsTransformationResult transformWidgets(WidgetsTransformationParameters parameters);
}
```
The `WidgetsTransformationParameters` class encapsulates all the input parameters passed to the Widgets transformer plugin, and is shown below.

```java
public class WidgetsTransformationParameters {

  /**
   * The Widgets to be transformed into a binary
   */
  @NotNull
  private Widgets Widgets;
}
```
The `transformWidgets` method returns a `WidgetsTransformationResult` object.
```java
public class WidgetsTransformationResult {

  /**
   * The binary output data from the transformation.<br>
   * These contents will be read only if transformationErrors is empty.
   */
  private byte[] transmissionPayload;

  /**
   * Must be empty for a successful transformation, otherwise the other results will be ignored.
   */
  private List<TransformationError> transformationErrors;
}
```

As mentioned earlier, `WidgetsTransformationParameters` object contains the `transformWidgets`.

This Widgets object contains all of the information required to model a teleWidgets for your spacecraft based on Widgets Definition.

A Widgets has the following attributes:

ATTRIBUTE|TYPE|ALWAYS PRESENT|DESCRIPTION|PROVIDED BY
-----|-----|-----|-----|-----
id | UUID | yes | Internal id of the Widgets in our database | System
name | String | yes | Widgets name (human readable) | Inherited from Widgets Definition
identifier | String | yes | Widgets identifier | Inherited from Widgets Definition
WidgetsMetadata | WidgetsMetadata | no | Widgets metadata | Inherited from Widgets Definition
WidgetsArguments | WidgetsArguments | no | Widgets arguments | Definition Inherited from Widgets Definition. Values completed by User when adding Widgets to the Queue.
payload | byte array | no | Widgets transmission payload | System (via the Widgets Transformer)
executionTime | Instant | no | Execution time of the Widgets | System

## Handling errors of your plugin
Your Widgets Transformer plugin should catch all and not throw any exceptions. 

If an error occurs within your plugin, the plugin should handle the error, and return a list of TransformationErrors to the caller. 

The text description of the TransformationErrors will be returned to the user, who is adding the Widgets to the Release Queue. If the error list is non-empty, then the Widgets transformation is considered failed, and the Widgets is not saved in the queue.

The TransformationError class is defined as follows:

```java
public class TransformationError {

public static final String ERROR = "ERROR";

    public static class CommonTransformationErrorCodes {
    /**
     * Default error code which can be used to build a transformation error.
     */
    public static final String ERROR = "ERROR";
    /**
     * Error code to use on unexpected exception.
     */
    public static final String PLUGIN_EXCEPTION = "PLUGIN_EXCEPTION";
    /**
     * Error code to use if a required Metadata is missing.
     */
    public static final String MISSING_METADATA = "MISSING_METADATA";
    /**
     * Error code to use if a required Argument is missing.
     */
    public static final String MISSING_ARGUMENT = "MISSING_ARGUMENT";
  }

  /**
   * Common error codes for a Protocol Transformation
   */
  public enum ProtocolTransformationErrorCode {
    /**
     * Error code to use if the blob containing init data
     * in {@link ProtocolTransformationParameters ProtocolTransformationParameters} object cannot be parsed.
     */
    MALFORMED_INIT_DATA,
    /**
     * Error code to use if the blob containing init data
     * in {@link ProtocolTransformationParameters ProtocolTransformationParameters} object is empty (and should not).
     */
    MISSING_INIT_DATA,
    /**
     * Error code to use if the blob containing state data
     * in {@link ProtocolTransformationParameters ProtocolTransformationParameters} object cannot be parsed.
     */
    MALFORMED_STATE_DATA,
    /**
     * Error code to use if the serialization of the new state data fails.
     */
    STATE_DATA_SERIALIZATION_ERROR,
    /**
     * Error code to use if a specific Widgets payload is too large according to the protocol specification.
     */
    TOO_LARGE_Widgets_PAYLOAD
  }

  /**
   * Predefined error messages which can be used to build TransformationError objects.
   */
  public static class PredefinedMessages {
    public static final String MISSING_METADATA_ERROR_MESSAGE = "A Widgets Metadata is missing";
    public static final String MISSING_ARGUMENT_ERROR_MESSAGE = "A Widgets Argument is missing";
  }

  /**
   * Error code
   */
  private String code;

  /**
   * Error message
   */
  private String message;

  /**
   * Additional information which can be added to the transformation error.
   */
  @Singular
  private Map<String, Object> parameters = new HashMap<>();

  public static TransformationError missingNumericMetadata(String name) {
    return missingMetadata(name, "NUMERIC");
  }

  public static TransformationError missingTextMetadata(String name) {
    return missingMetadata(name, "TEXT");
  }

  public static TransformationError missingBooleanMetadata(String name) {
    return missingMetadata(name, "BOOLEAN");
  }

  public static TransformationError missingTimestampMetadata(String name) {
    return missingMetadata(name, "TIMESTAMP");
  }

  public static TransformationError missingTimeMetadata(String name) {
    return missingMetadata(name, "TIME");
  }

  public static TransformationError missingDateMetadata(String name) {
    return missingMetadata(name, "DATE");
  }

  private static TransformationError missingMetadata(String name, String type) {
    return TransformationError.builder()
        .code(CommonTransformationErrorCodes.MISSING_METADATA)
        .message(PredefinedMessages.MISSING_METADATA_ERROR_MESSAGE)
        .parameters(Map.of("name", name, "type", type))
        .build();
  }

  public static TransformationError missingNumericArgument(String name) {
    return missingArgument(name, "NUMERIC");
  }

  public static TransformationError missingTextArgument(String name) {
    return missingArgument(name, "TEXT");
  }

  public static TransformationError missingBooleanArgument(String name) {
    return missingArgument(name, "BOOLEAN");
  }

  public static TransformationError missingTimestampArgument(String name) {
    return missingArgument(name, "TIMESTAMP");
  }

  public static TransformationError missingTimeArgument(String name) {
    return missingArgument(name, "TIME");
  }

  public static TransformationError missingDateArgument(String name) {
    return missingArgument(name, "DATE");
  }

  public static TransformationError missingEnumArgument(String name) {
    return missingArgument(name, "ENUM");
  }

  public static TransformationError missingBinaryArgument(String name) {
    return missingArgument(name, "BINARY");
  }

  public static TransformationError missingArrayArgument(String name) {
    return missingArgument(name, "ARRAY");
  }

  private static TransformationError missingArgument(String name, String type) {
    return TransformationError.builder()
        .code(CommonTransformationErrorCodes.MISSING_ARGUMENT)
        .message(PredefinedMessages.MISSING_ARGUMENT_ERROR_MESSAGE)
        .parameters(Map.of("name", name, "type", type))
        .build();
  }

  public static TransformationError transformationError(String code, String message) {
    return TransformationError.builder().code(code).message(message).build();
  }

  public static TransformationError transformationError(String code, String message, String parameterKey, Object parameterValue) {
    return TransformationError.builder().code(code).message(message).parameter(parameterKey, parameterValue).build();
  }

  public static TransformationError transformationError(String code, String message, Map<String, Object> parameters) {
    return TransformationError.builder().code(code).message(message).parameters(parameters).build();
  }
}
```

## Preparing your custom plugin to work with Widgets

So far you have learned how to create the dependencies and write your own custom plugin. The final steps involved is to take your plugin and build a jar file, in this tutorial’s case, using the Maven service.

### Starting

Open Maven from your sidebar, and under the Lifecycle tab, choose the options clean and install. Then hit run

![maven-lifecycle](../../../../assets/images/maven-lifecycle.png)

### Accessing the Jar file

Once you have confirmed that the build has been successful, you can navigate to your jar file within the target folder.

> #### Changing your plugins's name
> If you are not happy with your plugin name, you cannot edit the jar file name as it will not match the internal name. Instead, go into your `pom.xml` file and add `<finalName>yourPluginsName</finalName>` on the first line under the build tags. 
>
> You will then need to repeat the previous step of running clean and install to rebuild the file.

It will look something like this:

```xml
<build>
        <finalName>custom-plugin</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.camel</groupId>
                <artifactId>camel-maven-plugin</artifactId>
                <version>${camel.version}</version>
            </plugin>
            ...

## Uploading and testing your plugin
Here are the final steps. 

### How to upload your plugin
When you have completed developing and testing your plugin, you  upload it to the platform. The Plugins repository provides an API for uploading and managing your Java plugins.

### API
*Endpoint*: https://api.widgets.io/plugins-repository/plugins

*Request*: POST

The request is consisted of two parts. The first part is your plugin fatjar file. The second one is the block containing the metadata of your plugin. Here are the list of the fields required in this second block:

* the type should be set to `Widgets_Widgets_TRANSFORMER_PLUGIN_TYPE`

* the `implementationClassName` must contain the full namespace of the implementing Java class

* the `name` is for your reference – by this name you are able to filter out the transformer via the API or recognize it in the dropdown on the UI.

* the `sdkVersion` must indicate the SDK version used to create your plugin in the semantic versioning specification. If you don't provide any version, your plugin can't be used by the Widget service. You can find the sdkVersion in the `Widgets-plugins-sdk.version` property of the pom.xml of your plugin.

> When uploading your own plugin, it may take several minutes for us to process the request and create it. For this reason, it might happen that the endpoint to test the plugin fails if you run it just after the upload is complete. Due to this, it is advisable to wait a couple of minutes before testing it. If the problem persists, please contact our support team.

Here is an example of the metadata block:

```javascript
{
  "type": "Widgets_Widgets_TRANSFORMER_PLUGIN_TYPE",
  "implementationClassName": "myWidgetsTransformer",
  "name": "Saturn Widgets Transformer",
  "description": "Transforming the Widgets for the Saturn satellite",
  "sdkVersion": "2.1.0"
}
```

## Testing your Widgets transformer Plugin
You have two options to test your Widgets transformer plugin. You can use Widget Corp's test endpoint, or you can attach your newly created plugin to the release queue and try to add a Widgets to one of the Widgets sequences linked to the release queue. See below for more details. 

### Testing without linking to a queue
The Plugins repository provides an endpoint to test your Widgets transformer plugins without linking them to the release queue. Here how you can do this.

### API
*Endpoint*: https://api.widgets.io/plugins-repository/test-executions

*Request*: POST

Even though the body request has only 3 fields, one of the fields is a structure of a Widgets. Here is a sample input Json that you can use to test the Widgets Transformer:

```javascript
{
	"Widgets":{

	  "id": null,
	  "WidgetsDefinitionId": "71f4de7e-ac58-4f40-b9d2-563d650a3c4c",
	  "name": "TEMPERATURE",
	  "identifier": "TEMP",
	  "WidgetsequenceId": "40bc9a39-5c03-480e-8d2b-569e6a15e257",
	  "releaseQueueId": "37811f3b-2bd8-4a9d-93fa-569a136ff881",
	  "arguments": [
		{
		  "appliedArgumentId": "cb933dc4-a81c-4db4-8089-18f0b1ba5e1a",
		  "name": "HIGH_TEMP",
		  "identifier": "HIGH_TEMP",
		  "attributes": {
			"type": "NUMERIC",
			"unitId": null,
			"value": 34
		  }
		},
		{
		  "appliedArgumentId": "041da586-f3cf-4678-87dc-f2a1d76b8b62",
		  "name": "LOW_TEMP",
		  "identifier": "LOW_TEMP",
		  "attributes": {
			"type": "NUMERIC",
			"unitId": null,
			"value": 12
		  }
		}
	  ]
    }
}
```
Here is how the input body for the testing endpoint will look like, using the above JSON example:
```javascript
{
  "pluginId": "91f8cbd0-11f2-4669-9910-90a5a0b7d84a",
  "input": "{\"Widgets\":{\"id\": null,  \"WidgetsDefinitionId\": \"71f4de7e-ac58-4f40-b9d2-563d650a3c4c\",	  \"name\": \"TEMPERATURE\",	  \"identifier\": \"TEMP\",	  \"WidgetsequenceId\": \"40bc9a39-5c03-480e-8d2b-569e6a15e257\",	  \"releaseQueueId\": \"37811f3b-2bd8-4a9d-93fa-569a136ff881\",	  \"arguments\": [		{		  \"appliedArgumentId\": \"cb933dc4-a81c-4db4-8089-18f0b1ba5e1a\",		  \"name\": \"HIGH_TEMP\",		  \"identifier\": \"HIGH_TEMP\",		  \"attributes\": {			\"type\": \"NUMERIC\",			\"unitId\": null,			\"value\": 34		  }		},		{		  \"appliedArgumentId\": \"041da586-f3cf-4678-87dc-f2a1d76b8b62\",		  \"name\": \"LOW_TEMP\",\"identifier\": \"LOW_TEMP\",\"attributes\": {\"type\": \"NUMERIC\",\"unitId\": null,\"value\": 12}}]}}",
  "executeAsync": true
}
```
> The Widgets displayed above is an example Widgets. If you want to properly test your Widgets transformer, you have to define the Widgets definition and Widgets compatible with your satellite software.

## Testing with linking to a release queue
Another way to test if your Widgets Transformer Plugin functions well, is to attach it to the Release Queue, create a Widgets Sequence linked to this queue and then create a Widgets inside of this Widgets Sequence. Your plugin will be executed at the Widgets creation. You can check this flow in details in our Sending Widgets via Release Queue tutorial.

