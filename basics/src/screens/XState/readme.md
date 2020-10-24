## Finite State Machine

Context - local store for state machine
States - State represent the state the machine is in 
Events - Events cause the machine to transition between states
Actions - Side effects - for e.g used for modifying context , many special actions
Activities - long running time based side effects 

Invoking Services - 
Actor Model -

##State
cond - preconditions to check before entering state 
entry
exit - actions to run upon reaching this state 

on - specify events on this state

##Events

specified in 'on' section of a state

target - state to transition to
actions - side effects to run
actions can be categorized into transition action , entry|exit actions


