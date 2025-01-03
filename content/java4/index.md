---
emoji: /i_s.webp
title: 막 갈기는 스프링부트 - Controller
date: '2025-01-03 23:00:00'
author: LCY
tags: blog gatsby theme 개츠비 테마
categories: java springboot
thumbnail: /c_s.webp
description: Controller, Restful을 조져보자.
---
# Controller란?

- 사용자의 요청(Request)가 도착하는 곳(End point)을 정의하는 곳이다.
- 대부분 로직은 서비스(Service) 에서 처리되며 Request / Response 응답만 처리한다.
- 사용자가 요청할 URL을 정의한다.
- 사용자가 요청할 Method를 정의한다.
- 데이터를 리턴할 수도 있고 view를 사용하여 웹페이지를 리턴할 수도 있다.

# Controller 사용법

```java
@RestController 
// @Controller
@RequestMapping("/api/main")
public class MainController {

		// @RequestMapping(value = "/get", method = RequestMethod.GET)
    @GetMapping("/get")
    public ResponseEntity<Object> getMain(){
        return new ResponseEntity(HttpStatus.OK);
    }

    @PostMapping("/post")
    public ResponseEntity<Object> postMain(){
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/put")
    public ResponseEntity<Object> putMain(){
        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/patch")
    public ResponseEntity<Object> patchMain(){
			return new ResponseEntity(HttpStatus.OK);
		}

    @DeleteMapping("/delete")
    public ResponseEntity<Object> deleteMain(){
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
```

- @RestController 는 Restful api 에서 사용하는 컨트롤러이다.
- @Controller는 view를 이용해 웹 어플리케이션을 만들때 사용한다.
- @RequestMapping을 최상위 클래스에 선언하여 하위에 선언된 URL앞에 prefix로 이용할 수 있다.
- @RequestMapping(value = "/get", method = RequestMethod.GET) 해당 어노테이션처럼 사용 가능하지만 @GetMapping(”/get”) 이렇게 간략하게 사용도 가능하다.
- Method는 GET, POST, PUT, PATCH, DELETE를 많이 사용한다.

# Method

## GET

- 대부분 데이터를 조회하는 용도로 사용한다.
- 정상적인 응답코드는 200을 사용한다.
- 파라메타의 경우 URL뒤에 ?key=value 형태로 넘겨서 이용한다.

## POST

- 신규 데이터를 생성할 때 사용한다.
- 정상적인 응답코드는 201을 사용한다.
- 파라메타의 경우 JSON을 많이 사용한다.

## PUT, PATCH

- 기존 데이터를 수정할 때 사용한다.
- 정상적인 응답코드는 200을 사용한다.
- 파라메타의 경우 JSON을 많이 사용한다.
- PATCH는 데이터의 부분 수정일때 사용하고 PUT은 데이터가 대체될 때 사용한다.
- 보통 2개중 하나만 구현해서 사용하고 구분지어서 사용하는 경우는 드문 듯하다. 내생각~

## DELETE

- 데이터를 삭제할 때 사용한다.
- 정상적인 응답코드는 204를 사용한다.
- 파라메타의 경우 GET과 마찬가지로 URL뒤에 ?key=value 형태로 넘겨서 이용한다.

# 응답코드

### 성공시 응답은 2XX로 사용한다.

- 200 : OK
- 201 : CREATED
- 202 : ACCEPTED
- 204 : NO CONTENT

### 실패시 응답은 4XX로 사용한다.

- 400 : BAD REQUEST (잘못된 요청)
- 401 : UNAUTHORIZED (인증 안됨)
- 403 : FORBIDDEN (접근 안됨)
- 404 : NOT FOUND (찾을 수 없음)
- 405 : METHOD NOT ALLOWED (요청한 메소드를 찾을 수 없음)
- 더 많은 오류가 있지만 흔히 사용하는 것만 정리하겠다.

### 서버 오류 5XX은 나타나면 안된다. 잘 숨기도록 하자.

# Restful 표준 간략하게 정리

- 기본적으로 URL에는 소문자를 사용한다.
- URL의 마지막에는 슬러쉬(/)를 넣지 않는다.
- URL을 사용할 때는 언더바(_) 대신 대시(-)를 이용한다.
- 호출 URL을 생성할 때는 get, post, put, delete와 같은 Method는 넣지 않도록 한다.
- 최대한 명사를 이용하여 작성한다.
- 버저닝이 필요할 경우 도메인이 아닌 URL에서 처리하는 것이 좋다.

```toc
```