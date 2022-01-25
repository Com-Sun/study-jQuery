# Ajax

## 학습목표

- Ajax가 무엇인지 이해하기
- Ajax를 직접 사용해보며 사용법을 익히기

### Ajax 정의

    Asynchronous JavaScript and XML 의 준말. 비동기적인 웹 애플리케이션 제작에 쓰이는 웹 개발 기법

즉, 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것을 말한다. JSON, XML, HTML, 그리고 일반 텍스트 형식 등의 다양한 포멧을 주고받을 수 있다.

**비동기성**이 중요하다. 페이지 전체를 새로고침 하지 않고도 수행된다.

- 페이지 새로고침 없이 서버에 요청
- 서버로부터 데이터를 받고 작업을 수행

### Vanilla JS로 구현한 Ajax

일단은 이 개념만 알아두자.

- HTTP request 만들기
- 서버 응답에 대한 처리


### jQuery를 사용한 Ajax 구현

jQuery를 사용하여 Ajax를 구현할 경우 간단하게 구현할 수 있다.

    $.ajax({
    type: "", //GET, POST
    url: "",
    data: {},
    success: function(response){
    }
    })

### 사용하기

    RealtimeCityAir: {
        list_total_count: 25,
        RESULT: {
        CODE: "INFO-000",
        MESSAGE: "정상 처리되었습니다"
        },
            row: [
            {
            MSRDT: "202201251000",
            MSRRGN_NM: "도심권",
            MSRSTE_NM: "중구",
            PM10: 23,
            PM25: 14,
            O3: 0.005,
            NO2: 0.047,
            CO: 0.6,
            SO2: 0.004,
            IDEX_NM: "보통",
            IDEX_MVL: 79,
            ARPLT_MAIN: "NO2"
            },
                {...}

위와 같은 자료형에서 원하는 자료를 다뤄보자.

    success: function (response) {
    let rows = response["RealtimeCityAir"]["row"];


현재 rows엔 row라는 JSON 자료형이 들어가있다.

    for (let i = 0; i < rows.length; i++) {
    let gu_name = rows[i]['MSRSTE_NM'];

gu_name에 구의 정보가 들어간다.

- 만약 row가 단 하나일 경우

  
    let gu_name = rows[0]['MSRSTE_NM'];

이렇게 사용한다.

OpenAPI 를 이용하여 직접 다뤄보도록 하자.

### [실습](/ps/ex1_mise)