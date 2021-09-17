# Day 3

## Practice redis

SUBSCRIBE channel --- subscribe to a channel

UNSUBSCRIBE channel --- unsubscribe from the channel

PUBLISH channel message --- publish a message to channel

PSUBSCRIBE d* --- means subscribe to any channel whose name starts with d

PUNSUBSCRIBE d* --- unsubscribe all the channel whose name starts with d

XADD mystream * field1 value1 field2 value2 field3 --- * assigns a random id to it , xadd add the data to a stream

XLEN mystream --- returns the length of the stream

XRANGE mystream  - +  --- show all stream and their fields and values

XRANGE mystream + - COUNT 2  --- 

XREVRANGE mystream + - COUNT 2 --- gives 2 values from the bottom

XREAD COUNT 200 STREAMS mystream startIndex --- return 200 message starting from index (startIndex)

XREAD BLOCK 60000 STREAMS mystream 0 --- after 60 sec if data does not come then close the socket



