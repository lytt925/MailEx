docker build -t mailex-backend .
docker run --rm --name mailex-0.0.1 --env-file .env -p 4000:4000 -v $(pwd):/app -v /app/node_modules mailex-backend

