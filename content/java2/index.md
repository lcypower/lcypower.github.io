---
emoji: /i_m.webp
title: pom.xml 메이븐 조지기
date: '2025-01-01 23:00:00'
author: LCY
categories: springboot maven
thumbnail: /c_im.webp
description: pom.xml 메이븐(Maven)을 사용하여 프로젝트 설정 및 빌드를 해보자.
---
## Maven? Gradle?

소스코드를 독립 소프트웨어로 가공하는 과정 또는 그 결과물을 만들 수 있도록 도와주는 빌드 도구이다. Maven은 xml 형태로 작성되고 Gradle은 Groovy로 작성되어 작성법이 다르다. 나는 주로 Maven을 쓴다. xml을 많이 사용해서 이게 더 익숙하다. Gradle을 사용하는 것도 별 문제는 없다. 작성법이 다를 뿐 용도는 똑같다.

## Lifecycle?

동작 방식이 정해져 있다. 미리 정해진 빌드 순서대로 빌드를 한다. 

- Build : 일반적인 빌드 프로세스를 실행한다.
- Clean : 빌드된 프로젝트 파일들을 모두 삭제한다.
- Validate : 프로젝트가 올바른지 확인하고 정보사용여부를 확인한다.
- Complie : 프로젝트를 컴파일한다.
- Test : 유닛 테스트를 한다.
- Package : 컴파일된 소스와 리소스들을 설정된 형태의 파일로 배포할 수 있는 패키지(jar / war)를 만든다.
- Verify : 통합 테스트를 하여 품질을 확인한다.
- Install : 패키지를 설치한다.
- Site : 프로젝트 문서와 사이트를 작성한다.
- Deploy : Package를 원격 저장소에 release한다.

## maven dependencies 설정

```xml
<project>
....

	<dependencies>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-web</artifactId>
      </dependency>

      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-devtools</artifactId>
          <scope>runtime</scope>
          <optional>true</optional>
      </dependency>
      <dependency>
          <groupId>org.projectlombok</groupId>
          <artifactId>lombok</artifactId>
          <optional>true</optional>
      </dependency>
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-starter-test</artifactId>
          <scope>test</scope>
      </dependency>
  </dependencies>
....
</project>
```

**<dependencies>**는 프로젝트가 현재 사용하는 라이브러리들의 정보들을 저장한다. 하위에는 사용중인 라이브러리의 정보가 <dependency>를 이용하여 저장된다. 하위 속성으로는 대표적으로 4가지 옵션이 들어간다.

- <groupId> : 사용중인 라이브러리의 그룹명이다.
- <artifactId> : 사용중인 라이브러리의 아티팩트명이다.
- <version> : 사용중인 라이브러리의 버전이다. 버전이 없다면 최신버전이 적용된다.
- <scope> : 사용중인 라이브러리가 프로젝트 내에서 사용하는 범위이다.

## maven profile, build 설정

```xml
<project>
...

	<build>
      <finalName>lcy-springframework-${env}-${project.version}</finalName>
      <plugins>
          <plugin>
              <groupId>org.springframework.boot</groupId>
              <artifactId>spring-boot-maven-plugin</artifactId>
              <version>2.7.5</version>
              <executions>
                  <execution>
                      <goals>
                          <goal>repackage</goal>
                      </goals>
                  </execution>
              </executions>
          </plugin>
      </plugins>
      <resources>
          <resource>
              <directory>src/main/resources</directory>
          </resource>
          <resource>
              <directory>src/main/resources-${env}</directory>
          </resource>
      </resources>
  </build>
	<profiles>
      <profile>
          <id>local</id>
          <activation>
              <activeByDefault>true</activeByDefault>
          </activation>
          <properties>
							<env>local</env>
              <spring.profiles.active>local</spring.profiles.active>
          </properties>
      </profile>
      <profile>
          <id>dev</id>
          <properties>
							<env>dev</env>
              <spring.profiles.active>dev</spring.profiles.active>
          </properties>
      </profile>
      <profile>
          <id>prod</id>
          <properties>
							<env>prod</env>
              <spring.profiles.active>prod</spring.profiles.active>
          </properties>
      </profile>
  </profiles>

...
</project>
```

profile 를 적용하면 local, dev, prod와 같이 3가지의 프로파일이 만들어진다. 해당 프로파일 선택하여 빌드할 수 있으며 선택된 <env>값을 읽어 사용할 수 있다. local을 선택하여 빌드한다면 build에 있는 fileName lcy-springframework-local-${project.version} 으로 설정한 빌드패스에 jar 또는 war파일이 생성된다. 빌드를 진행할때는 resource에 설정된 기본폴더의 설정파일과 <env>가 적용된 폴더의 파일을 적용하여 빌드된다.

## mvnw?

```bash
## default로 설정한 프로파일이 적용된다.
$mvnw clean package
 
## local 리소스가 적용된다.
$mvnw clean package -P local
 
## dev 리소스가 적용된다.
$mvnw clean package -P dev

## prod 리소스가 적용된다. 
$mvnw clean package -P prod
```

mvnw 명령어를 이용하여 clean을 실행하여 모든 빌드파일을 삭제 후 package를 시작한다. -P 옵션을 이용하면 현재 리소스의 프로필을 불러와 package 할 수 있다. -P 옵션이 없다면 default로 설정된 프로파일이 적용된다.

```toc
```