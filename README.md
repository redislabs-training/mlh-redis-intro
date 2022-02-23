# introduction-to-redis

## [Redis Keys](https://redis.io/topics/data-types-intro#redis-keys)
- Binary Safe (if it can be converted into binary, you can store it)
- 512 MB max
- whatever you want
  - stick to a schema:
    - users:justincastilla:followers
    - weather:94606:02:23:1730
    - location:574:product:7743854
  
## [Strings](https://redis.io/topics/data-types-intro#redis-strings)
- SET/GET strings and numbers 
  - Redis detects the differences
- INCR, DECR, INCRBY, DECRBY
- TTL (time-to-live) with SET key EX value 

## [Lists ](https://redis.io/topics/data-types-intro#redis-lists)
- Push/Pop functionality, but from either end
- Great for implementing Stacks and Queues

### [Sorted Set](https://redis.io/topics/data-types-intro#redis-sorted-sets)

Adding members and scores to a sorted set:
```bash
> ZADD team_scores 23740 Brian
 (integer) 1
> ZADD team_scores 12010 Guy 56750 Justin 78130 Simon 66320 Steve 86590 Suze
(integer) 5
>
```

Let's read the sorted set back:

```bash
> ZRANGE team_scores 0 -1
1) "Guy"
2) "Brian"
3) "Justin"
4) "Steve"
5) "Simon"
6) "Suze"
```

That only gives us the names, and in order from lowest to highest :/. Let's reverse the order and get scores as well:

```bash
ZRANGE team_scores 0 -1 REV WITHSCORES
 1) "Suze"
 2) "86590"
 3) "Simon"
 4) "78130"
 5) "Steve"
 6) "66320"
 7) "Justin"
 8) "56750"
 9) "Brian"
10) "23740"
11) "Guy" 
12) "12010"
```

Suze is #1!