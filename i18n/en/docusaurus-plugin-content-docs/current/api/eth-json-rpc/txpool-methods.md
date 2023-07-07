---
sidebar_position: 7
---

# TxPool Methods

## txpool_content
Returns a list of the exact details of all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.

#### Client Examples
HTTP

```shell
curl -X POST --data '{"jsonrpc":"2.0","method":"txpool_content","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545
```
WebSocket

```shell
wscat -c ws://localhost:8546 -x '{"jsonrpc": "2.0", "id": 1, "method": "txpool_content", "params": []}'
```
NodeJS/Javascript

```shell
txpool.content();
```

#### Result
```json
{"jsonrpc":"2.0","id":1,"result":{"pending":{},"queued":{}}
```


## txpool_inspect
Returns a list on text format to summarize all the transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only. This is a method specifically tailored to developers to quickly see the transactions in the pool and find any potential issues.

#### Client Examples
HTTP

```shell
curl -X POST --data '{"jsonrpc":"2.0","method":"txpool_inspect","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545
```

WebSocket

```shell
wscat -c ws://localhost:8546 -x '{"jsonrpc": "2.0", "id": 1, "method": "txpool_inspect", "params": []}'
```

NodeJS/Javascript

```js
txpool.inspect();
```

#### Result
```json
{"jsonrpc":"2.0","id":1,"result":{"pending":{},"queued":{}}
```

## txpool_status
Returns the number of transactions currently pending for inclusion in the next block(s), as well as the ones that are being scheduled for future execution only.

#### Client Examples
HTTP

```shell
curl -X POST --data '{"jsonrpc":"2.0","method":"txpool_status","params":[],"id":1}' -H "Content-Type: application/json" http://localhost:8545
```

WebSocket
```shell
wscat -c ws://localhost:8546 -x '{"jsonrpc": "2.0", "id": 1, "method": "txpool_status", "params": []}'
```

NodeJS/Javascript

```shell
txpool.status();
```

#### Result
```json
{"jsonrpc":"2.0","id":1,"result":{"pending":"0x0","queued":"0x0"}}
```
