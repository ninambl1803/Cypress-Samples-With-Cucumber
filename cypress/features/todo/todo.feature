Feature: View TODO app
  I want to view TODO app when access the link

  Scenario: View container list
    Given I access to example to-do app page
    When Displays two todo items by default
    Then I can add new todo items
    Then I can check off an item as completed
    Given with a checked task
    Then can filter for completed tasks

  


