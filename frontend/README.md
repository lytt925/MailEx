docker build -t mailex-frontend .
docker run --rm --name mailex-frontend-0.0.1 --env-file .env.local -p 3000:3000 mailex-frontend
