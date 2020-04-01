# heonstagram
Instagram clone coding made by node, express, graphql, apollo, prisma, react with nomad coder


## Install Prisma
prisma : ORM(objective-relation mapping)의 일종으로, 객체 간 연결 해줌. 특히 prisma는 graphql에서 정의를 할 수 있어서 편리함!  
일단 회원가입 해야함  
이후 add a service 하고, 터미널에 login 관련 코드 입력  
prisma 홈페이지에서 그러면 authenticate 완료! -> create new service  
이후 터미널에서 prisma init -> 이후 서버 제작 (여기에서는 dev 서버로 만들고, us서버 이용함)  
prisma 파일들에서 DB 모델들 만들고 나서 터미널에 "prisma deploy" 하면 내 prisma계정에 업로드 됨  
prisma 계정에서 데이터 관리 할 수 있음!


## Prisma 이용 방법
만들어진 datamodel.prisma 파일에 내가 원하는 데이터 모델 모양 설계  
src폴더 아래에 models.praphql파일에 datamodel.prisma 파일의 내용을 복붙한다. (directive 변수 - @로 시작하는 변수는 삭제)  
src폴더 -> api폴더 아래에 원하는 graphql파일과 resolver파일을 쌍으로 만든다.  
npm run prisma (package.json 참고)에 포함된 generate를 이용해서 앱과 prisma 간 연동시킨다!  

https://us1.prisma.sh/tae-heon-kim-76674f/heonstagram/dev는 datamodel.prisma와 관련된 함수들을 볼 수 있는 곳!  
localhost:4000에서는 내 앱의 api에서 쓰이는 함수가 모아짐  


## 로그인 secret 인증 방법
npm add passport, passport-jwt  
confirmSecret 폴더 참고. passport-jwt 공식문서에 나온대로 코드 작성  

