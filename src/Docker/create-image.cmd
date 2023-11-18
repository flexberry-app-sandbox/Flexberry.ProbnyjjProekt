docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probnyjj__proekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probnyjj__proekt/app ../..
