# Day 2

## Learned redis commands


### Basic commands


SET key value --- set the key value pair.

GET key --- get the value of a key.

ttl key --- show the expiry time of a key.

KEYS * --- show all keys and their values.

DEL key --- delete the given key value pair.

FLUSHALL --- remove all keys and their values.

EXISTS key --- check if a given key exists or not.

EXPIRE key time --- set a expiry time for a given key.

SETEX key time value --- set an expiry time when setting key value pair.

### Array commands

LPUSH array value --- push a value to left of the array

RPUSH array value--- push a value to right of the array

LRANGE array start stop --- get the values from start to stop

LPOP array --- pop from left

RPOP array --- pop from right


### SETS

SADD myset value --- add value of myset

SMEMBERS myset --- show all member of myset

### OBJECT/HASH

HSET key field value --- set field with value in key

HGET key field --- get value of field

HGETALL key --- get all field and value of key

HDEL key field --- delete field from the key

HEXISTS key field --- check if a field exists in key

