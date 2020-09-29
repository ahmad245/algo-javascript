## LRU Cache

#### Problem Statement


Implement a class for a Least Recently Used (LRU) Cache. The cache should support inserting key / value pairs (the insertKeyValuePair() method), retrieving a
key's value (the getValueFromKey() method), and retrieving the most recently "active" key (the getMostRecentKey() method); each of these methods should run
in constant time. When a key / value pair is inserted or a key's value is retrieved, the key in question should become the most recent key. Also, the LRUCache
class should store a maxSize property set to the size of the cache, which is passed in as an argument during instantiation. This size represents the maximum
number of key / value pairs that the cache can hold at once. If a key / value pair is added to the cache when it has reached maximum capacity, the least recently
used ("active") key / value pair should be evicted from the cache and no longer retrievable; the newly added key / value pair should effectively replace it. Inserting
a key / value pair with an already existing key should simply replace the key's value in the cache with the new value and should not evict a key / value pair if the
cache is full. Attempting to retrieve a value from a key that is not in the cache should return the None (null) value.

Sample input: (for an LRU Cache of size 3)
insertKeyValuePair("a", 1)
insertKeyValuePair("b", 2)
insertKeyValuePair("c", 3)
getMostRecentKey()
getValueFromKey("a")
getMostRecentKey()
insertKeyValuePair("d", 4)
getValueFromKey("b")
insertKeyValuePair("a", 5)
getValueFromKey("a")
Sample output:
-
-
-
"c"
1
"a"
-
None
-
5



#### Explanation

We can use a Stack here


#### Solution

Check this [Python](../python/LRU_Cache.py) code.

