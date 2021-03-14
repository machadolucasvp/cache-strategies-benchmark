# Cache Strategies Benchmark
One of the first things that we think for optimizing api's is caching, but we need be aware of what cache strategy suites each case better. 

## About
This repository consist of a load test using [Artillery](https://github.com/artilleryio/artillery), a open-source load test toolkit, in a simple microservice using in-process and distributed cache strategies aiming to compare and measure latency impact between both.

> You should not decide your cache strategy only by measuring latency. Each strategy has it's own drawbacks, for example, despite latency a in-process cache strategy do not suits well for an environment that you need shared cache data. For a deep understading of this subject I recommend the following [article](https://medium.datadriveninvestor.com/all-things-caching-use-cases-benefits-strategies-choosing-a-caching-technology-exploring-fa6c1f2e93aa).

## Motivation 
Some days ago talking with [@des467](https://github.com/desk467), he pointed out how 
a in-process cache strategy could have better performance compared to a distributed cache strategy in some cases. Based on this conversation, I have decided to measure the latency impact on reading operations using [node-cache](https://github.com/node-cache/node-cache) and [redis](https://github.com/redis/redis) for in-process and distributed strategy respectively in a simplified environment. 

## How to run
First you need `npm`, `docker` and `docker-compose` installed 

Next, install `Artillery` 
```bash
npm install -g artillery
```

Next, launch the services
```bash
docker-compose up -d
```

Next, make the script for run the load test in docker executable
```bash
chmod +x ./scripts/search-messages-docker.sh
```

Next, run the load test for each service
```bash
./scripts/search-message-docker.sh <service-name>
```
i.e
```bash
./scripts/search-message-docker.sh in-process-server
./scripts/search-message-docker.sh redis-server 
```

### In-Process Cache Strategy Benchmark
![in-process-cache-benchmark png](https://user-images.githubusercontent.com/44952113/109252733-fd33db80-77cc-11eb-8153-af82a28b7ddc.png)

### Redis (Cloud Hosted) Cache Strategy Benchmark
![redis-cloud-benchmark png](https://user-images.githubusercontent.com/44952113/109252734-fdcc7200-77cc-11eb-9a85-828112d16a60.png)

### Redis (Local) Cache Strategy Benchmark
![redis-local-benchmark](https://user-images.githubusercontent.com/44952113/109252939-6b789e00-77cd-11eb-87b4-4f0f6766d9bb.png)

## License
The MIT License (MIT)

Copyright (c) 2021 Lucas Machado