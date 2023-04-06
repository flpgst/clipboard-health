# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### 1 - Create migrations to new customId field.

#### Description

A new column should be created in the database to store Agent custom ids.

#### Details

The new collumn should be created in `Agents` table and called `custom_id` with type `String(255)`

#### Effort

**1**

#### Acceptance Criteria

[ ] Use migrations to create the new field;

[ ] Update DB models to have the new column mapped

### 2 - Update CRUD operations to include customId field.

#### Description

Create and Update Agents should be updated to receive the new customId parameter.

#### Details

The customId parameter will be received by body param in POST, PUT and PATCH operations and should be saved in the DB.

#### Effort

**3**

#### Acceptance Criteria

[] Update POST operation

[] Update PUT operation

[] Update PATCH operation

[] Update unit tests to check if customId is returning as expected.

### 3 - Create getShiftsByAgentCustomId feature

#### Description

The Shifts could be fecthed by Agent customId

#### Details

Need to create a new function called `getShiftsByAgentCustomId` that will receive the AgentCustomId by parameter and will return the same data as getShiftsByFacility but just for this specific Agent.
Be aware that the data of `getShiftsByAgentCustomId` should be passed to `generateReport` as a list of Shifts of the Agent.

#### Effort

**8**

#### Acceptance Criteria

[] Create function getShiftsByAgentCustomId

[] Create unit tests for getShiftsByAgentCustomId

[] Create integration test to validade the report generation for a single agent called by customId paramater
