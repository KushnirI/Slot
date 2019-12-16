# Slot
Basic 2d online slot 

![Slot](/images/forReadme/start.PNG)

## State handler

The project was updated by adding StateMachine pattern. Currently supported states: Load, Idle, Spin and Win. Only 
active state can react on event, also provided protection against triggering of two states by the same event 
simultaneously. Added statesConfig that clearly shows all possible transitions between states and what event is 
required for this.

For Load state was created LoadingScreen and added few unused by program heavy images to make loading process more 
realistic.

![Slot](/images/forReadme/loading.PNG)

After adding State Machine it becomes easier to update old or add some new modules to the project since general logic 
is handled by stateMashnie and it makes parts more independent from each other.

## Description
Two buttons at the bottom right allows you to change the bet size from 1 to 6 before the spin. 
After pressing spin button, reels start to spin and after receiving the result from ServerMock 
it will be stoped several symbols after, showing server's result symbols. This time can be skipped 
by pressing button second time, then the button become disabled and straight after the result from server received, 
it will be shown on the screen.

![Slot](/images/forReadme/disabledButtons.PNG)

If there is winning row, winning symbols show basic win animation, other symbols become semi transparent. 
Win lines become visible and you can see win amount showing on win screen in the bottom left.

![Slot](/images/forReadme/winAnim.PNG)