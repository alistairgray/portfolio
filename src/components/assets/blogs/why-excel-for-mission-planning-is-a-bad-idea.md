# Introduction
At some point in your engineering career, you have likely used Excel or an equivalent for your mission planning. At first glance, using this method seems easy to set up and even feels quite practical at times. After all, Excel is a powerful tool. But don’t be fooled by its organized columns and rows; following this path leads to serious issues. Let’s dive in and explore why.

## Manual Data Entry and Human Error
Manually creating your mission plans and schedules within an excel spreadsheet may seem fine in principle. The one thing that is always difficult to control however is human error. 

For example, a misplaced 1 or 0 can lead to situations where your signal acquisition may be accidentally delayed by 10 minutes. The end result is that you’ve likely missed your contact opportunity and you’re made to wait until your next pass – this is not ideal. 

Below is a series of timestamps, see if you can locate the error. If you cannot find it within 10 seconds, there is nothing wrong with you, the problem is with how this information has been displayed. Data visualization is how we can overcome this issue. In the next section, we’ll explore how.

![Find the Error](/images/find-the-error-hidden.png)



## Data Visualization
The ability to check and compare one or more mission plans can be difficult when using something like excel. Whether it’s you or your mission planner checking your work, the most important variable could be as simple as how fatigued or distracted you and your team are. 

Humans are already capable of making small errors when writing plans, but we’re even worse when it comes to checking our or our other colleagues’ work.

![Find the Error?](/images/find-the-error-revealed.png)


## Satellite Nadir vs. Efficient Solar Charging
Let’s look at a more complex example. In this scenario, you’re trying to plan your next mission and one of the areas of concern is your spacecraft’s resources.

Let’s assume the following:

– The satellite has body-mounted solar panels on its nadir-facing side

– The satellite is in a low Earth orbit with an inclination that causes it to experience eclipses

– The satellite has a payload that requires nadir-pointing for Earth observation

During certain periods of the satellite’s orbit, the Earth eclipses the sun from the satellite’s perspective. This means your satellite’s nadir-facing solar panels are pointed towards the dark side of the Earth rather than the sun.

Since the solar panels are not receiving direct sunlight during these eclipse periods, they are unable to generate power to charge the satellite’s batteries. If the eclipse duration is long enough, and the batteries are not sufficiently charged beforehand, the satellite may experience a power shortage.

## Visual example
Check out the two images below. When designing and comparing mission plans, think about your experience in identifying a timestamp error above. Ask yourself what is easier to identify: a series of columns and rows containing text and values, or a graphic that illustrates the difference between a plan with violated thresholds and a nominal plan.

![Resources Example](/images/resourcesExample.png)
![Resources Example Nominal](/images/resourcesExampleNominal.png)

## Maintenance and Scaling
When relying on Excel for mission planning; file management, maintenance, and modifications quickly become a problem.

### Version Control Nightmares
As the number of revisions grows, it becomes increasingly difficult to keep track of the latest version and control the history of changes. One small mistake or overwritten file can lead to major headaches down the line.

## Data security and integrity
One of those potential headaches is data security and integrity. Data corruption may not grab headlines like ransomware attacks, but it poses a serious risk to space operations. And it’s not always caused externally; more commonly, data corruption occurs from fairly benign activities. 

When it comes to mission planning within Excel or an equivalent, the bigger the file, the more complex the formulas, and more people using your file, the greater the risk of accidental data corruption. Even more commonly, if Excel is open and your computer locks up or shuts down unexpectedly, there’s a fairly high chance of lost data and/or corruption. 

## Template Rigidity
Another issue with Excel-based planning is the need to create a series of rigid templates for each mission. Although these templates can accommodate the different requirements and constraints of individual missions, it cannot accommodate multiple overlapping changes, leading to a lot of manual tweaking and wasted effort. Need to make a change? Get ready to update multiple formulas and risk losing all of your precious work.

This is especially true during time-sensitive changes to mission plans, where last minute changes can create an unnecessary burden on your team 

## Constellation Scaling Struggles
Perhaps the biggest limitation of using Excel is that it simply doesn’t scale well. As the number of satellites and missions increases, so does the complexity of the planning process. Suddenly, you’re drowning in a sea of spreadsheets, struggling to keep track of dependencies, complications, and potential conflicts. What worked for one satellite becomes a planning nightmare for a constellation.

## Conclusion
Don’t let the allure of a familiar spreadsheet lead you astray. When it comes to mission planning, just say no to Excel and yes to a brighter, more efficient future. 

Want to know the top 3 things that you should consider when choosing an MPS? Check out our blog that dives deeper into what you need. 