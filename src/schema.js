// graphql 관련해서 모든 typeDefs, resolvers 파일들을 이 파일에 다 모을 것!
// 이를 위해서, graphql-tools, merge-graphql-schemas를 설치해야 한다

import path from "path";
import {makeExecutableSchema} from "graphql-tools";
import {fileLoader, mergeResolvers, mergeTypes} from "merge-graphql-schemas";

// allTypes에는 api 폴더(graphql관련 파일 모아둔 폴더임) 아래 아무 폴더 아래 아무 파일 중 graphql 파일들 다 가져온다
const allTypes = fileLoader(path.join(__dirname, "/api/**/*.graphql"));
const allResolvers = fileLoader(path.join(__dirname, "/api/**/*.js"));

const schema = makeExecutableSchema({
    typeDefs: mergeTypes(allTypes),
    resolvers: mergeResolvers(allResolvers)
});
export default schema