## 대구대 식당 추천 프로그램

- 대구대 근처 식당 메뉴 추천 웹앱 `DU Food`
  - 이 프로그램은 주변 식당 중 한 곳을 랜덤하게 추천하여 지도에 표시해주는 웹 애플리케이션입니다.
  - [DU Food 시연 영상](https://github.com/kkeonu0613/daegufood/blob/main/DUFood.mp4)
    - 영상은 다운로드해야 볼 수 있습니다.
     
- GitHub 오픈소스 활용 프로젝트
  - 팀 구성원 : 
    - 팀장 : [김건우](https://github.com/kkeonu0613),
    - 팀원 : [곽보석](https://github.com/jewelry1104), [김성현](https://github.com/seonghyeon1022)

- Sources
  - Icons: [Font Awesome](https://fontawesome.com/)
  - Header font: Jua from [Google Fonts](https://fonts.google.com/)
  - Open Sources : rainbow-Meal (https://github.com/tula3and/rainbow-meal.git)
  - Open Api : Naver map api (https://www.ncloud.com/product/applicationService/maps)
  
## 사용 방법

1. 홈페이지에 접속합니다.
2. "랜덤 추천" 버튼을 클릭합니다.
3. 프로그램이 랜덤하게 식당을 추천합니다.
4. 지도에서 추천된 식당의 위치를 확인할 수 있습니다.

## 기능

### 랜덤 추천

- "랜덤 추천" 버튼을 클릭하면 프로그램이 대구대 주변의 식당 중에서 한 곳을 랜덤하게 추천합니다.
- 추천된 식당의 이름과 주소를 확인할 수 있습니다.

### 지도 표시

- 추천된 식당의 위치를 지도에 표시합니다.
- 지도 위에 마커를 통해 식당의 위치를 시각적으로 확인할 수 있습니다.
- 마커를 클릭하면 해당 식당의 상세 정보를 확인할 수 있습니다.

## 기술 스택

- HTML, CSS, JavaScript
- Naver map api
- Rainbow-Meal (https://github.com/tula3and/rainbow-meal.git)

## 프로젝트 구조

- `index.html`: 메인 HTML 파일
- `style.css`: CSS 스타일 파일
- `main.js`: JavaScript 코드 파일
- `map.js`: 지도 관련 JavaScript 코드 파일

## 프로젝트 설정 및 실행 방법

1. 해당 저장소를 클론합니다.
2. `index.html` 파일을 웹 브라우저에서 실행합니다.
3. 추가로 네이버 Map api key를 생성하여 실행 코드에 발급받은 api key를 추가하여야 합니다.

## 라이선스

이 프로젝트는 [네이버 Map API](https://www.ncloud.com/product/applicationService/maps)를 활용하여 개발되었습니다. 
네이버 Map API의 사용은 네이버의 이용약관과 API 이용약관에 따라 규제됩니다. API의 사용에 대한 자세한 내용은 네이버의 공식 문서를 참조하시기 바랍니다.
