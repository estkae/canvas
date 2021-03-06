Feature: ExternalDragDrop

	** Make sure the test harness is running and listening to http://localhost:3001 ***

	As a human
	I want to test drag and drop of external object to canvas
	So I drop a data node from side panel to common canvas

Scenario: Sanity test to test drag and drop of external object to canvas
	Then I resize the window size to 1400 width and 800 height

	Given I am on the test harness
	Given I have toggled the app side panel
	Given I have uploaded palette "modelerPalette.json"

	# Travis needs this extra time
	Then I pause for 0.3 seconds

	Then I drag the Derive Node from side panel to common canvas at 300, 300
	Then I verify the number of nodes are 1
	Then I click the undo button on the toolbar
	Then I verify the number of nodes are 0
	Then I click the redo button on the toolbar
	Then I verify the number of nodes are 1
