FROM node:21.2.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./

# This is for documentation purposes only.
# document the intended port usage
ENV PORT 4000 
EXPOSE $PORT 

LABEL name="backend"

CMD [ "npm", "start" ]
